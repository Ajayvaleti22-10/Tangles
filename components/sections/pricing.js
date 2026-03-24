'use client';

import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';
import { useBookAppointment } from '@/components/book-appointment-provider';

export function Pricing() {
  const { openModal } = useBookAppointment();
  const rows = site.services.map((s) => ({
    name: s.title,
    duration: s.duration,
    price:
      s.priceFrom != null && s.priceFrom !== undefined
        ? `$${s.priceFrom}`
        : s.priceLabel || '—'
  }));

  return (
    <section id="pricing" className="bg-ink-50/60 border-y border-ink-100">
      <Container className="py-14 sm:py-20">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          description="Listed prices are starting rates. Extra length has no fixed price—it depends on length (quoted in salon). We’ll confirm everything before we start."
        />

        <div className="mt-10 overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft">
          <div className="grid grid-cols-3 gap-0 border-b border-ink-100 bg-ink-50/70 px-6 py-4 text-xs font-semibold uppercase tracking-widest text-ink-700">
            <span>Service</span>
            <span>Time</span>
            <span className="text-right">Price</span>
          </div>
          <ul>
            {rows.map((r) => (
              <li key={r.name} className="grid grid-cols-3 gap-0 px-6 py-4 text-sm text-ink-800 border-b border-ink-100 last:border-0">
                <span className="font-medium text-ink-900">{r.name}</span>
                <span className="text-ink-700">{r.duration}</span>
                <span className="text-right text-ink-700">{r.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-3xl border border-ink-100 bg-white p-6 shadow-soft">
          <div>
            <p className="font-semibold text-ink-900">Want a full transformation?</p>
            <p className="mt-1 text-sm text-ink-700">Book a consultation first—we’ll create a plan for your hair goals.</p>
          </div>
          <Button type="button" onClick={openModal}>
            Book an appointment
          </Button>
        </div>
      </Container>
    </section>
  );
}
