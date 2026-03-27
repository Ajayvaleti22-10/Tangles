import Image from 'next/image';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';
import { chairRentSalonImage } from '@/data/salon-photos';
import { Armchair } from 'lucide-react';

export function ChairRentPromo() {
  const cr = site.chairRent;
  if (!cr?.showPromo || !cr.availableChairs || cr.availableChairs < 1) return null;

  const { availableChairs, pricePerChairPerMonth } = cr;

  return (
    <section
      aria-labelledby="chair-rent-heading"
      className="relative border-y border-blush-200 bg-gradient-to-r from-blush-50 via-amber-50/80 to-violet-50/60"
    >
      <Container className="py-8 sm:py-10">
        <div className="relative overflow-hidden rounded-3xl border-2 border-blush-400 bg-white p-6 sm:p-8 shadow-lg shadow-blush-200/50 ring-4 ring-blush-100/80">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blush-200/40 blur-2xl" aria-hidden />
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-violet-200/30 blur-2xl" aria-hidden />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-start">
              <div className="relative mx-auto w-full max-w-[220px] shrink-0 overflow-hidden rounded-2xl border border-ink-100 shadow-md sm:mx-0">
                <Image
                  src={chairRentSalonImage}
                  alt="Professional styling chair and station available for monthly rent"
                  width={440}
                  height={660}
                  className="h-auto w-full object-cover"
                  sizes="220px"
                />
              </div>
              <div className="flex min-w-0 flex-1 items-start gap-4">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blush-500 to-violet-600 text-white shadow-md">
                <Armchair className="h-7 w-7" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blush-700">Now available</p>
                <h2 id="chair-rent-heading" className="mt-1 text-xl font-semibold text-ink-900 sm:text-2xl">
                  Styling chairs for rent — {availableChairs} {availableChairs === 1 ? 'chair' : 'chairs'} open
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-ink-700">
                  Independent barbers and stylists: rent a workstation in our salon and bring your own clients.
                  We have two styling chairs available—{' '}
                  <span className="font-semibold text-ink-900">
                    ${pricePerChairPerMonth}/month per chair
                  </span>
                  . Use the space for your barber or styling work in a professional setting.
                </p>
              </div>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center lg:flex-col lg:items-stretch xl:flex-row">
              <Button href={site.phoneTel} variant="secondary" className="whitespace-nowrap">
                Call {site.phone}
              </Button>
              <Button href="/contact#callback-form" className="whitespace-nowrap">
                Ask about rent
              </Button>
            </div>
          </div>
          <p className="relative mt-4 text-xs text-ink-600">
            Interested? Call or message us—we’ll go over details and availability.
          </p>
        </div>
      </Container>
    </section>
  );
}
