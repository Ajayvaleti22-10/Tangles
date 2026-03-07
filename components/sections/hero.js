import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';
import { CheckCircle2, Star } from 'lucide-react';

function PlaceholderArt() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-br from-ink-50 to-white shadow-soft">
      <svg viewBox="0 0 800 600" className="h-full w-full">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff9db3" stopOpacity="0.35" />
            <stop offset="1" stopColor="#2c2c39" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#g)" />
        <g opacity="0.85">
          <circle cx="610" cy="170" r="140" fill="#ffffff" />
          <circle cx="250" cy="420" r="190" fill="#ffffff" />
        </g>
        <g opacity="0.22">
          <path d="M90 140 C200 60, 320 60, 430 140 S660 220, 760 140" fill="none" stroke="#1b1b24" strokeWidth="8" />
          <path d="M70 230 C210 120, 340 120, 470 230 S650 320, 780 230" fill="none" stroke="#1b1b24" strokeWidth="8" />
          <path d="M80 330 C220 230, 360 230, 490 330 S670 420, 770 330" fill="none" stroke="#1b1b24" strokeWidth="8" />
        </g>
      </svg>
      <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 backdrop-blur border border-ink-100 p-4">
        <p className="text-sm font-medium text-ink-900">Color that grows out beautifully</p>
        <p className="mt-1 text-xs text-ink-600">Ask for a lived-in balayage + gloss finish.</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-white">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-4 py-2">
              <Star className="h-4 w-4 text-blush-700" />
              <p className="text-xs font-medium text-ink-800">Top-rated local studio • Easy online booking</p>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-ink-900">
              {site.tagline}
            </h1>
            <p className="mt-4 text-base text-ink-700 max-w-xl">
              {site.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href={site.booking.url} size="lg">Book an appointment</Button>
              <Button variant="secondary" href="/services" size="lg">Explore services</Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 max-w-xl">
              {[
                'Consultation-first approach',
                'All textures welcome',
                'Clean, calming space',
                'Styling tips included'
              ].map((t) => (
                <div key={t} className="flex items-start gap-2 text-sm text-ink-700">
                  <CheckCircle2 className="h-5 w-5 text-blush-600" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <PlaceholderArt />
          </div>
        </div>
      </Container>
    </section>
  );
}
