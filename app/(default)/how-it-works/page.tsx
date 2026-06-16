import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import PageHero from '@/components/ui/page-hero'
import StepList from '@/components/sections/step-list'
import ContactBlock from '@/components/sections/contact-block'
import { Reveal } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'From a conversation to a finished show. A producer in the room, the Pentatype method, and a place on the Apex Podcast Network.',
  alternates: { canonical: '/how-it-works/' },
}

const STEPS: { number: string; title: string; body: string }[] = [
  {
    number: '01',
    title: 'Pentatype',
    body: 'Before we record, you take the Pentatype assessment so we tune the show to how you actually communicate. The format follows you instead of forcing you into a mold.',
  },
  {
    number: '02',
    title: 'Pre-production',
    body: 'A producer maps the show with you: the premise, the arc, the segments. We find the show inside what you have already built.',
  },
  {
    number: '03',
    title: 'Record',
    body: 'You record live with a producer in the room, on every session. Markers, interventions, a clean conversation. The Green Room standard.',
  },
  {
    number: '04',
    title: 'Produce',
    body: 'We cut, mix, write the show notes, design the cover and clips, and package the full bundle of deliverables. You get a finished show, not a pile of raw files.',
  },
  {
    number: '05',
    title: 'Publish',
    body: 'Your show goes out on its own feed and onto the Apex Podcast Network, where every Apex show carries the others. One release, many doors.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            From a conversation to a finished show<span className="text-acid">.</span>
          </>
        }
      >
        You come on, our producer is in the room, and we cut, package, and publish. You
        get a finished show and a place on the network.
      </PageHero>

      <StepList
        heading="From a conversation to a finished show."
        intro="Simple and produced."
        steps={STEPS}
      />

      <section className="section">
        <div className="container-apex">
          <Reveal>
            <p className="eyebrow-acid">What you get</p>
            <h2 className="h-section text-ink">
              A producer in the room<span className="text-acid">.</span>
            </h2>
            <p className="lead mt-6 text-ink/75">
              Apex is a producer and a network. The producer makes the show good, and the
              network makes it travel.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactBlock source="how-it-works">
        Apex takes on a small number of new shows each cycle. Drop your name and what you
        want to launch, and a producer will reach out personally when a spot opens.
      </ContactBlock>
    </>
  )
}
