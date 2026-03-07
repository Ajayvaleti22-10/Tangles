import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';

const items = [
  { title: 'Soft layers', tag: 'Cut' },
  { title: 'Warm balayage', tag: 'Color' },
  { title: 'Silk press shine', tag: 'Texture' },
  { title: 'Crisp fade', tag: 'Barber' },
  { title: 'Glossy brunette', tag: 'Color' },
  { title: 'Blowout volume', tag: 'Style' }
];

function Tile({ title, tag, idx }) {
  const gradients = [
    'from-blush-100 to-white',
    'from-ink-50 to-white',
    'from-blush-50 to-ink-50'
  ];
  return (
    <div className={
      `relative overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-br ${gradients[idx % gradients.length]} shadow-soft`
    }>
      <div className="absolute inset-0 opacity-25">
        <svg viewBox="0 0 800 500" className="h-full w-full">
          <path d="M0 260 C160 180, 320 180, 480 260 S640 340, 800 260" fill="none" stroke="#1b1b24" strokeWidth="10" />
          <path d="M0 320 C160 240, 320 240, 480 320 S640 400, 800 320" fill="none" stroke="#1b1b24" strokeWidth="10" />
        </svg>
      </div>
      <div className="relative p-6">
        <span className="inline-flex rounded-full bg-white/80 backdrop-blur border border-ink-100 px-3 py-1 text-xs font-semibold text-ink-800">
          {tag}
        </span>
        <p className="mt-4 text-lg font-semibold text-ink-900">{title}</p>
        <p className="mt-1 text-sm text-ink-700">Swap these with real photos in <span className="font-mono">/public</span>.</p>
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="bg-white">
      <Container className="py-14 sm:py-20">
        <SectionHeader
          eyebrow="Gallery"
          title="Work that looks good in real life"
          description="Replace the placeholders with your own photos. The layout is optimized for fast loading and clean spacing."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <Tile key={it.title} {...it} idx={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
}
