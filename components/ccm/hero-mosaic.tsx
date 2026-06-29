'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Studio-template hero mosaic background.
 *
 * Mirrors the Tailwind UI Studio pattern that CCM (createchurchmedia.com) uses
 * behind its headline: a dense, edge-to-edge grid of cover-art tiles fills the
 * full hero, sitting muted and desaturated at rest. Hovering a tile in the
 * right columns brings it to full color and lifts it slightly. A right-to-left
 * white gradient keeps the left side opaque so the headline and CTAs stay
 * crisp regardless of which tile lights up underneath.
 *
 * For Apex this is the three real show covers, repeated across the grid in a
 * staggered pattern so the catalog itself becomes the hero visual. No fake
 * density, no invented shows, just the three covers we ship.
 */

const SHOW_COVERS = [
  '/covers/show-the-russ-laggan-podcast.webp',
  '/covers/show-winning-twice.webp',
  '/covers/show-sweeter-after-difficulty.webp',
]

// 50 tiles across the desktop 10-col grid. The three covers cycle through a
// staggered pattern so no two adjacent tiles share the same cover. Each entry
// is the index into SHOW_COVERS.
const TILE_PATTERN = [
  0, 1, 2, 0, 1, 2, 0, 1, 2, 0,
  2, 0, 1, 2, 0, 1, 2, 0, 1, 2,
  1, 2, 0, 1, 2, 0, 1, 2, 0, 1,
  0, 1, 2, 0, 1, 2, 0, 1, 2, 0,
  2, 0, 1, 2, 0, 1, 2, 0, 1, 2,
]

function hoverIntensity(col: number): { saturation: number; brightness: number } {
  if (col <= 3) return { saturation: 0.35, brightness: 0.95 }
  if (col <= 5) return { saturation: 0.55, brightness: 1.0 }
  if (col <= 7) return { saturation: 0.75, brightness: 1.05 }
  return { saturation: 1.0, brightness: 1.1 }
}

export function HeroMosaicBackground() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="grid h-full w-full auto-rows-fr grid-cols-6 gap-1.5 sm:grid-cols-8 lg:grid-cols-10">
        {TILE_PATTERN.map((coverIndex, i) => {
          const col = i % 10
          const inTextColumns = col <= 3
          const { saturation, brightness } = hoverIntensity(col)
          const src = SHOW_COVERS[coverIndex]
          return (
            <div
              key={`${src}-${i}`}
              data-col={col}
              tabIndex={-1}
              className={cn(
                'relative overflow-hidden rounded-sm',
                inTextColumns
                  ? 'pointer-events-none'
                  : 'group pointer-events-auto cursor-pointer transition duration-[480ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-10 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]',
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

      {/* Right-to-left white gradient. Fully opaque white across the left so
          the headline, sub-paragraph, and CTAs stay legible against the cream
          page background while the colorful catalog covers show through on
          the right. `pointer-events-none` so it does not swallow tile hover. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, var(--color-bone, #faf8f3) 0%, var(--color-bone, #faf8f3) 38%, color-mix(in oklab, var(--color-bone, #faf8f3) 80%, transparent) 55%, color-mix(in oklab, var(--color-bone, #faf8f3) 30%, transparent) 78%, transparent 100%)',
        }}
      />

      {/* Soft top-edge fade so the mosaic blends into the header above. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24"
        style={{
          background:
            'linear-gradient(to bottom, var(--color-bone, #faf8f3) 0%, transparent 100%)',
        }}
      />

      {/* Soft bottom-edge fade into the page below (CatalogPanel band). */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, var(--color-bone, #faf8f3) 100%)',
        }}
      />
    </div>
  )
}

/**
 * Mobile-only variant. Renders below the hero text as a compact 2-col grid of
 * the three covers (repeated to fill 6 cells) so phone viewers still see the
 * catalog land at the top of the page.
 */
export function HeroMosaicMobile() {
  const tiles = [0, 1, 2, 0, 1, 2]
  return (
    <div className="md:hidden grid grid-cols-2 gap-3" aria-hidden="true">
      {tiles.map((coverIndex, i) => (
        <div
          key={i}
          className="relative aspect-square overflow-hidden rounded-xl ring-1 ring-neutral-900/5"
          style={{ filter: 'grayscale(0.4)', opacity: 0.95 }}
        >
          <Image
            src={SHOW_COVERS[coverIndex]}
            alt=""
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}
