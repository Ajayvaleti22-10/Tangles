# Heavenly Cuts — Website

A clean, modern, single-page salon website built with **Next.js (App Router)** + **Tailwind CSS**.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Customize

All business info lives in:
- `data/site.js` (name, phone, address, hours, services, team, testimonials, FAQ, booking link)

### Replace booking link

In `data/site.js` update:
- `booking.url`

You can point this to booking platforms like **Fresha**, **Vagaro**, or **Square**.

### Add real photos

Replace the placeholder gallery tiles with real images:
- Put images in `public/gallery/`
- Update `components/sections/gallery.js`

## Contact form options

The included form uses `mailto:` (no backend required). If you want a real form:
- Formspree / Basin (hosted form endpoints)
- Netlify Forms (if hosted on Netlify)
- Custom API route with an email provider (SendGrid/Mailgun) or SMTP

## Deploy

- **Vercel**: import the repo and deploy (recommended)
- **Netlify**: build command `npm run build`, publish `.next`

---

Made for demo purposes. Replace placeholder content with your real brand assets.

## Performance, caching, and security (already included)

### Tech stack (solid default)
- **Next.js 15 (App Router)** + **React 19**
- **Tailwind CSS** for fast, consistent UI
- No heavy UI frameworks — keeps bundle small and fast

### Caching
This site is built to be **static by default**:
- `app/page.js` sets `dynamic = 'force-static'` and `revalidate = 3600` (ISR).
  - When deployed to Vercel or another platform with a CDN, pages can be served from cache and refreshed automatically.
- `next.config.js` adds long-term caching for `/_next/static/*` (hashed build assets).

### Security headers
`next.config.js` sets common production headers:
- `Content-Security-Policy` (CSP)
- `Strict-Transport-Security` (HSTS)
- `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and more

> Note: The CSP currently includes `unsafe-inline` (and `unsafe-eval`) to avoid breaking Next.js scripts in dev.
> If you want the strictest CSP in production, we can tighten it by using nonces/hashes and removing `unsafe-eval`.

### Deployment checklist
Before deploying, update:
- `app/layout.js` → `metadataBase` (set to your real domain)

Recommended hosting:
- **Vercel** (best defaults for Next.js caching/CDN)
- Cloudflare Pages (with Next.js support) or similar platforms also work.

