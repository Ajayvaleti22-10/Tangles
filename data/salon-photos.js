/**
 * Real salon photography — files live in /public/gallery/
 *
 * Placement (curated): hero = strongest “in the chair” shot; home strip = brand + welcome + detail;
 * full gallery = full walkthrough. Chair-rent uses a clear empty-station shot.
 */

/** Hero: styling station — teal accent matches the site, reads well in a wide crop */
export const heroSalonImage = '/gallery/salon-station-teal.png';

/** Chair rent: dedicated station shot so renters see the workspace */
export const chairRentSalonImage = '/gallery/salon-station-1.png';

/** Home page preview (3) — brand wall, entry, cozy detail (no repeat of hero) */
export const homeGalleryImages = [
  {
    src: '/gallery/salon-tangles-interior.png',
    alt: 'Tangles Salon — wash stations and styling area with teal branding',
    tag: 'Our salon'
  },
  {
    src: '/gallery/salon-waiting.png',
    alt: 'Waiting area by the front window',
    tag: 'Welcome in'
  },
  {
    src: '/gallery/salon-shelves.png',
    alt: 'Shelves with decor and personal touches',
    tag: 'The vibe'
  }
];

/** Full gallery — walkthrough order: brand → stations → welcome → details → care */
export const galleryPageImages = [
  {
    src: '/gallery/salon-tangles-interior.png',
    alt: 'Tangles Salon interior with washing stations and styling area',
    title: 'Tangles interior',
    tag: 'Salon'
  },
  {
    src: '/gallery/salon-station-teal.png',
    alt: 'Professional styling chair and vanity',
    title: 'Styling station',
    tag: 'Workspace'
  },
  {
    src: '/gallery/salon-station-mirror.png',
    alt: 'Styling station with mirror and professional tools',
    title: 'Your chair',
    tag: 'Style'
  },
  {
    src: '/gallery/salon-waiting.png',
    alt: 'Waiting area by the front window',
    title: 'Waiting area',
    tag: 'Welcome'
  },
  {
    src: '/gallery/salon-processing.png',
    alt: 'Processing area with dryers and mirrors',
    title: 'Color & care',
    tag: 'Care'
  },
  {
    src: '/gallery/salon-shelves.png',
    alt: 'Glass shelves with decor and photos',
    title: 'Salon details',
    tag: 'Atmosphere'
  }
];
