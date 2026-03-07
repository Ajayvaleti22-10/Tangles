import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { site } from '@/data/site';

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0])
    .join('');
  return (
    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blush-100 to-white border border-ink-100 text-ink-900 font-semibold">
      {initials}
    </div>
  );
}

export function Team() {
  return (
    <section id="team" className="bg-white">
      <Container className="py-14 sm:py-20">
        <SectionHeader
          eyebrow="Our team"
          title="Stylists who listen first"
          description="We’ll match you with the right artist for your hair goals—cuts, color, and texture work included."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {site.team.map((m) => (
            <div key={m.name} className="rounded-3xl border border-ink-100 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <Avatar name={m.name} />
                <div>
                  <p className="font-semibold text-ink-900">{m.name}</p>
                  <p className="text-sm text-ink-600">{m.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-ink-700">{m.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
