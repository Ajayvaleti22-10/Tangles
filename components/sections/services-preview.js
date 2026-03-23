import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';
import { Scissors, Palette, Wind } from 'lucide-react';

const icons = [Scissors, Wind, Palette];
const preview = site.services.slice(0, 3);

const cardBg = ['bg-blush-50 border-blush-100', 'bg-teal-50 border-teal-100', 'bg-amber-50 border-amber-100'];
const iconBg = ['bg-blush-200/80 text-blush-800', 'bg-teal-200/80 text-teal-800', 'bg-amber-200/80 text-amber-800'];

export function ServicesPreview() {
  return (
    <section className="border-t border-ink-100 bg-gradient-to-br from-ink-50 via-white to-blush-50/40">
      <Container className="py-14 sm:py-18">
        <SectionHeader
          eyebrow="Services"
          title="Cuts, color & styling"
          description="Precision cuts, dimensional color, and finishes that last. See the full service menu."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {preview.map((s, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={s.title}
                className={`rounded-3xl border-2 p-6 shadow-soft ${cardBg[idx]}`}
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${iconBg[idx]}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-700 line-clamp-2">{s.description}</p>
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
