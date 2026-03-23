import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { Accordion } from '@/components/ui/accordion';
import { site } from '@/data/site';

export function FAQ() {
  return (
    <section className="bg-ink-50/60 border-y border-ink-100">
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
