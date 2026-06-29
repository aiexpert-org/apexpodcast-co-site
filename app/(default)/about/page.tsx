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
      <PageIntro eyebrow="About" title="We make podcasts that mean something.">
        <p>
          A real conversation, recorded and shaped well, is one of the best things a person with something to say can put into the world. Most podcasts squander the hour because nobody in the room is treating it as craft. We built Apex to treat it as craft.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="max-w-3xl">
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            A small number of shows. On purpose.
          </h2>
          <p className="mt-6 text-xl text-neutral-600">
            The cap is the point. It protects the standard. The producers in the room are the producers because we are the producers, and we are not chasing scale. The network grows because every show on it earned its place.
          </p>
        </FadeIn>
      </Container>

      <ContactBlock heading="Have something real to say?">
        <p>
          Save your spot and a producer will reach out personally.
        </p>
      </ContactBlock>
    </>
  )
}
