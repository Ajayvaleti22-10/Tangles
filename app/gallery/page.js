export const dynamic = 'force-static';
export const revalidate = 3600;

import { Gallery } from '@/components/sections/gallery';

export const metadata = {
  title: 'Gallery',
  description: 'A look inside Tangles Salon in Cedar Rapids—our space, stations, and atmosphere.'
};

export default function GalleryPage() {
  return <Gallery />;
}
