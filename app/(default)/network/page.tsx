import type { Metadata } from 'next'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'
import CaseStudyCard from '@/components/ui/case-study-card'
import CtaLink from '@/components/ui/cta-link'
import DebriefSignupForm from '@/components/forms/debrief-signup-form'
import ClosingCta from '@/components/sections/closing-cta'
import Link from '@/components/ui/smart-link'
import { caseStudies } from '@/lib/case-studies'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Network',
  description:
    'The Apex Podcast Network is the feed and the brand every Apex show publishes under. The Debrief newsletter, The Apex Podcast, the cohort, and the one-observation-three-deliverables pattern.',
  alternates: { canonical: '/network/' },
}

const threeJobs = [
  {
    title: 'The per-episode debrief.',
    body: 'The written debrief the artist receives after every release. The producer’s read on what worked, on tape.',
  },
  {
    title: 'The templated social clip.',
    body: 'The producer-noted quote becomes the centerpiece of the social rollout for that release.',
  },
  {
    title: 'The Debrief newsletter.',
    body: 'A candidate seat in the next issue. The cross-network promotion is anchored by a real moment from the session.',
  },
]

export default function NetworkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-bone">
        <div className="container-apex pb-20 pt-36 md:pb-24 md:pt-44">
          <p className="eyebrow-acid">The network.</p>
          <h1 className="display mt-6 max-w-4xl text-bone">
            The roster is the network
            <span className="text-acid">.</span>
          </h1>
          <p className="lead mt-7 max-w-3xl text-bone/70">
            Three names, used carefully. Apex Podcast Co is the production company. The Apex Podcast
            Network is the feed and the brand every Apex show publishes under. PodcastNetwork.org is a
            sibling property that holds the relationship-engine IP, bundled into Apex as a perk. The
            network compounds because the work compounds.
          </p>
        </div>
      </section>

      {/* The Debrief */}
      <section className="section bg-bone">
        <div className="container-apex grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">The newsletter.</p>
              <h2 className="h-section mt-4 text-ink">The Debrief.</h2>
              <p className="mt-6 max-w-xl text-ink/75">
                Notable quotes from the week’s cohort recordings. Producer notes from inside the
                sessions. Episodes worth your time. We send it when there is something to send. Every
                active Apex show is in the rotation.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-ink/12 p-7 md:p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-ink/65">
                  Subscribe to The Debrief
                </p>
                <div className="mt-5">
                  <DebriefSignupForm source="debrief_network" tone="light" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Apex Podcast (the network’s own show) */}
      <section className="section bg-ink text-bone">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow-acid">The Apex Podcast Network’s own show.</p>
              <h2 className="h-section mt-4 text-bone">The Apex Podcast.</h2>
              <p className="mt-6 text-bone/75">
                The public face of the Apex Podcast Network feed. Every week, our producers sit down
                with an owner, operator, or leader and find the show inside what they have already
                built. Listening is free. Coming on is free. Episode 001, Pentatype Intro, shipped
                2026-06-02.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CtaLink href="/" variant="primary" arrow>
                  Hear it on The Apex Podcast
                </CtaLink>
                <CtaLink href={siteConfig.transistorUrl} variant="ghost-dark">
                  Subscribe on Transistor
                </CtaLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The cohort */}
      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow">Who is in the catalog right now.</h2>
          </Reveal>
          <RevealStagger className="mt-10 grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <RevealItem key={study.slug} className="flex">
                <CaseStudyCard study={study} className="w-full" />
              </RevealItem>
            ))}
          </RevealStagger>
          <Reveal>
            <CtaLink href="/work/" variant="ghost-light" className="mt-10">
              See the work
            </CtaLink>
          </Reveal>
        </div>
      </section>

      {/* One observation, three deliverables */}
      <section className="section bg-ink text-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow-acid">What producer attention looks like, on the page.</h2>
            <p className="mt-6 max-w-2xl text-bone/75">
              Every recorded episode produces one notable quote, surfaced by the producer in the room.
              That single observation does three jobs.
            </p>
          </Reveal>
          <RevealStagger className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-bone/10 bg-bone/10 md:grid-cols-3">
            {threeJobs.map((job, i) => (
              <RevealItem key={job.title} className="bg-ink p-8">
                <span className="catalog text-acid" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-lg text-bone">{job.title}</h3>
                <p className="mt-2 text-bone/70">{job.body}</p>
              </RevealItem>
            ))}
          </RevealStagger>
          <Reveal>
            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-bone/55">
              One observation. Three deliverables. Producer attention made visible.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The 90/10 split */}
      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="eyebrow">The ad math.</h2>
              <p className="mt-5 text-ink/75">
                The Apex Podcast Network feed runs dynamic ad insertion when a sponsor fits. Ninety
                percent of that revenue goes to the show. Ten percent funds the affiliate program. The
                math is one of the reasons the network is real.
              </p>
              <Link
                href="/partners/"
                className="mt-5 inline-flex items-center font-mono text-xs uppercase tracking-widest text-ink underline decoration-acid underline-offset-4 hover:text-ink/70"
              >
                See how the partner program works
                <span className="ml-2" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCta headline="Want a seat in the catalog?" />
    </>
  )
}
