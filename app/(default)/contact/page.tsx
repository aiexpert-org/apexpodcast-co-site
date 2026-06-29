import type { Metadata } from 'next'

import { Container } from '@/components/ccm/container'
import { FadeIn } from '@/components/ccm/fade-in'
import { PageIntro } from '@/components/ccm/page-intro'
import { ApexPortrait } from '@/components/ccm/apex-portrait'
import { JoinWaitListButton } from '@/components/ccm/join-waitlist-button'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Save your spot. Five new shows a quarter. A producer reaches out personally when one opens.',
  alternates: { canonical: '/contact/' },
}

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Save your spot" title="Five new shows a quarter.">
        <p>
          Drop your info and a producer will reach out personally when a spot opens.
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
                The fastest way to reach a producer at Apex.
              </p>
              <div className="mt-6">
                <JoinWaitListButton source="contact-page" />
              </div>
            </div>
            <div>
              <ApexPortrait width={520} />

              <div className="mt-12 max-w-xl">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-neutral-950">
                  Prefer to write first?
                </h2>
                <p className="mt-4 text-base leading-7 text-neutral-600">
                  Email{' '}
                  <a
                    href={`mailto:${siteConfig.email.brett}`}
                    className="font-semibold text-neutral-950 underline decoration-[var(--color-cta)] underline-offset-4 hover:decoration-2"
                  >
                    {siteConfig.email.brett}
                  </a>
                  . For press,{' '}
                  <a
                    href={`mailto:${siteConfig.email.press}`}
                    className="font-semibold text-neutral-950 underline decoration-[var(--color-cta)] underline-offset-4 hover:decoration-2"
                  >
                    {siteConfig.email.press}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}
