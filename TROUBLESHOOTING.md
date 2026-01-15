# Contact Form Troubleshooting Guide

## Issue: Not Receiving Emails

**This is expected!** The form submissions are working, but emails aren't being sent because Mailgun isn't configured yet.

### Why It Happens
The API has **failsafe handling** - it returns success even if email sending fails. This means:
- ✅ Form submissions are accepted
- ✅ Success screen displays
- ❌ Emails won't send until Mailgun is configured

### Solution: Configure Mailgun in Vercel

1. **Go to Vercel Dashboard**
   - Navigate to: https://vercel.com/dashboard
   - Select your project: SIX3-front

2. **Add Environment Variables**
   - Go to: Settings → Environment Variables
   - Add these three variables:

```bash
MAILGUN_API_KEY=your_actual_mailgun_api_key_here
MAILGUN_DOMAIN=your_mailgun_domain (e.g., mg.six3.agency)
ATTIO_API_KEY=your_attio_key (optional - for CRM integration)
```

3. **Redeploy**
   - Go to: Deployments
   - Click "..." on latest deployment
   - Click "Redeploy"

4. **Test Again**
   - Submit the contact form
   - Check hello@six3.agency inbox
   - Emails should now arrive!

---

## Issue: Form Still Shows After Submission

If the success screen doesn't appear after submitting:

### Possible Causes

**1. Testing in Development Mode**
- The `/api/contact` endpoint only works in production (Vercel)
- In local dev, you need Vercel CLI: `vercel dev`

**2. Browser Cache**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Try incognito/private window

**3. Form Validation Error**
- Check browser console (F12) for errors
- Ensure all required fields are filled:
  - Name
  - Email (must be valid format)
  - At least one service selected
  - Pain points text
  - Goals text

**4. Rate Limit Hit**
- If you submitted 3+ times in an hour, you're rate limited
- Wait 1 hour or test from different IP/device

### How to Test Properly

**Option A: Test in Production**
```bash
# The site is already deployed to Vercel
# Visit your production URL and test there
```

**Option B: Test Locally with Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Run in development mode (this makes /api routes work)
vercel dev

# Open http://localhost:3000
# Test the form
```

---

## Checking If It's Working

### Check Browser Console
1. Open Developer Tools (F12)
2. Go to "Network" tab
3. Submit the form
4. Look for POST request to `/api/contact`
5. Check response:
   - ✅ Status 200 = Success
   - ❌ Status 400 = Validation error
   - ❌ Status 429 = Rate limited
   - ❌ Status 500 = Server error

### Expected Flow

1. **User fills form** → All 4 steps
2. **Clicks "Send Message"** → POST to /api/contact
3. **API receives data** → Validates fields
4. **API tries Mailgun** → Fails silently (no env vars)
5. **API returns success** → Status 200
6. **Frontend gets response** → Shows success screen
7. **User sees** → "Thank You!" message with checkmark

---

## Quick Test Checklist

- [ ] Testing on production URL (not localhost)
- [ ] All form fields filled correctly
- [ ] Email address is valid format
- [ ] At least one service selected
- [ ] Browser console shows no errors
- [ ] Network tab shows 200 response
- [ ] Not rate limited (less than 3 submissions/hour)

---

## Current Configuration

**Email Destination:** hello@six3.agency

**Rate Limits:**
- Server-side: 3 submissions per hour per IP
- Client-side: 2 submissions per session with cooldowns

**Cooldown Timers:**
- After 1st submission: 5 minutes
- After 2nd submission: 15 minutes
- After 3rd+ submission: Contact via email

---

## Testing Emails (Once Mailgun is Configured)

After setting up Mailgun environment variables:

1. Submit a test form
2. Check **hello@six3.agency** inbox
3. Look for email from: `Contact Form <noreply@your-domain>`
4. Subject: "New Contact Form Submission from [Name]"
5. Email includes all form data:
   - Name, Email, Company, Phone, Website
   - Services interested in
   - Pain points
   - Goals

---

## Need Help?

**If emails still don't work after Mailgun setup:**
1. Check Mailgun dashboard logs
2. Verify domain DNS settings (SPF, DKIM)
3. Check spam folder
4. Verify sender domain is authorized

**If form won't submit:**
1. Check browser console for JavaScript errors
2. Verify API endpoint is accessible
3. Test with different browser
4. Check rate limiting status

**For production issues:**
1. Check Vercel deployment logs
2. Verify environment variables are set
3. Ensure domain is properly configured
4. Test API endpoint directly

---

## Success Criteria

✅ **Working Correctly When:**
- Form submits without errors
- Success screen appears with green checkmark
- "Thank You!" message displays
- Cooldown timer shows (after first submission)
- Email arrives at hello@six3.agency (after Mailgun setup)

❌ **Not Working If:**
- Form stays on same screen after submit
- Error message appears
- Browser console shows errors
- Network request fails
- Rate limit message shows unexpectedly

---

## Production Deployment

Your code is already on main branch and should auto-deploy to Vercel.

**To verify deployment:**
```bash
# Check if latest commit is deployed
# Visit your Vercel dashboard
# Latest commit should be: 9224a9f (spam protection)
```

**To manually trigger deployment:**
1. Go to Vercel Dashboard
2. Click "Deployments"
3. Click "..." on any deployment
4. Click "Redeploy"

---

## Environment Variables Reference

```bash
# Required for email sending
MAILGUN_API_KEY=key-xxxxxxxxxxxxxxxxxxxx
MAILGUN_DOMAIN=mg.six3.agency

# Optional - for CRM integration
ATTIO_API_KEY=your_attio_key

# Not needed - auto-detected
NODE_ENV=production
```

Get Mailgun credentials from: https://app.mailgun.com/
Get Attio credentials from: https://app.attio.com/

---

## Support

For additional help:
- Check CLIENT_LAUNCH_CHECKLIST.md
- Review Vercel documentation: https://vercel.com/docs
- Check Mailgun docs: https://documentation.mailgun.com/
