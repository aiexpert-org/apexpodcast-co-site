import { Container } from '@/components/ccm/container'
import { FadeIn } from '@/components/ccm/fade-in'
import { JoinWaitListButton } from '@/components/ccm/join-waitlist-button'
import { ButtonMarker } from '@/components/ccm/button-marker'

export function ApexHero() {
  return (
    <section aria-label="Introduction" className="overflow-hidden">
      <Container className="pb-16 sm:pb-24 lg:pb-32">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <span className="mb-6 block font-display text-sm font-semibold tracking-wider text-[var(--color-cta)] uppercase">
            Apex Podcast Co
          </span>
          <h1 className="font-display text-[2.75rem] leading-[1.05] font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl lg:text-[4.5rem] lg:leading-[1.05]">
            One conversation can change everything.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-neutral-600">
            Apex produces podcasts for people with something real to say.
            Two co-founder producers. Three shows in the catalog. The work
            speaks for itself.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <JoinWaitListButton source="home-hero" />
            <ButtonMarker href="/discovery-call/" variant="ghost">
              Book a discovery call
            </ButtonMarker>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
