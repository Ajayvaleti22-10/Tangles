import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { site } from '@/data/site';
import { Scissors, Sparkles, Droplets, Palette, Wind, Leaf } from 'lucide-react';

const icons = [Scissors, Wind, Palette, Sparkles, Droplets, Leaf];

const cardShell = [
  'border-blush-200 bg-gradient-to-br from-blush-50/90 to-white shadow-soft',
  'border-teal-200 bg-gradient-to-br from-teal-50/70 to-white shadow-soft',
  'border-violet-200 bg-gradient-to-br from-violet-50/70 to-white shadow-soft',
  'border-amber-200 bg-gradient-to-br from-amber-50/60 to-white shadow-soft',
  'border-coral-200 bg-gradient-to-br from-coral-50/50 to-white shadow-soft',
  'border-blush-200 bg-gradient-to-br from-blush-50/80 to-teal-50/30 shadow-soft'
];
const iconShell = [
  'bg-blush-100 border-blush-200 text-blush-800',
  'bg-teal-100 border-teal-200 text-teal-800',
  'bg-violet-100 border-violet-200 text-violet-800',
  'bg-amber-100 border-amber-200 text-amber-800',
  'bg-coral-100 border-coral-200 text-coral-800',
  'bg-blush-100 border-blush-200 text-blush-800'
];

export function Services() {
  return (
    <section
      id="services"
      className="border-y border-blush-100/80 bg-gradient-to-br from-blush-50/90 via-white to-teal-50/45"
    >
      <Container className="py-14 sm:py-20">
        <SectionHeader
          eyebrow="Services"
          title="Everything you need for great hair days"
          description="Expert technique and a finish that lasts—choose your service and book instantly."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={s.title}
                className={`rounded-3xl border-2 p-6 ${cardShell[idx % cardShell.length]}`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${iconShell[idx % iconShell.length]}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{s.description}</p>
                <p className="mt-4 text-xs text-ink-600">{s.duration}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border-2 border-violet-200 bg-gradient-to-r from-violet-50/80 to-blush-50/50 p-6 shadow-soft">
          <p className="text-sm text-ink-700">
            Not sure what to book? Choose <span className="font-medium text-ink-900">Haircut</span> and leave a note—we’ll confirm the best fit during your consultation.
          </p>
        </div>
      </Container>
    </section>
  );
}
