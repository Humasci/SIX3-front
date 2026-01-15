# SIX3 Agency - Client Launch Checklist

## ✅ COMPLETED IMPROVEMENTS

### Critical Fixes Applied
- [x] **Meta Tags Updated** - Removed "Nava Studio" and "Lovable" branding from all meta tags
  - Updated author to "SIX3 Agency"
  - Updated Open Graph title to "SIX3 Agency"
  - Added og:url meta tag
  - Updated Twitter card metadata
  - Location: `index.html:9-21`

- [x] **Google Analytics 4 Added** - Analytics tracking code integrated
  - Placeholder tracking ID: `G-XXXXXXXXXX` (needs to be replaced with your actual GA4 ID)
  - Location: `index.html:23-30`

- [x] **Console Statements Removed** - All development console logs removed or made conditional
  - Removed from: `NotFound.tsx`, `Contact.tsx`
  - Made conditional in: `api/contact.ts`

- [x] **Sitemap.xml Created** - Complete sitemap with all pages
  - 22 URLs included with proper priorities and change frequencies
  - Added reference in `robots.txt`
  - Location: `public/sitemap.xml`

- [x] **Newsletter Section Removed** - Non-functional newsletter form removed from Blog page
  - Better UX than having a broken feature

- [x] **Rate Limiting Added** - Contact form now has basic spam protection
  - Limit: 3 submissions per hour per IP address
  - Returns 429 status code when limit exceeded
  - Location: `api/contact.ts:19-39`

---

## ⚠️ REQUIRED BEFORE LAUNCH

### 1. Google Analytics Configuration
**Priority: HIGH**
**Action Required:** Replace placeholder GA4 tracking ID

```html
<!-- In index.html, update line 24 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

Replace `G-XXXXXXXXXX` with your actual Google Analytics 4 Measurement ID.

**Steps:**
1. Create GA4 property at https://analytics.google.com
2. Get your Measurement ID (starts with G-)
3. Replace both instances in `index.html` (lines 24 and 29)

---

### 2. Environment Variables Setup (Vercel Dashboard)
**Priority: HIGH**
**Action Required:** Configure environment variables in Vercel

The contact form requires these environment variables to be set in your Vercel project:

```bash
MAILGUN_API_KEY=your_mailgun_api_key_here
MAILGUN_DOMAIN=your_mailgun_domain_here
ATTIO_API_KEY=your_attio_api_key_here
```

**Notes:**
- The API has failsafe error handling - form will work even without these keys
- Without Mailgun: Emails won't be sent (but form will still accept submissions)
- Without Attio: Contacts won't be added to CRM
- Form submissions to: `hello@six3.agency`

**Steps:**
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add each variable with its value
3. Redeploy the application for changes to take effect

---

### 3. Replace Placeholder Images
**Priority: HIGH**
**Action Required:** Replace all Unsplash placeholder images with real content

**Files containing placeholder images (12 total):**
- `src/components/Portfolio.tsx` - 6 portfolio project images
- `src/pages/Blog.tsx` - 5 blog post thumbnail images
- `src/pages/portfolio/PortfolioDetail.tsx` - 18+ portfolio detail images
- `src/pages/services/SearchMarketingPPC.tsx` - Service page images
- `src/pages/services/ContentCreation.tsx` - Service page images
- `src/pages/services/AIDevAutomation.tsx` - Service page images
- `src/pages/industries/Legal.tsx` - Industry page images
- `src/pages/industries/RealEstate.tsx` - Industry page images
- `src/pages/industries/Healthcare.tsx` - Industry page images
- `src/pages/industries/ProfessionalServices.tsx` - Industry page images
- `src/pages/industries/LocalBusiness.tsx` - Industry page images
- `src/pages/use-cases/LawFirmAutomation.tsx` - Case study images
- `src/pages/use-cases/RealEstateLeadSystem.tsx` - Case study images

**Search for:** `images.unsplash.com` across the codebase

**Recommended approach:**
1. Collect real client project images or stock photos with proper licensing
2. Optimize images (use WebP format, compress to <100KB each)
3. Upload to `/public/images/` folder or use a CDN
4. Replace all Unsplash URLs with your image paths
5. Ensure all images have descriptive alt text for accessibility

---

### 4. Create Open Graph Image
**Priority: HIGH**
**Action Required:** Design and upload social sharing image

The meta tags reference: `https://six3.agency/og-image.png`

**Specifications:**
- Dimensions: 1200px × 630px
- Format: PNG or JPG
- File size: <300KB recommended
- Include: SIX3 Agency branding, tagline, visuals

**Steps:**
1. Design image using Figma, Canva, or Photoshop
2. Export as `og-image.png`
3. Upload to `/public/` folder
4. Test with https://www.opengraph.xyz/

---

### 5. Verify Social Media Links
**Priority: MEDIUM**
**Action Required:** Confirm all social media accounts exist

**Current links in Footer (`src/components/Footer.tsx:68-76`):**
- LinkedIn: https://linkedin.com/company/six3-agency
- Instagram: https://instagram.com/six3agency
- Dribbble: https://dribbble.com/six3agency

**Verify:**
- [ ] LinkedIn company page exists and is active
- [ ] Instagram account exists and is active
- [ ] Dribbble account exists (or remove if not used)
- [ ] Twitter handle `@six3agency` is correct (used in meta tags)

---

### 6. Test Contact Form End-to-End
**Priority: HIGH**
**Action Required:** Submit test form after deployment

**Test checklist:**
- [ ] Form validation works for all required fields
- [ ] Email validation rejects invalid formats
- [ ] Form submits successfully
- [ ] Success message displays after submission
- [ ] Email received at `hello@six3.agency` (if Mailgun configured)
- [ ] Contact appears in Attio CRM (if Attio configured)
- [ ] Rate limiting triggers after 3 submissions
- [ ] Mobile responsiveness works correctly

---

## 🎯 OPTIONAL ENHANCEMENTS

### 7. Add CAPTCHA Protection
**Priority: MEDIUM**
**Recommended:** Add Google reCAPTCHA or hCaptcha

Currently using basic rate limiting. For additional spam protection:

**Options:**
1. Google reCAPTCHA v3 (invisible): https://www.google.com/recaptcha
2. hCaptcha: https://www.hcaptcha.com/
3. Cloudflare Turnstile: https://www.cloudflare.com/products/turnstile/

**Implementation:**
- Add script to `index.html`
- Update contact form to include captcha token
- Verify token in `api/contact.ts`

---

### 8. Blog Content Strategy
**Priority: MEDIUM**
**Current state:** Blog page exists but posts are placeholder content

**Options:**
1. **Keep with real content**: Write and add actual blog posts
2. **Remove entirely**: Delete blog page and update navigation
3. **Coming soon**: Add "Coming Soon" message

**If keeping blog:**
- Replace placeholder posts in `src/pages/Blog.tsx:12-64`
- Update dates to actual publication dates
- Add real article content or link to external blog platform
- Consider CMS integration (Contentful, Strapi, WordPress)

---

### 9. Portfolio Projects Verification
**Priority: MEDIUM**
**Current state:** Portfolio contains sample projects

**Review:**
- Verify all portfolio projects are real client work
- Ensure you have client permission to showcase work
- Add real testimonials if available
- Replace with case studies if available

**Files to check:**
- `src/components/Portfolio.tsx` - Main portfolio grid
- `src/pages/portfolio/PortfolioDetail.tsx` - Detailed project pages

---

### 10. Performance Optimization
**Priority: LOW**
**Recommended actions:**

- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Enable lazy loading for images
- [ ] Add loading skeletons for better perceived performance
- [ ] Consider implementing service worker for offline support
- [ ] Add web manifest for PWA capabilities

**Run Lighthouse:**
```bash
npm run build
npm run preview
# Then use Chrome DevTools → Lighthouse
```

---

### 11. Security Headers
**Priority: LOW**
**Recommended:** Add security headers in `vercel.json`

Create or update `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

---

### 12. Error Monitoring
**Priority: LOW**
**Recommended:** Set up error tracking

**Options:**
1. **Sentry** - https://sentry.io (free tier available)
2. **LogRocket** - https://logrocket.com
3. **Rollbar** - https://rollbar.com

**Benefits:**
- Track JavaScript errors in production
- Monitor API failures
- Get notified of issues before users report them

---

## 📋 DEPLOYMENT CHECKLIST

### Pre-Deployment
- [ ] Update Google Analytics ID
- [ ] Set environment variables in Vercel
- [ ] Replace placeholder images
- [ ] Upload Open Graph image
- [ ] Verify social media links
- [ ] Test contact form locally
- [ ] Run `npm run build` successfully
- [ ] Check for TypeScript errors: `npm run type-check` (if available)

### Post-Deployment
- [ ] Test website on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS and Android)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Search Console property
- [ ] Test contact form in production
- [ ] Verify SSL certificate is active
- [ ] Check all links work correctly
- [ ] Verify analytics tracking is working
- [ ] Test social media sharing (Facebook, LinkedIn, Twitter)
- [ ] Run Lighthouse audit
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom, or Better Uptime)

### Post-Launch Monitoring (First Week)
- [ ] Monitor Google Analytics for traffic
- [ ] Check contact form submissions
- [ ] Monitor for any error reports
- [ ] Verify email notifications are working
- [ ] Check page load speeds in real-world conditions

---

## 🚀 DEPLOYMENT COMMANDS

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel
vercel --prod
```

---

## 📞 SUPPORT CONTACTS

**Hosting:** Vercel
- Dashboard: https://vercel.com/dashboard
- Docs: https://vercel.com/docs

**Email Service:** Mailgun
- Dashboard: https://app.mailgun.com/
- Docs: https://documentation.mailgun.com/

**CRM:** Attio
- Dashboard: https://app.attio.com/
- Docs: https://developers.attio.com/

**Analytics:** Google Analytics 4
- Dashboard: https://analytics.google.com/
- Docs: https://support.google.com/analytics

---

## ✨ WHAT'S ALREADY GREAT

This website has excellent foundations:
- ✅ Modern React 18 + TypeScript + Vite stack
- ✅ Responsive design with Tailwind CSS
- ✅ Professional GSAP animations
- ✅ Clean component architecture
- ✅ Multi-language support ready (i18next)
- ✅ Complete legal pages (Privacy, Terms, Cookie Policy)
- ✅ SEO-friendly structure
- ✅ Robust form validation
- ✅ Secure API with failsafe error handling

---

## 📊 ESTIMATED TIME TO COMPLETE REMAINING TASKS

| Task | Time Estimate |
|------|---------------|
| Configure Google Analytics | 15 minutes |
| Set Vercel environment variables | 10 minutes |
| Replace placeholder images | 4-6 hours |
| Create Open Graph image | 1 hour |
| Verify social media links | 15 minutes |
| End-to-end testing | 2 hours |
| **Total** | **8-10 hours** |

---

## 📝 NOTES

- **Current Branch:** `claude/prepare-client-launch-zMZhE`
- **Last Updated:** 2026-01-11
- **Framework:** React 18 + Vite
- **Deployment:** Vercel
- **Primary Contact Email:** hello@six3.agency

---

Good luck with your launch! 🎉
