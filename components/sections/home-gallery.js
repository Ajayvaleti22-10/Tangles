import Image from 'next/image';
import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { homeGalleryImages } from '@/data/salon-photos';

export function HomeGallery() {
  return (
    <section className="bg-gradient-to-b from-violet-50/70 to-coral-50/50 border-y border-violet-100">
      <Container className="py-14 sm:py-20">
        <SectionHeader
          eyebrow="Gallery"
          title="Real results, real confidence"
          description="Step inside our Cedar Rapids salon—see the space where we work with you."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {homeGalleryImages.map((img) => (
            <div
              key={img.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl border-2 border-white shadow-soft ring-1 ring-ink-100 sm:aspect-[3/4]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
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
