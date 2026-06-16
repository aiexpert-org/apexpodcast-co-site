import { cn } from '@/lib/utils'

/**
 * Acid highlighter pass. The Apex translation of the CCM marker swipe: a clean
 * tape strip with lightly chamfered ends, tilted ~1.5deg so it reads like a
 * quick marker swipe behind nav items and primary CTAs. Acid (#BFD93B) replaces
 * CCM's yellow as the single splash color.
 *
 * Rendered as an absolutely positioned layer behind its content. Callers place
 * the text in a `relative z-10` span on top and drive the reveal via
 * `className`: pass `scale-x-0 ... group-hover:scale-x-100` for a center-expand
 * reveal, or `scale-x-100 opacity-100` for an always-on swipe.
 *
 * The fill is a literal acid hex set via the inline `fill` property (plus a
 * matching presentation attribute). Safari / iOS do not evaluate `var()` inside
 * an SVG presentation attribute, so a literal value keeps the swipe solid in
 * every engine.
 */
const ACID = '#BFD93B'

export default function AcidSwipe({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 z-0 origin-center',
        className,
      )}
    >
      <svg
        aria-hidden="true"
        role="presentation"
        focusable="false"
        viewBox="0 0 100 22"
        preserveAspectRatio="none"
        className="absolute top-1/2 left-1/2 h-[75%] w-[110%]"
        style={{
          transform: 'translate(-50%, -50%) rotate(-1.5deg)',
          overflow: 'visible',
        }}
      >
        <path
          d="M 1,11 L 6,3.5 L 94,3.5 L 99,11 L 94,18.5 L 6,18.5 Z"
          fill={ACID}
          style={{ fill: ACID }}
          opacity="0.92"
        />
      </svg>
    </span>
  )
}
