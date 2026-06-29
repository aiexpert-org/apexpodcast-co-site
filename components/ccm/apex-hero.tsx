import { Container } from '@/components/ccm/container'
import { FadeIn } from '@/components/ccm/fade-in'
import { JoinWaitListButton } from '@/components/ccm/join-waitlist-button'
import { ButtonMarker } from '@/components/ccm/button-marker'

export function ApexHero() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <span className="mb-5 block font-display text-sm font-semibold tracking-wider text-[var(--color-cta)] uppercase">
          Apex Podcast Co
        </span>
        <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
          One conversation can change everything.
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          Apex produces podcasts for people with something real to say.
          Two co-founder producers. Three shows in the catalog. The work
          speaks for itself.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <JoinWaitListButton source="home-hero" />
          <ButtonMarker href="/discovery-call/" variant="ghost">
            Book a discovery call
          </ButtonMarker>
        </div>
      </FadeIn>
    </Container>
  )
}
