import { Container } from '@/components/ccm/container'
import { FadeIn } from '@/components/ccm/fade-in'
import { JoinWaitListButton } from '@/components/ccm/join-waitlist-button'
import { ButtonMarker } from '@/components/ccm/button-marker'
import { HeroMosaicBackground, HeroMosaicMobile } from '@/components/ccm/hero-mosaic'

/**
 * Home hero. Tailwind UI Studio template pattern: Container + FadeIn + serif
 * font-display headline + sub-paragraph + CTA cluster. CCM-style portfolio
 * mosaic background fills the hero with the three real show covers in a
 * staggered pattern, masked by a right-to-left bone gradient so the headline
 * and CTAs sit on a clean field while the catalog covers show through on the
 * right and warm up on hover.
 */
export function ApexHero() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Desktop: edge-to-edge mosaic behind the copy. */}
      <div className="hidden md:block">
        <HeroMosaicBackground />
      </div>

      {/* `pointer-events-none` lets the cursor reach the mosaic tiles behind
          the copy column so tiles in the right columns still warm up on hover.
          Interactive CTAs below re-enable pointer events on themselves. */}
      <Container className="pointer-events-none mt-24 pb-12 sm:mt-32 sm:pb-20 md:mt-56 lg:pb-28">
        <FadeIn className="relative z-10 max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            One conversation can change everything.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Apex produces podcasts for people with something real to say.
            Two co-founder producers. Three shows in the catalog. The work
            speaks for itself.
          </p>
          <div className="pointer-events-auto mt-10 flex flex-wrap items-center gap-6">
            <JoinWaitListButton source="home-hero" />
            <ButtonMarker href="/discovery-call/" variant="ghost">
              Book a discovery call
            </ButtonMarker>
          </div>
        </FadeIn>

        {/* Mobile-only mosaic, rendered below the hero text. */}
        <FadeIn className="mt-16 md:hidden">
          <HeroMosaicMobile />
        </FadeIn>
      </Container>
    </div>
  )
}
