import type { Metadata } from 'next'
import { Container } from '@/components/ccm/container'
import { FadeIn, FadeInStagger } from '@/components/ccm/fade-in'
import { Border } from '@/components/ccm/border'
import { PageIntro } from '@/components/ccm/page-intro'
import { ContactBlock } from '@/components/ccm/contact-block'

export const metadata: Metadata = {
  title: 'How We Work',
  description:
    'Three steps from the first call to a published episode you are proud of.',
  alternates: { canonical: '/how-we-work/' },
}

const STEPS = [
  {
    title: 'Tell us what you want to make.',
    body:
      'A twenty-minute call with a producer. We listen for the show that is actually trying to come out of you, and we tell you what that show would sound like in our hands.',
  },
  {
    title: 'Show up and record.',
    body:
      'An hour a week. A producer is on the line catching levels, marking the moments worth keeping, saving the questions you forgot to ask.',
  },
  {
    title: 'Publish and amplify.',
    body:
      'We edit, publish, cut for social, and place the episode inside the Apex catalog. The conversation you had once goes everywhere your audience already is.',
  },
]

export default function HowWeWorkPage() {
  return (
    <>
      <PageIntro eyebrow="How it works" title="Three steps. One producer in the room.">
        <p>
          From the first call to a published episode you are proud of.
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
          Save your spot and a producer will reach out.
        </p>
      </ContactBlock>
    </>
  )
}
