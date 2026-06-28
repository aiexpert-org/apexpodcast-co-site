'use client'

import { cn } from '@/lib/utils'
import { Container } from '@/components/ccm/container'
import { FadeIn } from '@/components/ccm/fade-in'
import { SCROLLER_SHOWS, type Show } from '@/lib/shows'

/**
 * Dark Logo Scroller. Ported back to the CCM ChurchLogos treatment:
 * a self-contained rounded card on ink, centered intro, two-row marquee
 * underneath. Wordmarks remain the Apex catalog (white-on-ink resting,
 * acid-on-ink on hover) so the data layer stays Apex while the visual
 * shell matches the CCM source-of-truth.
 *
 * - Rounded-4xl dark card sits inside page rhythm (mt-24/32/40).
 * - Centered eyebrow + h2 + blurb above the band.
 * - Two rows of show wordmarks drift in opposing directions on ink.
 * - Resting state is white-on-ink; hover swaps to acid-on-ink.
 * - Coming Soon shows render a small subtle eyebrow.
 * - Doubled track translated -50% for a seamless loop. Pauses on hover.
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
            'marquee-band mt-14 flex flex-col gap-4 overflow-hidden',
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
  return (
    <div
      className="group relative flex w-40 shrink-0 flex-col items-center justify-center gap-2.5 rounded-2xl px-4 py-3 ring-1 ring-inset ring-transparent transition hover:bg-bone/[0.04] hover:ring-acid/40 sm:w-44"
      aria-label={show.title}
    >
      {show.wordmark ? (
        <WordmarkSwap slug={show.wordmark} title={show.title} />
      ) : (
        <span
          className={cn(
            'font-display font-extrabold lowercase leading-none tracking-tighter text-bone/85 transition group-hover:text-acid',
            'text-[clamp(0.95rem,1.2vw,1.15rem)]',
          )}
        >
          {show.title}
        </span>
      )}
      <span className="text-center text-[0.7rem] font-medium leading-tight text-bone/55 group-hover:text-bone">
        {show.title}
      </span>
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
