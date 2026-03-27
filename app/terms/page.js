export const dynamic = 'force-static';
export const revalidate = 3600;

import { Container } from '@/components/container';
import { site } from '@/data/site';

export const metadata = {
  title: 'Terms & Conditions',
  description: `Terms and conditions of use for ${site.name} website and services.`
};

export default function TermsPage() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-blush-50/90 via-white to-teal-50/40">
      <Container className="py-14 sm:py-20 max-w-3xl">
        <div className="rounded-3xl border-2 border-blush-100 bg-white/90 p-8 shadow-soft backdrop-blur-sm ring-1 ring-violet-100/60 sm:p-10">
        <h1 className="text-3xl font-semibold text-ink-900">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-ink-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="mt-10 prose prose-ink max-w-none text-ink-700 text-sm space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-ink-900 mt-8 mb-2">1. Agreement to Terms</h2>
            <p>By accessing or using the website and services of {site.name} (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;), you agree to be bound by these Terms and Conditions. If you do not agree, do not use this website or our services. By submitting any form on this website (including the contact form), you confirm that you have read, understood, and accept these Terms and Conditions.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink-900 mt-8 mb-2">2. Services</h2>
            <p>We provide hair and beauty services as described on this website. Service descriptions, pricing, and availability are subject to change without notice. We do not guarantee that any particular result will be achieved; outcomes depend on hair type, condition, and other factors. All services are provided &quot;as is.&quot;</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink-900 mt-8 mb-2">3. Bookings, Cancellations &amp; No-Shows</h2>
            <p>Appointments may be made by phone or by messaging us through the contact form on this website. You agree to cancel or reschedule at least 24 hours in advance when possible. We reserve the right to charge a fee for late cancellations or no-shows, and to refuse future bookings if such behavior continues. We may cancel or reschedule appointments due to unforeseen circumstances and will attempt to notify you.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink-900 mt-8 mb-2">4. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, {site.name} and its operator(s) shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising from your use of this website or our services. Our total liability for any claim arising from or related to your use of the website or services shall not exceed the amount you paid for the service in question (or, if no payment was made, zero). We are not liable for any allergic reactions, skin or hair damage, or other outcomes that may result from services, products, or your individual condition; you use our services at your own risk.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink-900 mt-8 mb-2">5. Privacy &amp; Data</h2>
            <p>Information you submit via forms (e.g. contact form) is used to respond to your inquiries and may be processed by third-party services (e.g. form handlers). We do not sell your personal data. By submitting a form, you consent to the collection and use of your data as described. See our website for any separate Privacy Policy if published.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink-900 mt-8 mb-2">6. Intellectual Property</h2>
            <p>All content on this website (text, images, logos, design) is owned by {site.name} or used under license and is protected by copyright and other intellectual property laws. You may not copy, reproduce, or use our content for commercial purposes without our prior written consent.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink-900 mt-8 mb-2">7. Third-Party Links</h2>
            <p>This website may contain links to third-party sites (e.g. maps, social media). We are not responsible for the content or practices of those sites. Your use of them is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink-900 mt-8 mb-2">8. Prohibited Conduct</h2>
            <p>You agree not to use this website or our services for any unlawful purpose, to harass or harm others, to transmit malware, or to attempt to gain unauthorized access to our systems or data. We may suspend or terminate your access at any time.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink-900 mt-8 mb-2">9. Changes</h2>
            <p>We may update these Terms and Conditions at any time. The &quot;Last updated&quot; date at the top will be revised. Continued use of the website or services after changes constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink-900 mt-8 mb-2">10. Governing Law &amp; Disputes</h2>
            <p>These terms are governed by the laws of the jurisdiction in which we operate (e.g. the state/country of our business address). Any dispute shall be resolved in the courts of that jurisdiction, to the extent permitted by law.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink-900 mt-8 mb-2">11. Severability</h2>
            <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink-900 mt-8 mb-2">12. Contact</h2>
            <p>For questions about these Terms and Conditions, contact us through the Contact page on this website or call {site.phone}.</p>
          </section>
        </div>
        </div>
      </Container>
    </article>
  );
}
