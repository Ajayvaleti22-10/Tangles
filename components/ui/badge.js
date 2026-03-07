import { cn } from '@/lib/utils';

export function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-800',
        className
      )}
      {...props}
    />
  );
}
