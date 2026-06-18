'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'
import { SCROLLER_SHOWS, type Show } from '@/lib/shows'

/**
 * Dark Logo Scroller. The CCM "Churches I've worked with" treatment, with
 * Apex's wordmark swap and a scroll-tied parallax on the band so it floats
 * against the page as you scroll past it.
 *
 * - Two rows of show wordmarks drift in opposing directions on ink.
 * - The band has a real vertical parallax (60 -> -60 px across its scroll
 *   range) so the slow horizontal drift reads as layered against page motion.
 * - Resting state is white-on-ink; hover swaps to acid-on-ink (graphic
 *   recolors to acid, wordmark stays bone) per the wordmark spec.
 * - Coming Soon shows render a small subtle eyebrow.
 * - Implementation: doubled track translated -50% for a seamless loop.
 *   Pauses on hover. Falls back to a static grid under prefers-reduced-motion.
 */
export default function LogoScroller({
  className,
  eyebrow = 'On the network',
  title = 'Shows in the Apex catalog',
  blurb = 'Twenty-six productions across the Apex Podcast Network. The first wave is live on Transistor. The next wave is in the studio.',
}: {
  className?: string
  eyebrow?: string
  title?: string
  blurb?: string
}) {
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bandY = useTransform(scrollYProgress, [0, 1], [60, -60])

  const items = SCROLLER_SHOWS
  if (items.length === 0) return null

  const mid = Math.ceil(items.length / 2)
  const top = items.slice(0, mid)
  const bottom = items.slice(mid)

  return (
    <section
      ref={sectionRef}
      className={cn('bg-ink text-bone', className)}
      aria-label="Apex Podcast Network catalog"
    >
      <div className="container-apex pt-20 md:pt-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-acid">
            {eyebrow}
          </p>
          <h2 className="mt-3 h-section text-bone">
            {title}
            <span className="text-acid">.</span>
          </h2>
          <p className="lead mt-5 text-bone/70">{blurb}</p>
        </div>
      </div>

      {reduce ? (
        <div
          className={cn(
            'marquee-band mt-14 flex flex-col gap-3 overflow-hidden pb-20 md:pb-28',
            '[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]',
          )}
        >
          <StaticGrid items={items} />
        </div>
      ) : (
        <motion.div
          style={{ y: bandY }}
          className={cn(
            'marquee-band mt-14 flex flex-col gap-3 overflow-hidden pb-20 md:pb-28 will-change-transform',
            '[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]',
          )}
        >
          <Marquee row={top} direction="ltr" />
          <Marquee row={bottom.length ? bottom : top} direction="rtl" />
        </motion.div>
      )}
    </section>
  )
}

function Marquee({
  row,
  direction,
}: {
  row: Show[]
  direction: 'ltr' | 'rtl'
}) {
  const doubled = [...row, ...row]
  return (
    <div className={cn('marquee-track', direction === 'ltr' ? 'marquee-ltr' : 'marquee-rtl')}>
      {doubled.map((show, i) => (
        <Tile key={`${show.slug}-${i}`} show={show} />
      ))}
    </div>
  )
}

function StaticGrid({ items }: { items: Show[] }) {
  return (
    <div className="container-apex grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((show) => (
        <Tile key={show.slug} show={show} />
      ))}
    </div>
  )
}

function Tile({ show }: { show: Show }) {
  const isComing = show.status === 'coming-soon'
  return (
    <div
      className="group relative flex h-24 w-60 shrink-0 flex-col items-center justify-center gap-1 rounded-2xl px-4 py-3 ring-1 ring-transparent transition hover:bg-bone/[0.04] hover:shadow-[0_0_24px_rgba(191,217,59,0.18)] hover:ring-acid/40 sm:w-64"
      aria-label={show.title}
    >
      {show.wordmark ? (
        <WordmarkSwap slug={show.wordmark} title={show.title} />
      ) : (
        <span
          className={cn(
            'font-display font-extrabold lowercase leading-none tracking-tighter text-bone/85 transition group-hover:text-acid',
            'text-[clamp(1rem,1.4vw,1.35rem)]',
          )}
        >
          {show.title}
        </span>
      )}
      {isComing && (
        <span className="font-mono text-[0.55rem] uppercase tracking-[0.22em] text-bone/40 group-hover:text-acid/80">
          Coming Soon
        </span>
      )}
    </div>
  )
}

/** Stacks the white and acid variants; the acid layer fades in on hover. */
function WordmarkSwap({ slug, title }: { slug: string; title: string }) {
  return (
    <span className="relative block h-12 w-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/wordmarks/${slug}/wordmark-white-on-ink.svg`}
        alt={title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-contain transition duration-300 group-hover:opacity-0"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/wordmarks/${slug}/wordmark-acid-on-ink.svg`}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-contain opacity-0 transition duration-300 group-hover:opacity-100"
      />
    </span>
  )
}
