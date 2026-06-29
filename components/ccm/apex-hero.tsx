import Image from 'next/image'

import { Container } from '@/components/ccm/container'
import { FadeIn } from '@/components/ccm/fade-in'
import { JoinWaitListButton } from '@/components/ccm/join-waitlist-button'
import { ButtonMarker } from '@/components/ccm/button-marker'

/**
 * ApexHero. CCM hero pattern, ported to Apex.
 *
 * Right side is a dense cover-art mosaic. Twenty tiles in a 5-column, 4-row
 * grid, edge-to-edge with a soft top fade. Each tile rests at low saturation;
 * hovering lights it to full color. Mobile drops to a 3-column, 3-row subset.
 *
 * No overlay card. The headline and strapline in the left column carry the
 * brand statement; the tiles are the product surface.
 */

const HERO_TILES: string[] = [
  '/covers/show-sweeter-after-difficulty.webp',
  '/covers/show-the-russ-laggan-podcast.webp',
  '/covers/show-winning-twice.webp',
  '/covers/show-the-apex-podcast.webp',
  '/covers/show-the-listener.webp',

  '/covers/show-producers-chair.webp',
  '/covers/show-album-one.webp',
  '/covers/show-the-anti-label.webp',
  '/covers/show-b-sides.webp',
  '/covers/show-one-note.webp',

  '/covers/show-reps.webp',
  '/covers/show-second-acts.webp',
  '/covers/show-the-comeback-mile.webp',
  '/covers/show-five-fingers.webp',
  '/covers/show-the-long-friendship.webp',

  '/covers/show-men-im-lucky-to-know.webp',
  '/covers/show-n-of-one.webp',
  '/covers/show-black-belt-at-40.webp',
  '/covers/show-basics.webp',
  '/covers/cover-04-pentatype.webp',
]

const MOBILE_TILES = HERO_TILES.slice(0, 9)

function CoverTile({ src, priority }: { src: string; priority?: boolean }) {
  return (
    <div className="group relative overflow-hidden rounded-md ring-1 ring-ink/5">
      <div className="relative aspect-square w-full">
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 1024px) 10vw, (min-width: 640px) 12vw, 22vw"
          className="object-cover opacity-65 grayscale-[0.55] transition duration-500 ease-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-[1.03]"
          priority={priority}
        />
      </div>
    </div>
  )
}

function HeroMosaic() {
  return (
    <div className="relative isolate w-full" aria-hidden="true">
      <div className="grid grid-cols-5 grid-rows-4 gap-1.5 sm:gap-2">
        {HERO_TILES.map((src, i) => (
          <CoverTile key={`${src}-${i}`} src={src} priority={i < 5} />
        ))}
      </div>
      {/* Soft fade at the top edge so the mosaic settles into the page. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16"
        style={{
          background:
            'linear-gradient(to bottom, var(--color-bone) 0%, rgba(250,248,243,0) 100%)',
        }}
      />
      {/* Soft fade at the bottom edge into the page below. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-10"
        style={{
          background:
            'linear-gradient(to top, var(--color-bone) 0%, rgba(250,248,243,0) 100%)',
        }}
      />
    </div>
  )
}

function HeroMosaicMobile() {
  return (
    <div className="relative w-full" aria-hidden="true">
      <div className="grid grid-cols-3 grid-rows-3 gap-1.5">
        {MOBILE_TILES.map((src, i) => (
          <CoverTile key={`m-${src}-${i}`} src={src} priority={i < 3} />
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-10"
        style={{
          background:
            'linear-gradient(to bottom, var(--color-bone) 0%, rgba(250,248,243,0) 100%)',
        }}
      />
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
              A boutique production company. Producers in the room on every
              session, an AI-native production stack behind them, a network
              around your show. The sound you would expect from a record label,
              applied to the long-form conversation.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <JoinWaitListButton source="home-hero" />
              <ButtonMarker href="/network/" variant="ghost">
                See the catalog
              </ButtonMarker>
            </div>
            <p className="mt-6 text-sm font-medium text-neutral-500">
              The <span className="text-neutral-700">Apex Podcast Network</span>.
              Producers in the room on every session.
            </p>
          </FadeIn>

          {/* Mosaic column */}
          <FadeIn>
            <div className="hidden md:block">
              <HeroMosaic />
            </div>
            <div className="md:hidden">
              <HeroMosaicMobile />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
