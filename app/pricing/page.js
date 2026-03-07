export const dynamic = 'force-static';
export const revalidate = 3600;

import { Pricing } from '@/components/sections/pricing';

export const metadata = {
  title: 'Pricing',
  description: 'Clear pricing for cuts, color, styling, and treatments. No hidden fees.'
};

export default function PricingPage() {
  return <Pricing />;
}
