export const dynamic = 'force-static';
export const revalidate = 3600;

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Team } from '@/components/sections/team';
import { Gallery } from '@/components/sections/gallery';
import { Pricing } from '@/components/sections/pricing';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Team />
        <Gallery />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
