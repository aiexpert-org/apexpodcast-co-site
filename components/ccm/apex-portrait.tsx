import Image from 'next/image'
import { cn } from '@/lib/utils'

// Apex's "founder is not a public case study" rule (faceless rule, locked
// 2026-05-18) means there is no canonical founder portrait. The hero collage
// uses show cover art instead. These exports stay defined so the CCM chassis
// importers do not error, but they render a placeholder (neutral acid block)
// until a producer/host portrait is wired for case study pages.

export const APEX_ALT = 'Apex Podcast Co'

const PLACEHOLDER = '/images/apex-mark.svg'

export function ApexAvatar({
  size = 48,
  className,
}: {
  size?: number
  priority?: boolean
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-block shrink-0 rounded-full bg-[var(--color-acid)] ring-1 ring-neutral-900/10',
        className,
      )}
      style={{ width: size, height: size }}
    />
  )
}

const FULL_RATIO = 1286 / 1029

export function ApexPortrait({
  width = 440,
  className,
  src,
  alt = APEX_ALT,
  priority = false,
}: {
  width?: number
  priority?: boolean
  className?: string
  src?: string
  alt?: string
}) {
  if (!src) {
    // Faceless rule fallback: an acid-tinted card with the catalog stamp.
    return (
      <div
        className={cn(
          'relative aspect-[5/7] w-full overflow-hidden rounded-3xl bg-[var(--color-acid)] ring-1 ring-neutral-900/10',
          className,
        )}
        style={{ maxWidth: width }}
      >
        <div className="absolute inset-0 flex items-end p-6 font-mono text-xs tracking-widest text-[var(--color-ink)] uppercase">
          Apex Podcast Co · est. 2026
        </div>
      </div>
    )
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={Math.round(width * FULL_RATIO)}
      priority={priority}
      sizes={`(min-width: 1024px) ${width}px, 100vw`}
      className={cn('h-auto w-full rounded-3xl object-cover', className)}
    />
  )
}

export function ArticleByline({
  trailing,
  className,
  name = 'Brett K Moore',
}: {
  trailing?: React.ReactNode
  className?: string
  name?: string
}) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <ApexAvatar size={40} />
      <p className="text-sm text-neutral-500">
        By <span className="font-medium text-neutral-700">{name}</span>
        {trailing ? <>{trailing}</> : null}
      </p>
    </div>
  )
}
