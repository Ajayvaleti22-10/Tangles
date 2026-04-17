'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';
import { cn } from '@/lib/utils';
import { useBookAppointment } from '@/components/book-appointment-provider';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' }
];

export function Navbar() {
  const { openModal: openBookModal } = useBookAppointment();
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
    <header className={cn('sticky top-0 z-50 transition', scrolled && 'backdrop-blur bg-white/90 border-b border-blush-100 shadow-sm')}>
      <Container className="flex h-28 sm:h-32 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt={`${site.name} logo`} width={596} height={596} className="h-24 sm:h-28 w-24 sm:w-28 object-contain" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-700 hover:text-blush-600 transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="secondary" href={site.phoneTel}>
            Call
          </Button>
          <Button type="button" onClick={openBookModal}>
            Book an appointment
          </Button>
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
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <Image src="/logo.svg" alt={`${site.name} logo`} width={596} height={596} className="h-24 w-24 object-contain" />
            </Link>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blush-200 bg-white"
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
                className="rounded-2xl px-4 py-4 text-base font-medium text-ink-900 hover:bg-blush-50"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="mt-10 grid gap-3">
            <Button variant="secondary" href={site.phoneTel}>
              Call {site.phone}
            </Button>
            <Button
              type="button"
              onClick={() => {
                setOpen(false);
                openBookModal();
              }}
            >
              Book an appointment
            </Button>
          </div>

        </Container>
      </div>
    </header>
  );
}
