import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import ProducerFrame from '@/components/sections/producer-frame'
import ClosingCta from '@/components/sections/closing-cta'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Apex Podcast Co is a boutique podcast production company for founders, operators, and experts. A producer in the room every session, a capped roster, and the Pentatype method tuning each show to its host.',
  alternates: { canonical: '/about/' },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero. Rendered statically (above the fold) so it does not delay LCP. */}
      <section className="bg-ink text-bone">
        <div className="container-apex pb-20 pt-36 md:pb-24 md:pt-44">
          <p className="eyebrow-acid">About</p>
          <h1 className="display mt-6 max-w-4xl text-bone">
            A boutique production company. A producer in the room
            <span className="text-acid">.</span>
          </h1>
          <p className="lead mt-7 max-w-3xl text-bone/70">
            Apex Podcast Co is a boutique podcast production company for founders, operators, and
            experts who already have something to say. We cap the roster at five new clients a month.
            That ceiling is the point. It is what keeps a real producer in the room on every session.
          </p>
        </div>
      </section>

      {/* The company */}
      <section className="section bg-bone">
        <div className="container-apex max-w-3xl">
          <Reveal>
            <p className="eyebrow">Why boutique</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg text-ink/80">
              Most podcast services scale by handing the work to whoever is free. We built Apex the
              other way. The roster is capped, the producer is on the session, and no junior editor
              steps into the room until the math says we need one. The work and the network are both
              built around that decision.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="section bg-ink text-bone">
        <div className="container-apex">
          <Reveal>
            <p className="eyebrow-acid">How we work</p>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <Reveal delay={0}>
              <p className="text-bone/75">
                A producer is in the room every session. That is the line. We do not delegate the
                recording to an editor or to a system. We are on monitor, we drop markers, we intervene
                when the conversation goes flat, and we write the debrief afterward.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-bone/75">
                We use the Pentatype assessment to tune every show to its host before the first episode.
                We use the Apex Podcast Network feed and The Debrief to compound reach across the cohort.
                We use the block-analysis audit every eight episodes to keep the show honest as a body of
                work.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-bone/75">
                We hold the producer-in-the-room promise to a capped roster of active shows. When the
                client count climbs, we add an editor to take the export and transcript work off the
                producer&rsquo;s plate so we stay producers.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Producer-as-artist frame (shared) */}
      <ProducerFrame />

      {/* The wider network */}
      <section className="section bg-bone pt-0">
        <div className="container-apex max-w-3xl">
          <Reveal>
            <p className="eyebrow">Focused on production</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg text-ink/80">
              Apex produces podcasts. That is the whole job. When a show conversation surfaces
              something outside production, a book, a website, a Knowledge Graph buildout, or
              one-on-one coaching, we make a warm introduction to a trusted partner and stay focused on
              the show. The Apex Podcast Network and PodcastNetwork.org carry the distribution and the
              relationship layer around every release.
            </p>
          </Reveal>
        </div>
      </section>

      <ClosingCta headline="Want to talk to a producer?" />
    </>
  )
}
