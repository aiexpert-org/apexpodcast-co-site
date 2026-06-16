import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * The Show Wall, ported from the CCM hero mosaic. A dense, edge-to-edge grid of
 * podcast cover art fills the hero. Tiles rest desaturated and dimmed; hovering
 * an individual tile lifts just that one to full color and zooms it slightly.
 * Per-column intensity keeps the left side (under the headline and CTAs) muted
 * and legible while the right side pops to full color. A right-to-left bone
 * gradient sits above the tiles so the copy stays clean.
 *
 * This is the album-art-philosophy "producer discography" wall: the catalog of
 * Apex releases as the backdrop. Cover art replaces CCM's church-graphic tiles;
 * acid-era covers and the brand solids carry the record-label rhythm.
 */

// The distinct cover tiles, in catalog order, plus brand solids for rhythm.
const COVERS = [
  '/covers/cover-01-apex.webp',
  '/covers/cover-02-bold.webp',
  '/covers/cover-03-editorial.webp',
  '/covers/cover-04-pentatype.webp',
  '/covers/cover-05-label.webp',
  '/covers/cover-06-host-acid.webp',
  '/covers/cover-07-host-magenta.webp',
  '/covers/cover-08-host-gold.webp',
]
const SOLIDS = ['/covers/solid-ink.webp', '/covers/solid-acid.webp', '/covers/solid-stone.webp']

// Build a deterministic ~50-cell pool: cycle the covers and drop a brand solid
// every seventh cell so the wall reads as a varied catalog, not a repeat loop.
// Deterministic (no randomness) so server and client markup match.
const BG_TILES: string[] = (() => {
  const out: string[] = []
  let ci = 0
  let si = 0
  for (let i = 0; i < 50; i++) {
    if (i > 0 && i % 7 === 3) {
      out.push(SOLIDS[si % SOLIDS.length])
      si++
    } else {
      out.push(COVERS[ci % COVERS.length])
      ci++
    }
  }
  return out
})()

// Per-column hover saturation + brightness across the 10-col desktop grid.
// Left columns sit under the copy and stay muted; right columns pop.
function hoverIntensity(col: number): { saturation: number; brightness: number } {
  if (col <= 3) return { saturation: 0.4, brightness: 0.96 }
  if (col <= 5) return { saturation: 0.7, brightness: 1.0 }
  if (col <= 7) return { saturation: 0.9, brightness: 1.04 }
  return { saturation: 1.05, brightness: 1.08 }
}

export function CoverMosaicBackground({
  className,
  tone = 'light',
}: {
  className?: string
  tone?: 'light' | 'dark'
}) {
  // Gradient ground: bone for light heroes, ink for dark heroes. Same opaque
  // left band keeps the copy legible; the right side fades to show the covers.
  const g = tone === 'dark' ? '20,20,15' : '250,248,243'
  return (
    <div
      className={cn('absolute inset-0 -z-10 overflow-hidden', className)}
      aria-hidden="true"
    >
      <div className="grid h-full w-full auto-rows-fr grid-cols-6 gap-1.5 sm:grid-cols-8 lg:grid-cols-10">
        {BG_TILES.map((src, i) => {
          const col = i % 10
          const inTextColumns = col <= 3
          const { saturation, brightness } = hoverIntensity(col)
          return (
            <div
              key={`${src}-${i}`}
              data-col={col}
              tabIndex={-1}
              className={cn(
                'relative overflow-hidden rounded-sm',
                inTextColumns
                  ? 'pointer-events-none'
                  : 'group pointer-events-auto cursor-pointer transition duration-[480ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-10 hover:shadow-[0_8px_24px_rgba(20,20,15,0.22)]',
              )}
              style={
                inTextColumns
                  ? undefined
                  : ({
                      '--hover-saturation': saturation,
                      '--hover-brightness': brightness,
                    } as React.CSSProperties)
              }
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 1024px) 10vw, (min-width: 640px) 12vw, 16vw"
                className="mosaic-tile-img object-cover"
                priority={i < 10}
              />
            </div>
          )
        })}
      </div>

      {/* Right-to-left bone gradient. Opaque across the left ~35% where the
          headline and CTAs live, then fading so colorful covers show on the
          right. pointer-events-none so it does not swallow tile hover. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(to right, rgba(${g},1) 0%, rgba(${g},1) 35%, rgba(${g},0.82) 50%, rgba(${g},0.3) 75%, rgba(${g},0) 100%)`,
        }}
      />
      {/* Soft fade into the page below. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background: `linear-gradient(to bottom, rgba(${g},0) 0%, rgba(${g},1) 100%)`,
        }}
      />
    </div>
  )
}

/**
 * Mobile / stacked fallback: a curated 2-col grid of covers, lightly
 * desaturated, shown below the copy where the full-bleed wall is hidden.
 */
export function CoverMosaicMobile({ className }: { className?: string }) {
  return (
    <div className={cn('grid grid-cols-3 gap-2.5', className)} aria-hidden="true">
      {COVERS.slice(0, 6).map((src) => (
        <div
          key={src}
          className="relative aspect-square overflow-hidden rounded-lg ring-1 ring-ink/10"
          style={{ filter: 'grayscale(0.35)', opacity: 0.96 }}
        >
          <Image src={src} alt="" fill sizes="33vw" className="object-cover" />
        </div>
      ))}
    </div>
  )
}
