'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ccm/container'
import { FadeIn } from '@/components/ccm/fade-in'
import { SCROLLER_SHOWS, type Show } from '@/lib/shows'

/**
 * Dark Logo Scroller. CCM ChurchLogos treatment, ported to the Apex catalog.
 *
 * Visual contract (matches CCM):
 * - Self-contained rounded-4xl dark card with mt-24/32/40 rhythm.
 * - Centered eyebrow + h2 + intro above the band.
 * - Two rows of large logo tiles drifting in opposing directions on ink.
 * - Each tile carries the show logo + a short caption underneath.
 * - Hover lights a yellow ring around the tile (acid token), tile becomes
 *   clickable to its case study where one exists, otherwise to /network/#slug.
 * - Doubled track translated -50% for a seamless marquee. Pauses on hover.
 */
export default function LogoScroller({
  className,
  eyebrow = 'On the network',
  title = 'Shows in the Apex catalog',
  blurb = 'The Apex catalog. Click any cover for the show.',
}: {
  className?: string
  eyebrow?: string
  title?: string
  blurb?: string
}) {
  const items = SCROLLER_SHOWS
  if (items.length === 0) return null

  const mid = Math.ceil(items.length / 2)
  const top = items.slice(0, mid)
  const bottom = items.slice(mid)

  return (
    <div
      className={cn(
        'mt-24 rounded-4xl bg-ink py-20 sm:mt-32 sm:py-24 lg:mt-40',
        className,
      )}
    >
      <Container>
        <FadeIn>
          <p className="text-center font-mono text-xs uppercase tracking-widest text-acid">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-medium tracking-tight text-bone sm:text-4xl">
            {title}
            <span className="text-acid">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-7 text-bone/65">
            {blurb}
          </p>
        </FadeIn>
      </Container>

      <FadeIn>
        <div
          className={cn(
            'marquee-band mt-14 flex flex-col gap-6 overflow-hidden',
            '[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]',
          )}
          aria-label="Apex Podcast Network catalog"
        >
          <Marquee row={top} direction="ltr" />
          <Marquee row={bottom.length ? bottom : top} direction="rtl" />
        </div>
      </FadeIn>
    </div>
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
    <div
      className={cn(
        'marquee-track',
        direction === 'ltr' ? 'marquee-ltr' : 'marquee-rtl',
      )}
    >
      {doubled.map((show, i) => (
        <Tile key={`${show.slug}-${i}`} show={show} />
      ))}
    </div>
  )
}

function Tile({ show }: { show: Show }) {
  const isComing = show.status === 'coming-soon'
  const href = show.caseStudy ? `/case-studies/${show.slug}/` : `/network/#${show.slug}`
  return (
    <Link
      href={href}
      aria-label={
        show.caseStudy ? `Read the ${show.title} case study` : `See ${show.title} in the network catalog`
      }
      className="group flex w-48 shrink-0 flex-col items-center gap-3 rounded-2xl px-5 py-5 ring-1 ring-inset ring-transparent transition hover:bg-bone/[0.04] hover:ring-acid sm:w-52 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acid"
    >
      <span className="relative flex h-16 w-full items-center justify-center">
        {show.wordmark ? (
          <WordmarkSwap slug={show.wordmark} title={show.title} />
        ) : (
          <span
            className={cn(
              'font-display font-extrabold leading-none tracking-tight text-bone/90 transition group-hover:text-acid',
              'text-center text-[clamp(1.05rem,1.6vw,1.5rem)]',
            )}
          >
            {show.title}
          </span>
        )}
      </span>
      <span className="text-center text-[0.78rem] leading-tight font-medium text-bone/55 transition group-hover:text-bone">
        {show.title}
      </span>
      {isComing && (
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-bone/40 transition group-hover:text-acid/80">
          Coming Soon
        </span>
      )}
    </Link>
  )
}

/** Stacks the white and acid variants; the acid layer fades in on hover. */
function WordmarkSwap({ slug, title }: { slug: string; title: string }) {
  return (
    <span className="relative block h-full w-full">
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
