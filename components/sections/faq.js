import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { Accordion } from '@/components/ui/accordion';
import { site } from '@/data/site';

export function FAQ() {
  return (
    <section className="border-y border-teal-100/80 bg-gradient-to-b from-teal-50/50 via-white to-amber-50/40">
      <Container className="py-14 sm:py-20">
        <SectionHeader
          eyebrow="FAQ"
          title="Quick answers"
          description="If you still have questions, send a message and we’ll get back within 1 business day."
        />

        <div className="mt-10 max-w-3xl">
          <Accordion items={site.faqs} />
        </div>
      </Container>
    </section>
  );
}
