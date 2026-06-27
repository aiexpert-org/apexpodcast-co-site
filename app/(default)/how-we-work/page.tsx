import type { Metadata } from 'next'
import { Container } from '@/components/ccm/container'
import { FadeIn, FadeInStagger } from '@/components/ccm/fade-in'
import { Border } from '@/components/ccm/border'
import { PageIntro } from '@/components/ccm/page-intro'
import { ContactBlock } from '@/components/ccm/contact-block'

export const metadata: Metadata = {
  title: 'How We Work',
  description:
    'Three steps. The Pentatype tunes the show to the host. A producer sits in the room on every session. The Apex Podcast Network carries the release.',
  alternates: { canonical: '/how-we-work/' },
}

const STEPS = [
  {
    title: 'Tune the show to the host.',
    body:
      'Before the first session, every host takes the Pentatype assessment. Connection, Structure, Conviction, Discovery, Meaning. The format follows the way you actually process the world. The show fits you instead of asking you to fit the show.',
  },
  {
    title: 'A producer sits in the room.',
    body:
      'Every session has a producer on the line. Markers, redirects, a question saved for the right moment, the kindness to let a long pause breathe. The result is a conversation that holds together at minute thirty, not just at minute three.',
  },
  {
    title: 'The network carries the release.',
    body:
      'Every Apex show ships onto the Apex Podcast Network feed, where each release carries the others. One conversation, several doors in. The network compounds because the catalog compounds.',
  },
]

export default function HowWeWorkPage() {
  return (
    <>
      <PageIntro eyebrow="How we work" title="Three steps. Nothing extra.">
        <p>
          The craft, not the business model. The work, not the pitch. What
          actually happens between a first conversation and a published episode.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeInStagger faster>
          <ul role="list" className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {STEPS.map((item) => (
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

      <ContactBlock heading="Ready to start?">
        <p>
          Apex takes on a small number of new shows each quarter. Leave your
          info and we&rsquo;ll reach out personally when a spot opens.
        </p>
      </ContactBlock>
    </>
  )
}
