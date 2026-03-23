import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { site } from '@/data/site';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-white to-violet-50/40">
      <Container className="py-14 sm:py-20">
        <SectionHeader
          eyebrow="Reviews"
          title="Clients leave feeling like themselves again"
          description="Swap these with real Google reviews once you launch."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {site.testimonials.map((t) => (
            <figure key={t.name} className={`rounded-3xl border-2 p-6 shadow-soft ${[ 'bg-violet-50/80 border-violet-100', 'bg-teal-50/80 border-teal-100', 'bg-coral-50/80 border-coral-100' ][site.testimonials.indexOf(t) % 3]}`}>
              <Quote className="h-5 w-5 text-blush-600" />
              <blockquote className="mt-4 text-sm text-ink-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink-900">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
