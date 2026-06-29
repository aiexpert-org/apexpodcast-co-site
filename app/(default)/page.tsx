import type { Metadata } from 'next'

import { Container } from '@/components/ccm/container'
import { FadeIn, FadeInStagger } from '@/components/ccm/fade-in'
import { Border } from '@/components/ccm/border'
import { SectionIntro } from '@/components/ccm/section-intro'
import { ApexHero } from '@/components/ccm/apex-hero'
import { ContactBlock } from '@/components/ccm/contact-block'
import LogoScroller from '@/components/sections/logo-scroller'
import SelectedWork from '@/components/sections/selected-work'

export const metadata: Metadata = {
  title: 'Apex Podcast Co. The podcast you’ve been meaning to make.',
  description:
    'Creative producers for people with something real to say. Show up for the conversation. We hold the craft. Episode one in fourteen days.',
  alternates: { canonical: '/' },
}

const OUTCOMES = [
  {
    title: 'The show sounds like you.',
    body:
      'We tune the show to your voice before we run a single tape. What you say on the record reads as you, in the form your audience needs to hear it.',
  },
  {
    title: 'You ship into company, not silence.',
    body:
      'Your show enters a catalog of Apex productions that promote each other. You launch with a room of listeners already in the seats.',
  },
  {
    title: 'The producers in the room give a damn.',
    body:
      'Brett and Randy run every session. The same two people who shape the show are the ones with you when you record. No assistant tier. No handoff.',
  },
]

export default function Home() {
  return (
    <>
      <ApexHero />

      <LogoScroller />

      <section aria-label="What changes when a producer cares about the craft">
        <SectionIntro
          eyebrow="What changes"
          title="An hour. Made to matter."
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            Three things shift the moment a producer who gives a damn sits in
            the chair with you.
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

      <ContactBlock heading="Make the show you’ve been meaning to make.">
        <p>
          A small number of new shows each quarter. Save your spot and a
          producer will reach out personally.
        </p>
      </ContactBlock>
    </>
  )
}
