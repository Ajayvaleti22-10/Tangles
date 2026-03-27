'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Accordion({ items }) {
  const [open, setOpen] = useState(null);

  const shells = [
    'border-blush-200 bg-gradient-to-r from-blush-50/70 to-white',
    'border-teal-200 bg-gradient-to-r from-teal-50/50 to-white',
    'border-violet-200 bg-gradient-to-r from-violet-50/50 to-white'
  ];

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={idx}
            className={cn('rounded-2xl border-2 shadow-soft', shells[idx % shells.length])}
          >
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="font-medium text-ink-900">{it.q}</span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 text-ink-500 transition-transform',
                  isOpen && 'rotate-180'
                )}
              />
            </button>
            <div
              className={cn(
                'grid overflow-hidden transition-[grid-template-rows] duration-300',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              )}
            >
              <div className="min-h-0 px-5 pb-5 text-sm text-ink-700">
                {it.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
