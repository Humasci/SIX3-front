# Gmail Setup Guide for Contact Form

This guide will help you connect your hello@six3.agency Gmail account to the website's contact form.

## Overview

The contact form uses **Gmail SMTP** to send emails directly from your hello@six3.agency account. This is:
- ✅ Free (no third-party email service needed)
- ✅ Reliable (Gmail's infrastructure)
- ✅ Simple (uses your existing Gmail)
- ✅ Secure (App Password authentication)

When someone fills out the contact form, you'll receive the message in your Gmail inbox.

---

## Step 1: Enable 2-Factor Authentication

Gmail App Passwords require 2-Factor Authentication (2FA) to be enabled.

1. Go to your Google Account: **https://myaccount.google.com/**
2. Click **"Security"** in the left sidebar
3. Under **"Signing in to Google"**, find **"2-Step Verification"**
4. Click **"2-Step Verification"** and follow the setup process
5. Choose your preferred 2FA method (phone, authenticator app, etc.)
6. Complete the 2FA setup

**Note:** If 2FA is already enabled, skip to Step 2.

---

## Step 2: Generate Gmail App Password

1. Go back to: **https://myaccount.google.com/security**
2. Under **"Signing in to Google"**, look for **"App passwords"**
   - **Can't find it?** Search "App passwords" in the search bar at the top
3. Click **"App passwords"**
4. You may be asked to sign in again for security
5. On the App Passwords page:
   - Select app: **Mail**
   - Select device: **Other (Custom name)**
   - Enter name: **SIX3 Website Contact Form**
   - Click **"Generate"**
6. Google will show you a 16-character password like: `abcd efgh ijkl mnop`
7. **IMPORTANT:** Copy this password immediately - you won't be able to see it again!

---

## Step 3: Add to Vercel Environment Variables

1. Go to your Vercel dashboard: **https://vercel.com/dashboard**
2. Select your **SIX3-front** project
3. Go to **Settings** → **Environment Variables**
4. Add the following two variables:

### Variable 1:
- **Key:** `GMAIL_USER`
- **Value:** `hello@six3.agency`
- **Apply to:** All environments (Production, Preview, Development)

### Variable 2:
- **Key:** `GMAIL_APP_PASSWORD`
- **Value:** The 16-character password from Step 2 (remove spaces, so: `abcdefghijklmnop`)
- **Apply to:** All environments (Production, Preview, Development)

5. Click **"Save"** for each variable

---

## Step 4: Redeploy Your Site

After adding the environment variables, you need to redeploy:

1. In Vercel dashboard, go to **Deployments** tab
2. Find the latest deployment
3. Click the **"..."** menu button
4. Click **"Redeploy"**
5. Wait for deployment to complete (~1-2 minutes)

---

## Step 5: Test the Contact Form

1. Go to your live website: **https://six3.agency/contact**
2. Fill out the contact form with test information
3. Click **"Send Message"** on the last step
4. You should see a **success screen with a green checkmark** (not the form again!)
5. Check your **hello@six3.agency Gmail inbox** for the test email

**What you'll receive:**
- **Subject:** "New Contact Form Submission from [Name]"
- **From:** SIX3 Agency Contact Form (hello@six3.agency)
- **Reply-To:** The email address the person entered in the form
- **Body:** Formatted HTML email with all form details

---

## Troubleshooting

### "Invalid login credentials" error
- **Cause:** Wrong Gmail App Password or username
- **Fix:** Double-check that:
  - `GMAIL_USER` is exactly: `hello@six3.agency`
  - `GMAIL_APP_PASSWORD` has no spaces
  - You copied the full 16-character password
  - You redeployed after adding variables

### "App passwords not available"
- **Cause:** 2FA is not enabled
- **Fix:** Complete Step 1 to enable 2-Factor Authentication

### Form shows success but no email received
- **Possible causes:**
  1. Email might be in Spam folder - check there first
  2. Environment variables not set in Vercel
  3. Site not redeployed after adding variables
  4. Gmail App Password expired or revoked
- **Fix:**
  1. Check Spam folder
  2. Verify environment variables are set in Vercel
  3. Redeploy the site
  4. Generate a new App Password if needed

### Success screen doesn't show
- **Cause:** Likely testing locally instead of on production
- **Fix:** The API endpoint only works on Vercel (production). Test on your live site: https://six3.agency/contact

### "Too many requests" error
- **Cause:** Rate limiting triggered (3 submissions per hour per IP)
- **Fix:** Wait 1 hour or test from a different network/device

---

## Security Notes

✅ **Safe to use:**
- Gmail App Passwords are designed specifically for this use case
- They only work with your account, not your main Google password
- You can revoke App Passwords anytime without affecting your main account

✅ **Never share:**
- Don't share your App Password with anyone
- Don't commit it to Git (it's in Vercel environment variables only)
- Don't expose it in client-side code (it's server-side only in `/api/contact.ts`)

✅ **Revoke if needed:**
- Go to: https://myaccount.google.com/apppasswords
- Click the App Password you created
- Click "Remove" to revoke access
- Generate a new one and update Vercel if needed

---

## Email Details

**Email Flow:**
1. User fills out contact form on website
2. Form data is sent to `/api/contact` API endpoint (server-side)
3. Server uses Nodemailer to connect to Gmail SMTP
4. Email is sent from `hello@six3.agency` to `hello@six3.agency`
5. You receive the email in your Gmail inbox
6. User sees success screen on website

**Email Features:**
- Professional HTML formatting
- Includes all form fields: name, email, company, phone, website, services, pain points, goals
- Reply-To header set to customer's email (easy one-click reply)
- Spam protection: Rate limiting (3 per hour per IP)
- Session limiting: Max 2 submissions per browser session with cooldown timers

---

## Need Help?

If you're still having issues:

1. Check Vercel deployment logs for errors
2. Verify environment variables are set correctly
3. Make sure 2FA is enabled on your Google account
4. Try generating a new Gmail App Password
5. Test on the live production site (not localhost)

---

## Summary Checklist

- [ ] 2-Factor Authentication enabled on Google account
- [ ] Gmail App Password generated
- [ ] `GMAIL_USER` added to Vercel
- [ ] `GMAIL_APP_PASSWORD` added to Vercel
- [ ] Site redeployed
- [ ] Contact form tested on live site
- [ ] Success screen shows after submission
- [ ] Email received in hello@six3.agency Gmail inbox

---

Once all steps are complete, your contact form is fully functional! 🎉
