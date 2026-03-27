import Image from 'next/image';
import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { galleryPageImages } from '@/data/salon-photos';

export function Gallery() {
  return (
    <section id="gallery" className="bg-white">
      <Container className="py-14 sm:py-20">
        <SectionHeader
          eyebrow="Gallery"
          title="Inside Tangles Salon"
          description="A look at our space in Cedar Rapids—comfortable, professional, and full of personality."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPageImages.map((it, idx) => (
            <div
              key={it.src}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-ink-100 bg-ink-50 shadow-soft"
            >
              <Image
                src={it.src}
                alt={it.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={idx < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink-800 backdrop-blur">
                  {it.tag}
                </span>
                <p className="mt-2 text-lg font-semibold text-white drop-shadow-sm">{it.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
