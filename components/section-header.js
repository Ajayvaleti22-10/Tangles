import { cn } from '@/lib/utils';

export function SectionHeader({ eyebrow, title, description, align = 'left', className }) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <div className={cn('flex flex-col gap-3', alignCls, className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-widest text-blush-700 uppercase">{eyebrow}</p>
      ) : null}
      {title ? (
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink-900">{title}</h2>
      ) : null}
      {description ? (
        <p className="max-w-2xl text-sm sm:text-base text-ink-700">{description}</p>
      ) : null}
    </div>
  );
}
