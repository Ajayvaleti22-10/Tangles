import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';
import { Scissors, Palette, Wind } from 'lucide-react';

const icons = [Scissors, Wind, Palette];
const preview = site.services.slice(0, 3);

export function ServicesPreview() {
  return (
    <section className="border-t border-ink-100 bg-ink-50/50">
      <Container className="py-14 sm:py-18">
        <SectionHeader
          eyebrow="Services"
          title="Cuts, color & styling"
          description="Precision cuts, dimensional color, and finishes that last. See full menu and pricing."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {preview.map((s, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={s.title}
                className="rounded-3xl border border-ink-100 bg-white p-6 shadow-soft"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-50 border border-ink-100">
                  <Icon className="h-5 w-5 text-ink-900" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-700 line-clamp-2">{s.description}</p>
                <p className="mt-3 text-xs text-ink-600">from ${s.priceFrom}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/services" variant="secondary">
            View all services
          </Button>
        </div>
      </Container>
    </section>
  );
}
