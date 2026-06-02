import { cn } from '@/lib/utils'

/**
 * The TAP motif: acid-green circle with a white play-triangle. Reads as
 * "tap to play." The iconic mark for The Apex Podcast (STRATEGY-V2 §1).
 * Decorative by default (aria-hidden); pass a label to announce it.
 */
export default function TapMark({
  className,
  label,
}: {
  className?: string
  label?: string
}) {
  return (
    <span
      className={cn('inline-flex items-center justify-center rounded-full bg-acid', className)}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <svg viewBox="0 0 24 24" className="h-[42%] w-[42%] translate-x-[6%]" fill="none">
        <path d="M8 5.5v13l11-6.5z" fill="#FAF8F3" />
      </svg>
    </span>
  )
}
