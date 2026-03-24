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
- `data/site.js` (name, phone, `phoneTel`, address, hours, services, team, testimonials, FAQ)

**Contact & booking (simple setup):**
- **Messages**: contact form → [Web3Forms](https://web3forms.com) (set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local`).
- **Book an appointment**: opens a dialog with **Call us** (`phoneTel` in `data/site.js`) or **Fill out the form** (goes to `/contact#callback-form` for a callback). The navbar still has a direct **Call** button.

Optional: set `NEXT_PUBLIC_SITE_URL` in `.env.local` to your live site URL (used for metadata / Open Graph).

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

