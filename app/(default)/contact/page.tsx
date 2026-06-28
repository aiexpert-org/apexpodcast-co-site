import type { Metadata } from 'next'

import { Container } from '@/components/ccm/container'
import { FadeIn } from '@/components/ccm/fade-in'
import { Border } from '@/components/ccm/border'
import { PageIntro } from '@/components/ccm/page-intro'
import { ApexPortrait } from '@/components/ccm/apex-portrait'
import { JoinWaitListButton } from '@/components/ccm/join-waitlist-button'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Apex Podcast Co takes on a small number of new shows each quarter. Join the wait list and a producer will reach out personally when a spot opens.',
  alternates: { canonical: '/contact/' },
}

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Join the wait list" title="Save your spot.">
        <p>
          Apex Podcast Co takes on a small number of new shows each quarter.
          Drop your info and a producer will reach out personally when a spot
          opens.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-20 lg:mt-24">
        <FadeIn>
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-[1fr_2fr] lg:gap-x-16">
            <div className="rounded-3xl bg-neutral-50 p-8 ring-1 ring-neutral-900/10">
              <h2 className="font-display text-xl font-semibold tracking-tight text-neutral-950">
                Save your spot
              </h2>
              <p className="mt-3 text-base leading-7 text-neutral-600">
                The fastest way to reach a producer at Apex. We&rsquo;ll email
                you back personally.
              </p>
              <div className="mt-6">
                <JoinWaitListButton source="contact-page" />
              </div>
            </div>
            <div>
              <ApexPortrait width={520} />

              <div className="mt-12 max-w-xl">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-neutral-950">
                  How it works.
                </h2>
                <p className="mt-4 text-base leading-7 text-neutral-600">
                  You join the wait list. A producer reads your info and emails
                  you within a few days. We schedule a 20-minute call. We ask
                  what you are building, we tell you what an Apex show would
                  look like for you, and we decide together whether the fit is
                  right.
                </p>

                <Border className="mt-10 pt-8">
                  <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-neutral-950">
                    Prefer email?
                  </h3>
                  <p className="mt-3 text-base leading-7 text-neutral-600">
                    Drop a line to{' '}
                    <a
                      href={`mailto:${siteConfig.email.brett}`}
                      className="font-semibold text-neutral-950 underline decoration-[var(--color-cta)] underline-offset-4 hover:decoration-2"
                    >
                      {siteConfig.email.brett}
                    </a>
                    . For press, write{' '}
                    <a
                      href={`mailto:${siteConfig.email.press}`}
                      className="font-semibold text-neutral-950 underline decoration-[var(--color-cta)] underline-offset-4 hover:decoration-2"
                    >
                      {siteConfig.email.press}
                    </a>
                    .
                  </p>
                </Border>

                <Border className="mt-10 pt-8">
                  <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-neutral-950">
                    What you&rsquo;re joining
                  </h3>
                  <p className="mt-3 text-base leading-7 text-neutral-600">
                    A boutique production company with a capped roster. A
                    producer in the room while you find your voice, fading to
                    strategy and network review as you grow. The sound you
                    would expect from a record label, applied to the long-form
                    conversation.
                  </p>
                </Border>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}
