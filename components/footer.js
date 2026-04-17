import { Container } from '@/components/container';
import { site } from '@/data/site';
import Image from 'next/image';
import { Instagram, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-blush-100 bg-gradient-to-b from-teal-50/20 via-white to-violet-50/35">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image src="/logo.svg" alt={`${site.name} logo`} width={180} height={48} className="h-14 sm:h-16 w-auto object-contain" />
            <p className="mt-3 text-sm text-ink-700 max-w-sm">{site.description}</p>
          </div>

          <div className="grid gap-3">
            <p className="text-xs font-semibold tracking-widest text-blush-700 uppercase">Visit</p>
            <div className="flex items-start gap-3 text-sm text-ink-700">
              <MapPin className="h-4 w-4 mt-0.5" />
              <a className="hover:text-ink-900" href={site.socials.googleMaps} target="_blank" rel="noreferrer">{site.address}</a>
            </div>
            <div className="flex items-center gap-3 text-sm text-ink-700">
              <Phone className="h-4 w-4" />
              <a className="hover:text-ink-900" href={site.phoneTel}>{site.phone}</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-blush-700 uppercase">Hours</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-700">
              {site.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-ink-600">{h.hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 hover:bg-ink-50"
                href={site.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-t border-ink-100 pt-8">
          <p className="text-xs text-ink-600">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-600">
            <a href="/terms" className="hover:text-blush-600 underline">Terms &amp; Conditions</a>
            <span>Built with Next.js + Tailwind.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
