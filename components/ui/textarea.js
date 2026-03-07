import { cn } from '@/lib/utils';

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'min-h-[120px] w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blush-400 focus:ring-offset-2',
        className
      )}
      {...props}
    />
  );
}
