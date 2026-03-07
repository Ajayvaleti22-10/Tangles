export const dynamic = 'force-static';
export const revalidate = 3600;

import { Gallery } from '@/components/sections/gallery';

export const metadata = {
  title: 'Gallery',
  description: 'Our work—cuts, color, and styling. Real results from Heavenly Cuts.'
};

export default function GalleryPage() {
  return <Gallery />;
}
