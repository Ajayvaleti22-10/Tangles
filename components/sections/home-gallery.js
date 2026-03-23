import Image from 'next/image';
import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';

// Unsplash (free to use per Unsplash License – https://unsplash.com/license)
const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', alt: 'Hair color and highlights', tag: 'Color' },
  { src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&q=80', alt: 'Hair styling and finish', tag: 'Style' },
  { src: 'https://images.unsplash.com/photo-1595476108010-4f718efcec63?w=600&q=80', alt: 'Salon experience', tag: 'Care' },
];

export function HomeGallery() {
  return (
    <section className="bg-gradient-to-b from-violet-50/70 to-coral-50/50 border-y border-violet-100">
      <Container className="py-14 sm:py-20">
        <SectionHeader
          eyebrow="Gallery"
          title="Real results, real confidence"
          description="Precision cuts, dimensional color, and healthy hair. See more in our full gallery."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {IMAGES.map((img) => (
            <div
              key={img.src}
              className="group relative overflow-hidden rounded-3xl border-2 border-white shadow-soft ring-1 ring-ink-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-900/80 to-transparent p-4">
                <span className="inline-block rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink-800">
                  {img.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
