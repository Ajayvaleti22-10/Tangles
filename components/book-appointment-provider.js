'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { site } from '@/data/site';
import { Phone, FileText, X } from 'lucide-react';

const BookAppointmentContext = createContext(null);

export function useBookAppointment() {
  const ctx = useContext(BookAppointmentContext);
  if (!ctx) {
    throw new Error('useBookAppointment must be used within BookAppointmentProvider');
  }
  return ctx;
}

function BookAppointmentModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-ink-900/50 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-modal-title"
        className="relative z-10 w-full max-w-md rounded-3xl border border-ink-100 bg-white p-6 shadow-xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-ink-500 hover:bg-ink-100 hover:text-ink-900"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 id="book-modal-title" className="pr-10 text-xl font-semibold text-ink-900">
          Book an appointment
        </h2>
        <p className="mt-2 text-sm text-ink-700">
          Choose how you’d like to reach us.
        </p>
        <div className="mt-6 grid gap-3">
          <a
            href={site.phoneTel}
            className="flex items-center gap-4 rounded-2xl border border-ink-100 bg-ink-50/60 p-4 text-left transition hover:border-blush-200 hover:bg-blush-50/50"
            onClick={onClose}
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink-900 text-white">
              <Phone className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-semibold text-ink-900">Call us</span>
              <span className="text-sm text-ink-600">{site.phone}</span>
            </span>
          </a>
          <Link
            href="/contact#callback-form"
            className="flex items-center gap-4 rounded-2xl border border-ink-100 bg-ink-50/60 p-4 text-left transition hover:border-blush-200 hover:bg-blush-50/50"
            onClick={onClose}
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blush-600 text-white">
              <FileText className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-semibold text-ink-900">Fill out the form</span>
              <span className="text-sm text-ink-600">We’ll call you back</span>
            </span>
          </Link>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-8 w-full text-center text-sm font-medium text-ink-600 hover:text-ink-900"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export function BookAppointmentProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <BookAppointmentContext.Provider value={{ openModal, closeModal }}>
      {children}
      <BookAppointmentModal open={open} onClose={closeModal} />
    </BookAppointmentContext.Provider>
  );
}
