import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-ink-100 bg-gradient-to-br from-blush-600 via-blush-700 to-violet-800 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" />
      <Container className="relative py-14 sm:py-18">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Ready for a great hair day?
          </h2>
          <p className="mt-3 text-white/90">
            Book online in minutes or get in touch with any questions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={site.booking.url}
              className="bg-white text-blush-700 hover:bg-amber-50 border-0"
            >
              Book now
            </Button>
            <Button
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blush-700 shadow-none"
            >
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
