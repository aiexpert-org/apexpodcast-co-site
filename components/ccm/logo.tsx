import { cn } from '@/lib/utils'

/**
 * Apex Podcast Co wordmark. Rendered as type: the name in the display face
 * with an acid accent dot. White on dark surfaces when `invert`.
 */
export function Logo({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
}) {
  return (
    <span
      className={cn(
        'font-display text-xl font-semibold tracking-tight whitespace-nowrap',
        invert ? 'text-white' : 'text-neutral-950',
        className,
      )}
    >
      Apex Podcast Co
      <span className="text-[var(--color-cta)]">.</span>
    </span>
  )
}
