export const dynamic = 'force-static';
export const revalidate = 3600;

import { Team } from '@/components/sections/team';

export const metadata = {
  title: 'Our Team',
  description: 'Meet our stylists and specialists. Precision cuts, color, and barbering.'
};

export default function TeamPage() {
  return <Team />;
}
