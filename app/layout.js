import './globals.css';
import { site } from '@/data/site';

export const metadata = {
  title: {
    default: `${site.name} | Hair Salon`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
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
        {children}
      </body>
    </html>
  );
}
