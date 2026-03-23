export const dynamic = 'force-static';
export const revalidate = 3600;

import { Contact } from '@/components/sections/contact';
import { FAQ } from '@/components/sections/faq';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch or book an appointment. Address, hours, and contact form.'
};

export default function ContactPage() {
  return (
    <>
      <Contact />
      <FAQ />
    </>
  );
}
