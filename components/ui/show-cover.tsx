import { cn } from '@/lib/utils'
import type { Show } from '@/lib/shows'

/**
 * Show cover renderer.
 *
 *  - FLAGSHIP / ESTABLISHED with a raster cover: render the image directly.
 *  - COMING SOON with a wordmark slug: render the ink-on-bone wordmark
 *    centered on a stone-tinted card.
 *  - Fallback: typographic placeholder with the show title.
 */
export default function ShowCover({
  show,
  className,
  priority,
  tone = 'light',
}: {
  show: Show
  className?: string
  priority?: boolean
  tone?: 'light' | 'dark'
}) {
  // Raster cover takes precedence whenever provided.
  if (show.cover) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={show.cover}
        alt={show.title}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={cn('absolute inset-0 h-full w-full object-cover', className)}
      />
    )
  }

  if (show.wordmark) {
    const variant = tone === 'dark' ? 'white-on-ink' : 'ink-on-bone'
    const bg = tone === 'dark' ? 'bg-ink' : 'bg-bone'
    return (
      <div
        role="img"
        aria-label={show.title}
        className={cn(
          'absolute inset-0 flex items-center justify-center px-6',
          bg,
          className,
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/wordmarks/${show.wordmark}/wordmark-${variant}.svg`}
          alt={show.title}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="h-auto w-full max-w-[78%] object-contain"
        />
      </div>
    )
  }

  // Last-resort typographic placeholder.
  const palette =
    tone === 'dark'
      ? { bg: 'bg-ink', fg: 'text-bone' }
      : { bg: 'bg-stone', fg: 'text-ink' }
  return (
    <div
      role="img"
      aria-label={show.title}
      className={cn(
        'absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center',
        palette.bg,
        className,
      )}
    >
      <span
        className={cn(
          'font-mono text-[0.55rem] uppercase tracking-[0.18em] opacity-70',
          palette.fg,
        )}
      >
        {show.catalog}
      </span>
      <span
        className={cn(
          'font-display lowercase leading-[0.9] tracking-tighter',
          'text-[clamp(1rem,3.4cqi,2rem)]',
          palette.fg,
        )}
      >
        {show.title}
      </span>
    </div>
  )
}
