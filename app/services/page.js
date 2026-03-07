export const dynamic = 'force-static';
export const revalidate = 3600;

import { Services } from '@/components/sections/services';

export const metadata = {
  title: 'Services',
  description: 'Hair cuts, color, styling, and treatments. Transparent pricing and expert technique.'
};

export default function ServicesPage() {
  return <Services />;
}
