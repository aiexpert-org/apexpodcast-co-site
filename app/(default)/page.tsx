import type { Metadata } from 'next'

import { Container } from '@/components/ccm/container'
import { FadeIn, FadeInStagger } from '@/components/ccm/fade-in'
import { Border } from '@/components/ccm/border'
import { SectionIntro } from '@/components/ccm/section-intro'
import { ApexHero } from '@/components/ccm/apex-hero'
import { ContactBlock } from '@/components/ccm/contact-block'
import LogoScroller from '@/components/sections/logo-scroller'
import SelectedWork from '@/components/sections/selected-work'
import TierTeaser from '@/components/sections/tier-teaser'

export const metadata: Metadata = {
  title: 'Apex Podcast Co. Become the founder people listen to.',
  description:
    'Apex turns one hour of conversation a week into deals, hires, and partners. You record. We do the rest. Episode one in fourteen days.',
  alternates: { canonical: '/' },
}

const OUTCOMES = [
  {
    title: 'One hour a week. Compounding forever.',
    body:
      'Sixty minutes of recording becomes a published episode, a feed of cut-downs, and a network feature. The work you put in once keeps paying you back.',
  },
  {
    title: 'An audience that already lives here.',
    body:
      'Your show ships into a catalog of twenty-six productions that promote each other. You launch with reach, not into silence.',
  },
  {
    title: 'Producers who have done this before.',
    body:
      'Brett built the Pentatype. Randy ran podcast production at eXp Realty. The people in the room know what makes a conversation land.',
  },
]

export default function Home() {
  return (
    <>
      <ApexHero />

      <LogoScroller />

      <section aria-label="What an Apex show does for you">
        <SectionIntro
          eyebrow="What changes"
          title="An hour of recording. A year of compounding."
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            The conversation is the asset. We make sure the asset earns.
          </p>
        </SectionIntro>

        <Container className="mt-16">
          <FadeInStagger faster>
            <ul role="list" className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {OUTCOMES.map((item) => (
                <FadeIn as="li" key={item.title}>
                  <Border className="pt-8">
                    <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-neutral-950">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-neutral-600">
                      {item.body}
                    </p>
                  </Border>
                </FadeIn>
              ))}
            </ul>
          </FadeInStagger>
        </Container>
      </section>

      <div className="mt-24 sm:mt-32 lg:mt-40">
        <SelectedWork />
      </div>

      <div className="mt-24 sm:mt-32 lg:mt-40">
        <TierTeaser />
      </div>

      <ContactBlock heading="Become the founder people listen to.">
        <p>
          Five new shows a quarter. Save your spot and a producer will reach
          out personally.
        </p>
      </ContactBlock>
    </>
  )
}
