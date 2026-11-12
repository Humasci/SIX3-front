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
// ATTIO_API_KEY       optional; saves each enquiry as a person + note in Attio (needs record and note
//                     read/write scopes). Leave unset to use email only.
// The thank-you email to the enquirer is only sent once CONTACT_FROM_EMAIL is set, because Resend's
// test sender can only deliver to the account owner's own address.

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

    // Thank-you email to the enquirer. Never fails the request: their enquiry already reached us
    try {
      await sendConfirmationEmail(formData);
    } catch (confirmError) {
      console.error('Confirmation email error:', confirmError);
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

const ATTIO_API = 'https://api.attio.com/v2';

async function attioRequest(path: string, method: 'POST' | 'PUT', body: unknown) {
  const response = await fetch(`${ATTIO_API}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${process.env.ATTIO_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`Attio ${method} ${path} failed ${response.status}: ${await response.text()}`);
  }
  return response.json();
}

const domainOf = (website?: string) => {
  if (!website) return '';
  try {
    return new URL(safeUrl(website)).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
};

// Saves the enquiry in Attio: finds or creates the person by email (so repeat enquiries update the
// same record), links their company when they gave a website, and attaches the answers as a note.
async function createAttioContact(formData: FormData) {
  if (!process.env.ATTIO_API_KEY) {
    throw new Error('ATTIO_API_KEY is not set');
  }

  const fullName = formData.name.trim();
  const [firstName, ...rest] = fullName.split(/\s+/);

  // Company is optional: if it fails (e.g. no domain), still save the person
  let companyId: string | undefined;
  const domain = domainOf(formData.website);
  if (domain) {
    try {
      const company = await attioRequest('/objects/companies/records?matching_attribute=domains', 'PUT', {
        data: {
          values: {
            domains: [{ domain }],
            ...(formData.company && { name: [{ value: formData.company }] }),
          },
        },
      });
      companyId = company.data?.id?.record_id;
    } catch (companyError) {
      console.error('Attio company error:', companyError);
    }
  }

  const person = await attioRequest('/objects/people/records?matching_attribute=email_addresses', 'PUT', {
    data: {
      values: {
        email_addresses: [{ email_address: formData.email }],
        name: [{ first_name: firstName, last_name: rest.join(' '), full_name: fullName }],
        ...(formData.phone && { phone_numbers: [{ original_phone_number: formData.phone }] }),
        ...(companyId && { company: [{ target_object: 'companies', target_record_id: companyId }] }),
      },
    },
  });

  const personId = person.data?.id?.record_id;
  if (!personId) throw new Error('Attio did not return a person record id');

  const details = [
    `Services: ${formData.services.join(', ')}`,
    ...(formData.company ? [`Company: ${formData.company}`] : []),
    ...(formData.website ? [`Website: ${formData.website}`] : []),
    ...(formData.phone ? [`Phone: ${formData.phone}`] : []),
  ];
  const lines = [...details, '', 'Pain points:', formData.painPoints, '', 'Goals:', formData.goals];

  await attioRequest('/notes', 'POST', {
    data: {
      parent_object: 'people',
      parent_record_id: personId,
      title: `Website enquiry · ${new Date().toISOString().slice(0, 10)}`,
      format: 'plaintext',
      content: lines.join('\n'),
    },
  });
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
const SITE = 'https://six3.agency';

async function sendConfirmationEmail(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  // Needs a verified sending domain: skip quietly until six3.agency is verified in Resend
  if (!apiKey || !from) return;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [formData.email],
      reply_to: process.env.CONTACT_TO_EMAIL || DEFAULT_TO,
      subject: 'Thanks, we’ve got your enquiry | SIX³ Agency',
      html: generateConfirmationHTML(formData),
      text: generateConfirmationText(formData),
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend confirmation error ${response.status}: ${await response.text()}`);
  }
}

const firstNameOf = (name: string) => name.trim().split(/\s+/)[0] || 'there';

function generateConfirmationText(formData: FormData): string {
  return [
    `Hi ${firstNameOf(formData.name)},`,
    '',
    'Thanks for getting in touch with SIX³. We’ve received your enquiry and a senior member of the team will read it personally and reply within one working day.',
    '',
    `You asked about: ${formData.services.join(', ')}`,
    '',
    'If there’s anything you’d like to add in the meantime, just reply to this email.',
    '',
    'The SIX³ team',
    'Growth, cubed.',
    SITE,
  ].join('\n');
}

function generateConfirmationHTML(raw: FormData): string {
  const firstName = escapeHtml(firstNameOf(raw.name));
  const services = raw.services.map((s) => `<li style="margin:0 0 4px;">${escapeHtml(String(s))}</li>`).join('');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Thanks for your enquiry</title>
</head>
<body style="margin:0;padding:0;background:#f4f2fa;font-family:'DM Sans',Arial,Helvetica,sans-serif;color:#1f1b2e;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f2fa;">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;">
        <tr><td style="background:#0b0a1f;padding:24px 32px 24px 4px;">
          <img src="${SITE}/brand/email/six3-logo-dark.png" alt="SIX³ Agency" width="150" style="display:block;border:0;height:auto;">
        </td></tr>
        <tr><td style="height:4px;line-height:4px;font-size:0;background:#7c3aed;background-image:linear-gradient(90deg,#7c3aed,#a855f7 40%,#f97316 78%,#fde7b0);">&nbsp;</td></tr>
        <tr><td style="padding:32px;">
          <h1 style="margin:0 0 16px;font-size:24px;line-height:1.3;color:#0b0a1f;">Thanks, ${firstName}. We’ve got it.</h1>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">We’ve received your enquiry. A senior member of the team will read it personally and reply within one working day.</p>
          <p style="margin:0 0 8px;font-size:14px;font-weight:bold;color:#7c3aed;text-transform:uppercase;letter-spacing:0.06em;">You asked about</p>
          <ul style="margin:0 0 20px;padding-left:20px;font-size:16px;line-height:1.5;">${services}</ul>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.6;">If there’s anything you’d like to add in the meantime, just reply to this email.</p>
          <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="border-radius:999px;background:#f97316;">
            <a href="${SITE}/blog" style="display:inline-block;padding:12px 24px;font-size:15px;font-weight:bold;color:#ffffff;text-decoration:none;">Read our latest insights</a>
          </td></tr></table>
        </td></tr>
        <tr><td style="padding:20px 32px;background:#faf8ff;border-top:1px solid #ece8f7;font-size:13px;line-height:1.6;color:#6b6585;">
          <strong style="color:#0b0a1f;">The SIX³ team</strong> · Growth, cubed.<br>
          Brighton-based AI marketing &amp; automation · <a href="${SITE}" style="color:#7c3aed;text-decoration:none;">six3.agency</a>
        </td></tr>
      </table>
      <p style="margin:16px 0 0;font-size:12px;color:#8a85a0;">You’re receiving this because you sent an enquiry through six3.agency.</p>
    </td></tr>
  </table>
</body>
</html>`;
}
