import type { VercelRequest, VercelResponse } from '@vercel/node';

interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  website?: string;
  services: string[];
  painPoints: string;
  goals: string;
}

// Environment variables (see RESEND_SETUP.md):
// RESEND_API_KEY      required, from resend.com/api-keys
// CONTACT_TO_EMAIL    optional, defaults to hello@six3.agency
// CONTACT_FROM_EMAIL  optional, defaults to Resend's test sender until six3.agency is verified
// ATTIO_API_KEY       optional

const DEFAULT_TO = 'hello@six3.agency';
const DEFAULT_FROM = 'SIX³ Agency <onboarding@resend.dev>';

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const MAX_REQUESTS = 3; // Max 3 submissions per hour per IP
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + WINDOW_MS });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const identifier = req.headers['x-forwarded-for'] as string || req.headers['x-real-ip'] as string || 'unknown';
  if (!checkRateLimit(identifier)) {
    return res.status(429).json({
      error: 'Too many requests',
      message: 'Please wait before submitting another form. Maximum 3 submissions per hour.'
    });
  }

  try {
    const formData: FormData = req.body;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.services?.length || !formData.painPoints || !formData.goals) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    let emailed = false;
    let savedToCrm = false;

    try {
      await sendEmailViaResend(formData);
      emailed = true;
    } catch (emailError) {
      console.error('Email error:', emailError);
    }

    if (process.env.ATTIO_API_KEY) {
      try {
        await createAttioContact(formData);
        savedToCrm = true;
      } catch (attioError) {
        console.error('Attio error:', attioError);
      }
    }

    // Only report success if the enquiry actually reached us somewhere
    if (!emailed && !savedToCrm) {
      return res.status(502).json({
        error: 'Delivery failed',
        message: 'We could not send your message. Please email hello@six3.agency directly.',
      });
    }

    res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    // Log error in development only
    if (process.env.NODE_ENV === 'development') {
      console.error('Error processing form submission:', error);
    }
    res.status(500).json({ 
      error: 'Internal server error', 
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

async function sendEmailViaResend(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not set');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
      to: [process.env.CONTACT_TO_EMAIL || DEFAULT_TO],
      reply_to: formData.email,
      subject: `New enquiry from ${formData.name}`.slice(0, 200),
      html: generateEmailHTML(formData),
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend error ${response.status}: ${await response.text()}`);
  }

  return response.json();
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const safeUrl = (value: string) => {
  const url = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    return new URL(url).protocol.startsWith('http') ? url : '';
  } catch {
    return '';
  }
};

async function createAttioContact(formData: FormData) {
  const attioApiKey = process.env.ATTIO_API_KEY;

  if (!attioApiKey) {
    throw new Error('Attio API key missing');
  }

  const contactData = {
    data: {
      values: {
        'first-name': [{ value: formData.name.split(' ')[0] }],
        'last-name': [{ value: formData.name.split(' ').slice(1).join(' ') || '' }],
        'email-addresses': [{ 
          email_address: formData.email,
          is_primary: true
        }],
        ...(formData.company && {
          'primary-company': [{ target_object: 'companies', target_record_id: null }]
        }),
        ...(formData.phone && {
          'phone-numbers': [{ 
            phone_number: formData.phone,
            is_primary: true
          }]
        }),
        ...(formData.website && {
          'website': [{ url: formData.website }]
        }),
      }
    }
  };

  // Also create a note with the form details
  const noteData = {
    data: {
      values: {
        'title': [{ value: 'Contact Form Submission' }],
        'content': [{ 
          value: `Services Interested In: ${formData.services.join(', ')}\n\nPain Points:\n${formData.painPoints}\n\nGoals:\n${formData.goals}`
        }],
        'linked-records': [] // Will be populated after contact is created
      }
    }
  };

  const response = await fetch('https://api.attio.com/v2/objects/people/records', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${attioApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Attio error: ${response.statusText} - ${errorText}`);
  }

  const contact = await response.json();

  // Create note linked to the contact
  if (contact.data?.id?.record_id) {
    noteData.data.values['linked-records'] = [{
      target_object: 'people',
      target_record_id: contact.data.id.record_id
    }];

    await fetch('https://api.attio.com/v2/objects/notes/records', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${attioApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteData),
    });
  }
}

function generateEmailHTML(raw: FormData): string {
  const formData = {
    ...raw,
    name: escapeHtml(raw.name),
    email: escapeHtml(raw.email),
    company: raw.company ? escapeHtml(raw.company) : '',
    phone: raw.phone ? escapeHtml(raw.phone) : '',
    website: raw.website ? escapeHtml(raw.website) : '',
    services: raw.services.map((s) => escapeHtml(String(s))),
    painPoints: escapeHtml(raw.painPoints),
    goals: escapeHtml(raw.goals),
  };
  const websiteHref = raw.website ? escapeHtml(safeUrl(raw.website)) : '';
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; }
        .services { background-color: #f9f9f9; padding: 15px; border-radius: 5px; }
        .services ul { margin: 0; padding-left: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
          <p>A new contact form has been submitted on your website.</p>
        </div>

        <div class="field">
          <div class="label">Name:</div>
          <div class="value">${formData.name}</div>
        </div>

        <div class="field">
          <div class="label">Email:</div>
          <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
        </div>

        ${formData.company ? `
        <div class="field">
          <div class="label">Company:</div>
          <div class="value">${formData.company}</div>
        </div>
        ` : ''}

        ${formData.phone ? `
        <div class="field">
          <div class="label">Phone:</div>
          <div class="value"><a href="tel:${formData.phone}">${formData.phone}</a></div>
        </div>
        ` : ''}

        ${formData.website ? `
        <div class="field">
          <div class="label">Website:</div>
          <div class="value"><a href="${websiteHref}" target="_blank">${formData.website}</a></div>
        </div>
        ` : ''}

        <div class="field">
          <div class="label">Services Interested In:</div>
          <div class="services">
            <ul>
              ${formData.services.map(service => `<li>${service}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="field">
          <div class="label">Pain Points:</div>
          <div class="value">${formData.painPoints.replace(/\n/g, '<br>')}</div>
        </div>

        <div class="field">
          <div class="label">Goals:</div>
          <div class="value">${formData.goals.replace(/\n/g, '<br>')}</div>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
        <p style="color: #666; font-size: 12px;">This email was sent from the contact form on your website.</p>
      </div>
    </body>
    </html>
  `;
}