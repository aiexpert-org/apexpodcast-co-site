import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/ccm/container'
import { FadeIn } from '@/components/ccm/fade-in'
import { JoinWaitListButton } from '@/components/ccm/join-waitlist-button'
import { ButtonMarker } from '@/components/ccm/button-marker'
import { FLAGSHIP_SHOWS, ESTABLISHED_SHOWS, type Show } from '@/lib/shows'

/**
 * ApexHero — CCM hero pattern (MicheleHero), one-for-one. The CCM hero
 * overlays a portrait on a 3x3 grid of organization logo panels. Apex
 * substitutes a 3x3 grid of show cover tiles + a central catalog identity card
 * (faceless rule: no founder portrait). Same structural composition: copy
 * column left, photo-over-grid right; mobile stacks the card on top with a
 * 3x2 grid below.
 *
 * Tile hover: muted grayscale at rest, full color on hover, with the tile
 * linking into the show's case study (when available).
 */
function CoverPanel({ show }: { show: Show }) {
  const Inner = (
    <div className="group flex h-full items-center justify-center rounded-xl border border-neutral-200/80 bg-bone/70 p-2 transition duration-300 hover:border-[var(--color-cta)] hover:bg-bone hover:shadow-md hover:shadow-[var(--color-cta)]/10">
      {show.cover ? (
        <span className="relative block aspect-square w-full overflow-hidden rounded-md">
          <Image
            src={show.cover}
            alt={show.title}
            fill
            sizes="160px"
            className="object-cover opacity-60 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
          />
        </span>
      ) : (
        <span className="text-center font-display text-[0.72rem] leading-tight font-semibold tracking-tight text-neutral-300 transition duration-300 group-hover:text-[var(--color-cta)]">
          {show.title}
        </span>
      )}
    </div>
  )

  if (show.caseStudy) {
    return (
      <Link
        href={`/case-studies/${show.slug}/`}
        aria-label={`Open the ${show.title} case study`}
        className="block h-full"
      >
        {Inner}
      </Link>
    )
  }
  return Inner
}

const HERO_SHOWS: Show[] = [
  // Anchor with the flagship trio in the corners, fill the rest with
  // established Transistor shows. 3x3 = 9 panels.
  FLAGSHIP_SHOWS[0],
  ESTABLISHED_SHOWS[0],
  FLAGSHIP_SHOWS[1],
  ESTABLISHED_SHOWS[1],
  // Center tile is hidden by the catalog card overlay; placeholder anyway so
  // the grid keeps its rhythm and screen readers see it.
  ESTABLISHED_SHOWS[2],
  ESTABLISHED_SHOWS[3],
  FLAGSHIP_SHOWS[2],
  ESTABLISHED_SHOWS[4],
  ESTABLISHED_SHOWS[5],
]

const MOBILE_SHOWS: Show[] = [
  FLAGSHIP_SHOWS[0],
  FLAGSHIP_SHOWS[1],
  FLAGSHIP_SHOWS[2],
  ESTABLISHED_SHOWS[0],
  ESTABLISHED_SHOWS[1],
  ESTABLISHED_SHOWS[2],
]

function CatalogCard() {
  return (
    <div className="relative aspect-[5/7] overflow-hidden rounded-3xl bg-[var(--color-acid)] shadow-2xl ring-1 ring-neutral-900/10">
      <div className="absolute inset-0 flex flex-col justify-between p-6 text-[var(--color-ink)]">
        <div className="font-mono text-xs tracking-widest uppercase">
          Apex Podcast Co
        </div>
        <div>
          <div className="font-display text-3xl leading-[1.05] font-semibold tracking-tight">
            Producers in the room.
          </div>
          <div className="mt-3 font-mono text-[0.6875rem] tracking-widest uppercase">
            Est. 2026 · Indianapolis
          </div>
        </div>
      </div>
    </div>
  )
}

export function ApexHero() {
  return (
    <section aria-label="Introduction" className="overflow-hidden">
      <Container className="pb-12 sm:pb-16 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          {/* Copy column */}
          <FadeIn className="max-w-2xl">
            <span className="mb-5 block font-display text-sm font-semibold tracking-wider text-[var(--color-cta)] uppercase">
              Apex Podcast Co
            </span>
            <h1 className="font-display text-[2.75rem] leading-[1.05] font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl lg:text-[3.75rem] lg:leading-[1.08]">
              Producers for serious artists, founders, and operators.
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-neutral-600">
              A boutique production company. A producer in the room on every
              session. A network around your show. The sound you would expect
              from a record label, applied to the long-form conversation.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <JoinWaitListButton source="home-hero" />
              <ButtonMarker href="/network/" variant="ghost">
                See the catalog
              </ButtonMarker>
            </div>
            <p className="mt-6 text-sm font-medium text-neutral-500">
              The <span className="text-neutral-700">Apex Podcast Network</span>{' '}
              &mdash; a producer in the room on every session.
            </p>
          </FadeIn>

          {/* Catalog card overlaid over the show cover grid */}
          <FadeIn>
            {/* Desktop / tablet: card floats over a 3x3 cover wall */}
            <div className="relative mx-auto hidden aspect-[4/5] w-full max-w-md md:block lg:mr-0 lg:ml-auto">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3" aria-hidden="true">
                {HERO_SHOWS.map((show, i) => (
                  <CoverPanel key={`${show.slug}-${i}`} show={show} />
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 z-20 w-[62%] -translate-x-1/2 -translate-y-1/2">
                <CatalogCard />
              </div>
            </div>

            {/* Mobile: catalog card on top, cover grid below */}
            <div className="md:hidden">
              <div className="mx-auto w-full max-w-[15rem]">
                <CatalogCard />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2.5" aria-hidden="true">
                {MOBILE_SHOWS.map((show, i) => (
                  <CoverPanel key={`m-${show.slug}-${i}`} show={show} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
