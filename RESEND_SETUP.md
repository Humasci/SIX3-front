# Contact form email (Resend)

The contact form sends each enquiry to **hello@six3.agency** through [Resend](https://resend.com). Hitting reply on the email goes straight to the person who filled in the form.

## 1. Create a Resend account

Sign up at https://resend.com **using hello@six3.agency**. Until the domain is verified (step 3), Resend's test sender can only deliver to the address the account was created with, so this lets the form work straight away.

## 2. Create an API key and add it to Vercel

1. In Resend, open **API Keys → Create API Key**, give it "Sending access", and copy the key (it starts with `re_`).
2. In Vercel, open the project → **Settings → Environment Variables** and add:

   | Name | Value |
   | --- | --- |
   | `RESEND_API_KEY` | the `re_…` key |

3. Redeploy (Deployments → latest → Redeploy). Variables only apply to new deployments.

Send a test enquiry from the Contact page. It should arrive at hello@six3.agency from `onboarding@resend.dev`.

## 3. Send from your own domain (recommended)

1. In Resend, open **Domains → Add Domain** and enter `six3.agency`.
2. Add the DNS records Resend shows (SPF, DKIM and optionally DMARC) wherever the domain's DNS is managed, then click **Verify**.
3. Once verified, add this variable in Vercel and redeploy:

   | Name | Value |
   | --- | --- |
   | `CONTACT_FROM_EMAIL` | `SIX³ Agency <website@six3.agency>` |

Emails now come from your own domain and are far less likely to land in spam.

## Optional variables

| Name | Purpose |
| --- | --- |
| `CONTACT_TO_EMAIL` | Send enquiries somewhere other than hello@six3.agency |
| `ATTIO_API_KEY` | Also save each enquiry as a contact in Attio |

## If emails don't arrive

- Vercel → project → **Logs**: look for `Email error:` lines from `/api/contact`.
- Resend → **Emails** shows every send attempt and why it failed.
- If the form shows an error, neither the email nor Attio accepted the enquiry, so nothing was lost silently.
