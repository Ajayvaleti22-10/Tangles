import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { site } from '@/data/site';
import { Scissors, Sparkles, Droplets, Palette, Wind, Leaf } from 'lucide-react';

const icons = [Scissors, Wind, Palette, Sparkles, Droplets, Leaf];

export function Services() {
  return (
    <section id="services" className="bg-ink-50/60 border-y border-ink-100">
      <Container className="py-14 sm:py-20">
        <SectionHeader
          eyebrow="Services"
          title="Everything you need for great hair days"
          description="Transparent pricing, expert technique, and a finish that lasts—choose your service and book instantly."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={s.title}
                className="rounded-3xl border border-ink-100 bg-white p-6 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-50 border border-ink-100">
                    <Icon className="h-5 w-5 text-ink-900" />
                  </div>
                  <p className="text-xs font-semibold text-blush-700">from ${s.priceFrom}</p>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{s.description}</p>
                <p className="mt-4 text-xs text-ink-600">{s.duration}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-ink-100 bg-white p-6 shadow-soft">
          <p className="text-sm text-ink-700">
            Not sure what to book? Choose <span className="font-medium text-ink-900">Signature Haircut</span> and leave a note—we’ll confirm the best fit during your consultation.
          </p>
        </div>
      </Container>
    </section>
  );
}
