/** Used for display and Google Maps links — keep in sync */
const SALON_ADDRESS = '1703 B Ave N.W, Cedar Rapids, IA';

export const site = {
  name: 'Tangles Salon',
  tagline: 'Modern hair studio for effortless confidence.',
  description:
    'Tangles is a boutique hair salon focused on precision cuts, dimensional color, and healthy hair. Call to book or reach out through our contact form.',
  /** Display format */
  phone: '319-363-6500',
  /** Single tel: link for all “call to book” buttons (E.164 after tel:) */
  phoneTel: 'tel:+13193636500',
  address: SALON_ADDRESS,
  hours: [
    { day: 'Mon', hours: '9:30 AM – 7:00 PM' },
    { day: 'Tue', hours: '9:30 AM – 7:00 PM' },
    { day: 'Wed', hours: '9:30 AM – 7:00 PM' },
    { day: 'Thu', hours: '9:30 AM – 7:00 PM' },
    { day: 'Fri', hours: '9:30 AM – 7:00 PM' },
    { day: 'Sat', hours: '9:30 AM – 7:00 PM' },
    { day: 'Sun', hours: '9:30 AM – 7:00 PM' }
  ],
  socials: {
    instagram: 'https://instagram.com/',
    tiktok: 'https://tiktok.com/',
    /** Opens Google Maps with directions to the salon */
    googleMaps: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SALON_ADDRESS)}`
  },
  services: [
    {
      title: 'Haircut',
      duration: '45–60 min',
      priceFrom: 25,
      description: 'Consultation, wash, precision cut, and finish—tailored to your texture.'
    },
    {
      title: 'Color refresh',
      duration: '90–120 min',
      priceFrom: 55,
      description: 'Root touch-up or all-over color with shine-enhancing treatment.'
    },
    {
      title: 'Highlights',
      duration: '2–3 hrs',
      priceFrom: 50,
      description: 'Dimensional lightening placed to flatter your features and grow out beautifully.'
    },
    {
      title: 'Color highlights',
      duration: '2–3 hrs',
      priceFrom: 75,
      description: 'Rich color plus highlights for depth and dimension—customized to your look.'
    },
    {
      title: 'Eyebrow waxing',
      duration: '15–20 min',
      priceFrom: 15,
      description: 'Clean shaping and definition with a gentle wax—perfect on its own or with your hair service.'
    },
    {
      title: 'Extra length',
      duration: 'Add-on',
      /** No fixed price — shown as text on pricing page */
      priceFrom: null,
      priceLabel: 'Varies by length',
      description:
        'Longer hair may require more time and product. Price depends on length—we’ll quote at your appointment.'
    }
  ],
  team: [
    {
      name: 'Suzanne Bales',
      role: 'Owner & Stylist',
      bio: 'Owner of Tangles Salon, focused on personalized service and healthy, beautiful hair.'
    },
    {
      name: 'Mia Rivers',
      role: 'Color Specialist',
      bio: 'Balayage, blonding, and dimensional color with a healthy-hair-first approach.'
    },
    {
      name: 'Noah Kim',
      role: 'Barber & Fade Expert',
      bio: 'Crisp fades, lineups, and beard shaping with attention to detail.'
    }
  ],
  testimonials: [
    {
      name: 'Jordan P.',
      quote:
        'Best cut I’ve had in years. The consultation was thorough and the styling tips actually work.'
    },
    {
      name: 'Samira L.',
      quote:
        'My color looks expensive and it’s growing out so nicely. The vibe inside is super calming.'
    },
    {
      name: 'Chris D.',
      quote:
        'Fast, clean fade and the beard lineup was perfect. Called ahead and got right in.'
    }
  ],
  faqs: [
    {
      q: 'Do you accept walk-ins?',
      a: 'We recommend booking ahead to guarantee your preferred time. Limited walk-ins may be available.'
    },
    {
      q: 'What’s your cancellation policy?',
      a: 'Please cancel or reschedule at least 24 hours in advance so we can offer the slot to someone else.'
    },
    {
      q: 'Do you work with all hair textures?',
      a: 'Yes—our team is trained across straight, wavy, curly, and coily hair. We’ll match you with the right stylist.'
    }
  ]
};
