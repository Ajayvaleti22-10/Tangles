import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';

export function CTA() {
  return (
    <section className="border-t border-ink-100 bg-ink-900 text-white">
      <Container className="py-14 sm:py-18">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Ready for a great hair day?
          </h2>
          <p className="mt-3 text-ink-300">
            Book online in minutes or get in touch with any questions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={site.booking.url}
              className="bg-white text-ink-900 hover:bg-ink-100 border-0"
            >
              Book now
            </Button>
            <Button href="/contact" variant="secondary" className="border-ink-600 text-white hover:bg-ink-800">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
