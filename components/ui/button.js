import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white';

  const variants = {
    primary:
      'bg-ink-900 text-white hover:bg-ink-800 shadow-soft',
    secondary:
      'bg-white text-ink-900 hover:bg-ink-50 border border-ink-200',
    ghost:
      'bg-transparent text-ink-900 hover:bg-ink-50'
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-sm',
    lg: 'h-12 px-8 text-base'
  };

  const Comp = href ? Link : 'button';

  return (
    <Comp
      href={href}
      type={href ? undefined : type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
