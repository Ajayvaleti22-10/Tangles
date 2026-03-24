import './globals.css';
import { site } from '@/data/site';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BookAppointmentProvider } from '@/components/book-appointment-provider';

export const metadata = {
  title: {
    default: `${site.name} | Hair Salon`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: `${site.name} | Hair Salon`,
    description: site.description,
    type: 'website'
  },
  icons: {
    icon: '/icon.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-ink-900 font-sans">
        <BookAppointmentProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </BookAppointmentProvider>
      </body>
    </html>
  );
}
