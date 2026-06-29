import type { Metadata } from 'next'
import { Container } from '@/components/ccm/container'
import { FadeIn, FadeInStagger } from '@/components/ccm/fade-in'
import { Border } from '@/components/ccm/border'
import { PageIntro } from '@/components/ccm/page-intro'
import { ContactBlock } from '@/components/ccm/contact-block'

export const metadata: Metadata = {
  title: 'How We Work',
  description:
    'You show up to record. We do the rest. Three steps from first call to live in your feed in fourteen days.',
  alternates: { canonical: '/how-we-work/' },
}

const STEPS = [
  {
    title: 'Tell us what you want to build.',
    body:
      'A twenty-minute call with a producer. We listen, ask what your audience needs to hear, and tell you what an Apex show would look like for you.',
  },
  {
    title: 'Show up and record.',
    body:
      'Sixty minutes a week. A producer is on the line catching levels, marking moments, saving the questions you forgot to ask.',
  },
  {
    title: 'Watch it compound.',
    body:
      'We edit, publish, cut for social, and swap guests with the rest of the Apex Podcast Network. Your hour becomes a feed, a clip set, and a stream of inbound.',
  },
]

export default function HowWeWorkPage() {
  return (
    <>
      <PageIntro eyebrow="How it works" title="You show up. We do the rest.">
        <p>
          Three steps from the first call to a published episode that earns its keep.
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

      <ContactBlock heading="Ready to record the first one?">
        <p>
          Five new shows a quarter. Save your spot and a producer will reach out.
        </p>
      </ContactBlock>
    </>
  )
}
