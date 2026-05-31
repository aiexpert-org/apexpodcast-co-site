import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

/**
 * Primary site-wide CTA: listen to The Apex Podcast. Three platform targets
 * (Spotify, Apple, anywhere). URLs are documented placeholders until the real
 * show links land (see PHASE3-PLACEHOLDERS.md / site-config `listen`).
 *
 * `tone="dark"` for ink grounds (acid primary + bone ghosts), `light` for bone.
 */
export default function ListenButtons({
  tone = 'dark',
  className,
}: {
  tone?: 'dark' | 'light'
  className?: string
}) {
  const ghost =
    tone === 'dark'
      ? 'border-bone/25 text-bone hover:border-acid hover:text-acid'
      : 'border-ink/20 text-ink hover:border-ink/50'

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      <a
        href={siteConfig.listen.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary group"
      >
        Listen on Spotify
        <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
          &rarr;
        </span>
      </a>
      <a
        href={siteConfig.listen.apple}
        target="_blank"
        rel="noopener noreferrer"
        className={cn('btn border', ghost)}
      >
        Apple Podcasts
      </a>
      <a
        href={siteConfig.listen.anywhere}
        target="_blank"
        rel="noopener noreferrer"
        className={cn('btn border', ghost)}
      >
        Listen anywhere
      </a>
    </div>
  )
}
