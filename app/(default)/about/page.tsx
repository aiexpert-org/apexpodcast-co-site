import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import ProducerFrame from '@/components/sections/producer-frame'
import ClosingCta from '@/components/sections/closing-cta'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Apex Podcast Co is a 50/50 partnership between Brett K. Moore and Randy Highsmith. Two producers, full time on Apex, a producer in the room every session.',
  alternates: { canonical: '/about/' },
}

function ProducerCard({
  initials,
  name,
  body,
}: {
  initials: string
  name: string
  body: string
}) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row">
      {/* Headshot placeholder (blocker 1.4: real headshots TBD by Brett + Randy) */}
      <div
        className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-ink/15 bg-ink"
        aria-hidden="true"
      >
        <span className="font-display text-2xl text-acid">{initials}</span>
      </div>
      <div>
        <h2 className="font-display text-2xl text-ink">{name}</h2>
        <p className="mt-4 max-w-2xl text-ink/70">{body}</p>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* Hero. Rendered statically (above the fold) so it does not delay LCP. */}
      <section className="bg-ink text-bone">
        <div className="container-apex pb-20 pt-36 md:pb-24 md:pt-44">
          <p className="eyebrow-acid">About</p>
          <h1 className="display mt-6 max-w-4xl text-bone">
            Two producers. One studio. A real partnership
            <span className="text-acid">.</span>
          </h1>
          <p className="lead mt-7 max-w-3xl text-bone/70">
            Apex Podcast Co is a 50/50 partnership between Brett K. Moore and Randy Highsmith. Two
            producers, full time on Apex. No junior editor in the loop until the math says we need
            one. The work and the network are both built around that decision.
          </p>
        </div>
      </section>

      {/* The partnership */}
      <section className="section bg-bone">
        <div className="container-apex max-w-3xl">
          <Reveal>
            <p className="eyebrow">The partnership</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg text-ink/80">
              Brett brought the Pentatype methodology and the producer instinct. Randy brought the eXp
              Realty inroad, the Big Agent Meeting background, and a decade of leadership conversation
              craft. The two of us decided to run Apex as one studio with two named producers rather
              than as a marketing brand wrapped around contractors. The capacity math holds at thirty
              active Managed clients across both of us. That ceiling is what makes the
              producer-in-the-room promise real.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Brett + Randy */}
      <section className="section bg-bone pt-0">
        <div className="container-apex">
          <div className="rule" />
          <div className="space-y-14 pt-14">
            <Reveal>
              <ProducerCard
                initials="b."
                name="Brett K. Moore."
                body="Producer. Author of the Pentatype communication-style methodology at pentatype.com. Operator inside Brett K Moore HQ, which runs Apex Podcast Co, PodcastNetwork.org, Legacy Publishing, Give Web Design, The Brand Spine, AI Expert, and the Brett K Moore personal brand. Takes the call when the conversation is about voice, framing, executive narrative, authors, and coaching-adjacent shows."
              />
            </Reveal>
            <Reveal>
              <ProducerCard
                initials="r."
                name="Randy Highsmith."
                body="Producer. Host of Sweeter After Difficulty (APX-002). Runs the eXp Realty side of the Apex network: the inroad to eXp leadership, the high-producing agent conversations, the Big Agent Meeting alumni. Takes the call when the conversation is real estate, eXp adjacent, or leadership-and-systems shaped."
              />
            </Reveal>
          </div>
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
                We hold the producer-in-the-room promise to thirty active Managed clients across both of
                us. When the client count crosses twenty-five active, we add an editor to take the export
                and transcript work off the producer&rsquo;s plate so we stay producers.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Producer-as-artist frame (shared) */}
      <ProducerFrame />

      {/* The wider Brett K Moore HQ */}
      <section className="section bg-bone pt-0">
        <div className="container-apex max-w-3xl">
          <Reveal>
            <p className="eyebrow">Inside a real operating company</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg text-ink/80">
              Apex is one of seven businesses inside Brett K Moore HQ. The others are Brett&rsquo;s personal
              brand, PodcastNetwork.org, Legacy Publishing, Give Web Design, The Brand Spine, and AI
              Expert. The cross-business referral pact means an Apex client who wants a book gets a warm
              introduction to Legacy Publishing, an Apex client who wants a Knowledge Graph buildout gets
              a warm introduction to AI Expert, and so on. The benefit is that we can stay focused on
              producing without trying to be every other thing.
            </p>
          </Reveal>
        </div>
      </section>

      <ClosingCta headline="Want to talk to one of us?" />
    </>
  )
}
