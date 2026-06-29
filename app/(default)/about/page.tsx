import type { Metadata } from 'next'
import { Container } from '@/components/ccm/container'
import { FadeIn } from '@/components/ccm/fade-in'
import { PageIntro } from '@/components/ccm/page-intro'
import { ContactBlock } from '@/components/ccm/contact-block'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Apex Podcast Co. Two founders, a producer in the room, and a network around every show.',
  alternates: { canonical: '/about/' },
}

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title="Apex exists for one reason.">
        <p>
          A weekly conversation is the highest-leverage hour a founder spends. Most podcasts waste it because nobody is making the conversation land, and nothing happens after it ships. We built Apex to fix both.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="max-w-3xl">
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Five new shows a quarter.
          </h2>
          <p className="mt-6 text-xl text-neutral-600">
            The cap is the point. It protects the standard. A producer is in the room because we are the producers and we are not chasing scale. The network grows because every show feeds it.
          </p>
        </FadeIn>
      </Container>

      <ContactBlock heading="Want a show that compounds?">
        <p>
          Save your spot and a producer will reach out personally.
        </p>
      </ContactBlock>
    </>
  )
}
