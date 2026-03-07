import Image from 'next/image';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';
import { CheckCircle2, Star } from 'lucide-react';

// Unsplash (free to use, no attribution required per Unsplash License)
const HERO_IMAGE = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blush-50 via-white to-teal-50/60">
      <Container className="relative py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blush-200 bg-blush-100/80 px-4 py-2">
              <Star className="h-4 w-4 text-blush-600" />
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
                  <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border-2 border-white/80 shadow-soft shadow-blush-200/30 ring-2 ring-blush-100">
              <Image
                src={HERO_IMAGE}
                alt="Hair salon – professional styling in a welcoming space"
                width={900}
                height={600}
                priority
                className="h-full w-full object-cover aspect-[3/2]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 to-transparent pointer-events-none rounded-3xl" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
