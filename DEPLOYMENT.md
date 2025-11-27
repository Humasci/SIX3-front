# Contact Form Backend Integration

## Overview

The contact form is now integrated with Mailgun (email delivery) and Attio CRM (contact management). When users submit the form, it will:

1. Send an email to `form@six3.agency` via Mailgun
2. Create a contact record in Attio CRM
3. Add a note to the contact with form details

## Required Environment Variables

Set these in your Vercel dashboard or hosting platform:

### Mailgun Configuration
```
MAILGUN_API_KEY=your_mailgun_api_key_here
MAILGUN_DOMAIN=your_mailgun_domain_here
```

### Attio CRM Configuration  
```
ATTIO_API_KEY=your_attio_api_key_here
```

## How to Get API Keys

### Mailgun Setup
1. Sign up at [mailgun.com](https://mailgun.com)
2. Verify your domain or use Mailgun's sandbox domain for testing
3. Go to Settings > API Keys
4. Copy your Private API key
5. Note your domain (e.g., `mg.yourdomain.com` or `sandbox123.mailgun.org`)

### Attio CRM Setup
1. Sign up at [attio.com](https://attio.com)
2. Go to Settings > Integrations > API
3. Create a new API key with permissions for:
   - Create People records
   - Create Notes records
4. Copy the API key

## Deployment Steps

### Option 1: Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Option 2: Other Hosting Platforms
- **Netlify**: Use Netlify Functions instead of Vercel API routes
- **Railway/Render**: Deploy as a Node.js application
- **AWS Lambda**: Convert to Lambda function format

## Local Development

1. Copy `.env.example` to `.env.local`
2. Fill in your API keys
3. Run `npm run dev`
4. Test the form at `http://localhost:8080/contact`

## API Endpoint

The contact form submission endpoint is at:
```
POST /api/contact
```

### Request Body
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "company": "Acme Corp",
  "phone": "+1234567890",
  "website": "https://example.com",
  "services": ["Search Marketing & PPC", "AI Development"],
  "painPoints": "Need help with lead generation",
  "goals": "Increase conversions by 50%"
}
```

### Response
```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```

## Email Template

The email sent to `form@six3.agency` includes:
- Contact information
- Selected services
- Pain points and goals  
- Professional HTML formatting
- Direct reply-to functionality

## Attio CRM Integration

Creates contact record with:
- Name (split into first/last)
- Email address  
- Company information
- Phone and website (if provided)
- Note with form submission details

## Error Handling

The form includes:
- Loading states during submission
- Success confirmation messages
- Error handling with fallback email contact
- Form validation before submission

## Testing

To test the integration:
1. Fill out the contact form completely
2. Submit the form
3. Check your email at `form@six3.agency`
4. Verify contact creation in Attio CRM

## Troubleshooting

Common issues:
- **500 Error**: Check API keys are correctly set
- **CORS Issues**: Ensure your domain is properly configured  
- **Email not received**: Verify Mailgun domain and DNS settings
- **CRM not updating**: Check Attio API permissions and field mappings