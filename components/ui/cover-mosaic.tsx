'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { SHOW_COVERS } from '@/lib/shows'

/**
 * The Show Wall — the interactive "lights up" hero grid, ported from the CCM
 * hero mosaic. A dense, edge-to-edge grid of podcast cover art fills the hero.
 * Tiles rest desaturated and dimmed; a radius of tiles around the cursor warms
 * to full color, brightens, and lifts (the effect Brett loves). A right-to-left
 * gradient (bone or ink) keeps the copy clean on the left while the covers pop
 * on the right. Cover art is the background-tile content — the catalog of Apex
 * releases as the backdrop.
 *
 * Implementation: plain <img> tiles (pre-optimized webp) with their centers
 * measured once, then a single pointer handler writes filter/opacity/transform
 * directly to the nearby tiles inside a rAF — no React re-render per frame, so
 * it stays smooth with ~50 tiles. Falls back to the CSS per-tile hover, and is
 * inert under prefers-reduced-motion.
 */

// Brand label covers + solids round out the show covers for grid rhythm.
const BRAND = [
  '/covers/cover-02-bold.webp',
  '/covers/cover-03-editorial.webp',
  '/covers/cover-04-pentatype.webp',
  '/covers/cover-05-label.webp',
  '/covers/cover-06-host-acid.webp',
  '/covers/cover-07-host-magenta.webp',
  '/covers/cover-08-host-gold.webp',
]
const SOLIDS = ['/covers/solid-ink.webp', '/covers/solid-acid.webp', '/covers/solid-stone.webp']

// Deterministic ~54-cell pool: real + network covers first, brand covers mixed
// in, a brand solid every ninth cell. No randomness so SSR and client match.
const POOL = [...SHOW_COVERS, ...BRAND]
const BG_TILES: string[] = (() => {
  const out: string[] = []
  let pi = 0
  let si = 0
  for (let i = 0; i < 54; i++) {
    if (i > 0 && i % 9 === 4) {
      out.push(SOLIDS[si % SOLIDS.length])
      si++
    } else {
      out.push(POOL[pi % POOL.length])
      pi++
    }
  }
  return out
})()

const RADIUS = 230

export function CoverMosaicBackground({
  className,
  tone = 'light',
}: {
  className?: string
  tone?: 'light' | 'dark'
}) {
  const gridRef = useRef<HTMLDivElement>(null)
  const imgs = useRef<HTMLImageElement[]>([])
  const centers = useRef<Array<{ x: number; y: number }>>([])

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const measure = () => {
      const gr = grid.getBoundingClientRect()
      centers.current = imgs.current.map((el) => {
        const r = el.getBoundingClientRect()
        return { x: r.left - gr.left + r.width / 2, y: r.top - gr.top + r.height / 2 }
      })
    }
    measure()

    // Paint directly from the pointer position. Writing inline styles to ~55
    // tiles per move is cheap (no layout thrash, just compositor filters), and
    // dropping rAF keeps the effect robust across browsers and headless checks.
    const paint = (cx: number, cy: number) => {
      const list = imgs.current
      const cs = centers.current
      for (let i = 0; i < list.length; i++) {
        const c = cs[i]
        const el = list[i]
        if (!c || !el) continue
        const dx = cx - c.x
        const dy = cy - c.y
        const k = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / RADIUS)
        if (k <= 0.001) {
          el.style.filter = ''
          el.style.opacity = ''
          el.style.transform = ''
          el.style.zIndex = ''
          continue
        }
        el.style.filter = `grayscale(${1 - k * 0.95}) brightness(${0.94 + k * 0.34}) saturate(${1 + k * 0.15})`
        el.style.opacity = String(0.6 + k * 0.4)
        el.style.transform = `scale(${1 + k * 0.05})`
        el.style.zIndex = k > 0.5 ? '10' : ''
      }
    }

    const onMove = (e: PointerEvent) => {
      const gr = grid.getBoundingClientRect()
      paint(e.clientX - gr.left, e.clientY - gr.top)
    }
    const onLeave = () => paint(-9999, -9999)
    const onResize = () => measure()

    grid.addEventListener('pointermove', onMove)
    grid.addEventListener('pointerleave', onLeave)
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onResize, { passive: true })
    return () => {
      grid.removeEventListener('pointermove', onMove)
      grid.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onResize)
    }
  }, [])

  const g = tone === 'dark' ? '20,20,15' : '250,248,243'

  return (
    <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)} aria-hidden="true">
      <div
        ref={gridRef}
        className="grid h-full w-full auto-rows-fr grid-cols-6 gap-1.5 sm:grid-cols-8 lg:grid-cols-10"
      >
        {BG_TILES.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="group relative overflow-hidden rounded-sm transition-shadow duration-[480ms] hover:z-10 hover:shadow-[0_8px_24px_rgba(20,20,15,0.22)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={(el) => {
                if (el) imgs.current[i] = el
              }}
              src={src}
              alt=""
              loading={i < 12 ? 'eager' : 'lazy'}
              decoding="async"
              className="mosaic-tile-img absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right-to-left gradient: opaque across the left ~35% where the copy
          lives, fading so covers pop on the right. */}
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
 * Mobile / stacked fallback: a curated grid of show covers, lightly
 * desaturated, shown where the full-bleed wall is hidden.
 */
export function CoverMosaicMobile({ className }: { className?: string }) {
  return (
    <div className={cn('grid grid-cols-3 gap-2.5', className)} aria-hidden="true">
      {SHOW_COVERS.slice(0, 6).map((src) => (
        <div
          key={src}
          className="relative aspect-square overflow-hidden rounded-lg ring-1 ring-ink/10"
          style={{ filter: 'grayscale(0.3)', opacity: 0.96 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      ))}
    </div>
  )
}
