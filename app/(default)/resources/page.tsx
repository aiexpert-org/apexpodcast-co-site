import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import PageHero from '@/components/ui/page-hero'
import ContactBlock from '@/components/sections/contact-block'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'Liner Notes',
  description:
    'Producer notes, host and guest guides, and the thinking behind the Apex Podcast Network. The first releases are on the way.',
  alternates: { canonical: '/resources/' },
}

const topics: { title: string; blurb: ReactNode }[] = [
  {
    title: 'How to be a great podcast guest',
    blurb: 'The Pentatype guide to showing up ready, on tape.',
  },
  {
    title: 'What a producer actually does',
    blurb: 'The Green Room standard, and why a producer in the room changes the show.',
  },
  {
    title: 'Building an audience with the network',
    blurb: 'How every Apex show carries the others.',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Liner Notes"
        title={
          <>
            Producer notes, on the record<span className="text-acid">.</span>
          </>
        }
      >
        Liner Notes is where our producers write up what worked. Notes from the room, guides for
        hosts and guests, and the thinking behind the network. The first releases are on the way.
      </PageHero>

      <section className="section">
        <div className="container-apex">
          <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <RevealItem key={topic.title}>
                <div className="rounded-3xl bg-ink/[0.03] p-8 ring-1 ring-ink/10">
                  <p className="font-mono text-xs uppercase tracking-widest text-ink/45">
                    Coming soon
                  </p>
                  <h3 className="mt-3 h-sub text-ink">{topic.title}</h3>
                  <p className="mt-3 text-ink/70">{topic.blurb}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <ContactBlock source="resources">
        Want the first Liner Notes when they drop? Join the wait list and we will send them your way.
      </ContactBlock>
    </>
  )
}
