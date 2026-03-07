'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles } from 'lucide-react';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';
import { cn } from '@/lib/utils';

const links = [
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={cn('sticky top-0 z-50 transition', scrolled && 'backdrop-blur bg-white/80 border-b border-ink-100')}>
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 text-white shadow-soft">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight text-ink-900">{site.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-700 hover:text-ink-900 transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="secondary" href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}>
            Call
          </Button>
          <Button href={site.booking.url}>Book now</Button>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 bg-white"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* mobile */}
      <div
        className={cn(
          'md:hidden fixed inset-0 z-50 bg-white transition-opacity',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <Container className="pt-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 text-white shadow-soft">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-semibold tracking-tight text-ink-900">{site.name}</span>
            </Link>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 bg-white"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-2xl px-4 py-4 text-base font-medium text-ink-900 hover:bg-ink-50"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="mt-10 grid gap-3">
            <Button variant="secondary" href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}>
              Call {site.phone}
            </Button>
            <Button href={site.booking.url}>Book now</Button>
          </div>

        </Container>
      </div>
    </header>
  );
}
