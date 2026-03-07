# Tangles — Website

A clean, multi-page salon website built with **Next.js (App Router)** + **Tailwind CSS**. Contact form powered by **Web3Forms**.

## Quick start

```bash
npm install
cp .env.example .env.local
# Edit .env.local: set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (get one at https://web3forms.com)
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

## Contact form (Web3Forms)

The contact form submits to [Web3Forms](https://web3forms.com). Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` (get a key at web3forms.com). Never commit `.env.local`.

## Deploy

- **Vercel**: import the repo and deploy (recommended)
- **Netlify**: build command `npm run build`, publish `.next`

---

## Wiring, security, and caching

### Tech stack
- **Next.js 15 (App Router)** + **React 19**, **Tailwind CSS**, **Web3Forms** for contact.

### Security
- **CSP**: connect-src allows only 'self' and https://api.web3forms.com
- **HSTS**: only in production (NODE_ENV === 'production')
- **Headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CORP, COOP
- **Contact form**: input trimmed and length-limited, email format check, honeypot, generic error messages


### Caching
- **Pages**: `force-static` + `revalidate = 3600` (ISR).
- **Build assets** (`/_next/static/*`): `max-age=31536000, immutable`.
- **Public static** (e.g. `/icon.svg`, `/gallery/*`): `max-age=86400, stale-while-revalidate=604800`.

