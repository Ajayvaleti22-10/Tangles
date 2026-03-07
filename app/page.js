export const dynamic = 'force-static';
export const revalidate = 3600;

import { Hero } from '@/components/sections/hero';
import { ServicesPreview } from '@/components/sections/services-preview';
import { Testimonials } from '@/components/sections/testimonials';
import { CTA } from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
