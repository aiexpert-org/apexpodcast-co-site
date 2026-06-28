import type { Metadata } from 'next'
import { Container } from '@/components/ccm/container'
import { FadeIn, FadeInStagger } from '@/components/ccm/fade-in'
import { Border } from '@/components/ccm/border'
import { PageIntro } from '@/components/ccm/page-intro'
import { ContactBlock } from '@/components/ccm/contact-block'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Apex Podcast Co is a boutique podcast production company for founders, operators, and experts. A producer in the room every session, a capped roster, an AI-native production stack, and the Pentatype method tuning each show to its host.',
  alternates: { canonical: '/about/' },
}

const COMMITMENTS = [
  {
    title: 'Producer in the room.',
    body:
      'Every session. We are on monitor, we drop markers, we intervene when the conversation goes flat, we write the debrief afterward. Two co-founder producers, focused on quality, every show.',
  },
  {
    title: 'Capped roster.',
    body:
      'Five new clients a month. That ceiling is the point. It is what protects the standard. Two co-founder producers, a deep AI stack behind them, holding the line on quality without padding the bundle with a junior team.',
  },
  {
    title: 'Network compounding.',
    body:
      'You ship into the Apex Podcast Network feed and the Debrief. Your show finds an audience because the audience already lives here. The block analysis audit every eight episodes keeps the body of work honest.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title="A boutique production company. A producer in the room.">
        <p>
          Apex Podcast Co is what a record label looks like when it is built for
          long-form conversation. We cap the roster, we keep a producer in the
          room, and we run every show against the Pentatype framework so it
          sounds like itself the first three seconds in.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Why boutique.
          </h2>
          <p className="mt-6 max-w-3xl text-xl text-neutral-600">
            Most podcast services scale by handing the work to whoever is free.
            We built Apex the other way. The roster is capped, the producer is
            on the session, and the network and the work are both built around
            that decision.
          </p>
        </FadeIn>

        <FadeInStagger faster className="mt-16">
          <ul role="list" className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {COMMITMENTS.map((item) => (
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

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="max-w-3xl">
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Focused on production.
          </h2>
          <p className="mt-6 text-xl text-neutral-600">
            Apex produces podcasts. That is the whole job. When a show
            conversation surfaces something outside production &mdash; a book,
            a website, a Knowledge Graph buildout, one-on-one coaching &mdash;
            we make a warm introduction to a trusted partner and stay focused
            on the show. The Apex Podcast Network and PodcastNetwork.org carry
            the distribution and the relationship layer around every release.
          </p>
        </FadeIn>
      </Container>

      <ContactBlock heading="Want to talk to a producer?">
        <p>
          Apex takes on a small number of new shows each quarter. Leave your
          info and we&rsquo;ll reach out personally when a spot opens.
        </p>
      </ContactBlock>
    </>
  )
}
