import { cn } from '@/lib/utils';

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'h-11 w-full rounded-xl border border-ink-200 bg-white px-4 text-sm text-ink-900 placeholder:text-ink-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blush-400 focus:ring-offset-2',
        className
      )}
      {...props}
    />
  );
}
