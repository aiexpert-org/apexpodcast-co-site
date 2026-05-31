import { cn } from '@/lib/utils'

/**
 * The Apex wordmark, set live in Archivo Black (lowercase, tight tracking) so it
 * stays crisp at any size and never depends on a rasterized asset.
 *
 * Brand-guide color logic:
 *  - tone="light" (bone / light grounds): ink letters, acid period (the signature).
 *  - tone="dark"  (ink / dark grounds):   acid letters and period (primary lockup).
 */
export default function Wordmark({
  tone = 'light',
  className,
}: {
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <span
      aria-label="apex."
      className={cn(
        'font-display lowercase tracking-tighter leading-none select-none',
        tone === 'dark' ? 'text-acid' : 'text-ink',
        className,
      )}
    >
      apex<span className="text-acid">.</span>
    </span>
  )
}
