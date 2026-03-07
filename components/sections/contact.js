'use client';

import { useMemo, useState } from 'react';
import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { site } from '@/data/site';
import { Calendar, MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`${site.name} inquiry from ${name || 'Website visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, [name, email, message]);

  function onSubmit(e) {
    e.preventDefault();
    // Simple no-backend submission: open email client.
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <section id="contact" className="bg-white">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Let’s get you booked"
              description="Use the quick actions or send a message. For fastest booking, use the Book Now button."
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                className="flex items-center gap-3 rounded-3xl border border-ink-100 bg-white p-5 shadow-soft hover:bg-ink-50"
                href={site.booking.url}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-900 text-white">
                  <Calendar className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">Book online</p>
                  <p className="text-sm text-ink-700">Pick a service & time</p>
                </div>
              </a>
              <a
                className="flex items-center gap-3 rounded-3xl border border-ink-100 bg-white p-5 shadow-soft hover:bg-ink-50"
                href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-900 text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">Call</p>
                  <p className="text-sm text-ink-700">{site.phone}</p>
                </div>
              </a>
              <a
                className="flex items-center gap-3 rounded-3xl border border-ink-100 bg-white p-5 shadow-soft hover:bg-ink-50"
                href={site.socials.googleMaps}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-900 text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">Directions</p>
                  <p className="text-sm text-ink-700">Open in Maps</p>
                </div>
              </a>
              <a
                className="flex items-center gap-3 rounded-3xl border border-ink-100 bg-white p-5 shadow-soft hover:bg-ink-50"
                href={`mailto:${site.email}`}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-900 text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">Email</p>
                  <p className="text-sm text-ink-700">{site.email}</p>
                </div>
              </a>
            </div>

            <div className="mt-10 rounded-3xl border border-ink-100 bg-ink-50/60 p-6">
              <p className="text-sm font-semibold text-ink-900">Hours</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-700">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="text-ink-600">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold text-ink-900">Send a message</p>
            <p className="mt-1 text-sm text-ink-700">
              This demo form opens your email app (no backend needed). Want a real form? See the README for options.
            </p>

            <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
              <div className="grid gap-2">
                <label className="text-xs font-semibold text-ink-700">Name</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold text-ink-700">Email</label>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" type="email" required />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold text-ink-700">Message</label>
                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us what you’d like to book..." required />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <Button type="submit">Send message</Button>
                {sent ? (
                  <p className="text-xs text-ink-600">If your email app didn’t open, use: <a className="underline" href={mailto}>this link</a>.</p>
                ) : (
                  <p className="text-xs text-ink-600">Or email us at <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
