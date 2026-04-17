'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Container } from '@/components/container';
import { SectionHeader } from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { site } from '@/data/site';
import { MapPin, Phone } from 'lucide-react';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_PHONE = 32;
const MAX_MESSAGE = 5000;
const SUBMIT_COOLDOWN_MS = 3000;

function trim(str, maxLen) {
  const t = String(str ?? '').trim().slice(0, maxLen);
  return t;
}

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const lastSubmitTime = useRef(0);

  async function onSubmit(e) {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmitTime.current < SUBMIT_COOLDOWN_MS && status === 'success') {
      return;
    }

    if (!acceptedTerms) {
      setStatus('error');
      setErrorMessage('You must accept the Terms & Conditions before submitting.');
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === 'your_web3forms_access_key') {
      setStatus('error');
      setErrorMessage('Form is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local');
      return;
    }

    const safeName = trim(name, MAX_NAME);
    const safeEmail = trim(email, MAX_EMAIL);
    const safePhone = trim(phone, MAX_PHONE);
    const safeMessage = trim(message, MAX_MESSAGE);

    if (!safeName || !safeEmail || !safePhone || !safeMessage) {
      setStatus('error');
      setErrorMessage('Please fill in name, email, phone number, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(safeEmail)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const phoneDigits = (safePhone.match(/\d/g) || []).length;
    if (phoneDigits < 10) {
      setStatus('error');
      setErrorMessage('Please enter a valid phone number (at least 10 digits).');
      return;
    }

    setStatus('sending');
    setErrorMessage('');
    lastSubmitTime.current = now;

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: safeName,
          email: safeEmail,
          phone: safePhone,
          message: safeMessage,
          subject: `${site.name} – Contact form: ${safeName}`,
          from_name: site.name,
          botcheck: '',
          terms_accepted: 'Yes',
          terms_accepted_at: new Date().toISOString(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setAcceptedTerms(false);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Unable to send. Please check your connection and try again.');
    }
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blush-50/80 via-white to-violet-50/50"
    >
      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Let’s get you booked"
              description="Call to schedule, or send us a message with the form below."
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                className="flex items-center gap-3 rounded-3xl border-2 border-blush-200 bg-gradient-to-br from-blush-50/90 to-white p-5 shadow-soft transition hover:border-blush-300 hover:shadow-md"
                href={site.phoneTel}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blush-500 to-blush-700 text-white shadow-soft">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">Call to book</p>
                  <p className="text-sm text-ink-700">{site.phone}</p>
                </div>
              </a>
              <a
                className="flex items-center gap-3 rounded-3xl border-2 border-teal-200 bg-gradient-to-br from-teal-50/90 to-white p-5 shadow-soft transition hover:border-teal-300 hover:shadow-md"
                href={site.socials.googleMaps}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-soft">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">Directions</p>
                  <p className="text-sm text-ink-700">Open in Maps</p>
                </div>
              </a>
            </div>

            <div className="mt-10 rounded-3xl border-2 border-violet-200 bg-gradient-to-br from-violet-50/80 to-blush-50/30 p-6 shadow-soft">
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

          <div
            id="callback-form"
            className="rounded-3xl border-2 border-blush-200 bg-white/95 p-6 shadow-glow backdrop-blur-sm scroll-mt-24 ring-1 ring-blush-100/80"
          >
            <p className="text-sm font-semibold text-ink-900">Send a message</p>
            <p className="mt-1 text-sm text-ink-700">
              We’ll get back to you as soon as we can. To book by phone, use Call to book above.
            </p>

            <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
              <div className="grid gap-2">
                <label className="text-xs font-semibold text-ink-700">Name</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  maxLength={MAX_NAME}
                  disabled={status === 'sending'}
                  autoComplete="name"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold text-ink-700">Email</label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  type="email"
                  required
                  maxLength={MAX_EMAIL}
                  disabled={status === 'sending'}
                  autoComplete="email"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold text-ink-700">Phone</label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="319-363-6500"
                  type="tel"
                  required
                  maxLength={MAX_PHONE}
                  disabled={status === 'sending'}
                  autoComplete="tel"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold text-ink-700">Message</label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you’d like to book..."
                  required
                  maxLength={MAX_MESSAGE}
                  disabled={status === 'sending'}
                  autoComplete="off"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="accept-terms"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  disabled={status === 'sending'}
                  className="mt-1 h-4 w-4 rounded border-ink-300 text-blush-600 focus:ring-blush-500"
                />
                <label htmlFor="accept-terms" className="text-sm text-ink-700">
                  I have read and accept the{' '}
                  <Link href="/terms" className="font-medium text-blush-600 underline hover:text-blush-700" target="_blank" rel="noopener noreferrer">
                    Terms &amp; Conditions
                  </Link>
                  . I understand that my submission is subject to those terms.
                </label>
              </div>

              {status === 'success' && (
                <p className="rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800">
                  Thanks! Your message was sent. We’ll be in touch soon.
                </p>
              )}
              {status === 'error' && (
                <p className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800">
                  {errorMessage}
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <Button type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
