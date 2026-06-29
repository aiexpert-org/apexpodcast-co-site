import type { Metadata } from 'next'
import PageHero from '@/components/ui/page-hero'
import ContactBlock from '@/components/sections/contact-block'
import JoinWaitlistButton from '@/components/ui/join-waitlist'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'Subscription',
  description:
    'Four ways in. The Prepisode at $997, Your Weekly Show at $2,997 per 28-day cycle, Apex Podcast Network at $997 per cycle, and the Multi-Tenant Pipeline License at $2,997 a month. The PREP system, bundled or modular.',
  alternates: { canonical: '/subscription/' },
}

type Plan = {
  name: string
  price: string
  period: string
  tagline: string
  featured?: boolean
}

const PLANS: Plan[] = [
  {
    name: 'The Prepisode',
    price: '$997',
    period: 'one time',
    tagline:
      'The gateway. One produced episode through the full PREP system, so you feel the Apex standard before you commit to a cadence.',
  },
  {
    name: 'Your Weekly Show',
    price: '$2,997',
    period: 'per 28-day cycle',
    tagline:
      'The full PREP system run every cycle. A producer in the room every session, the bundle of deliverables, and a place on the network.',
    featured: true,
  },
  {
    name: 'Apex Podcast Network',
    price: '$997',
    period: 'per 28-day cycle',
    tagline:
      'Promote only. For podcast owners who already produce their own show and want the network amplification on top.',
  },
  {
    name: 'Pipeline License',
    price: '$2,997',
    period: 'per month',
    tagline:
      'Run the Apex pipeline under your own brand. Multi-tenant, for operators who want the production engine.',
  },
]

const INCLUDED: { title: string; body: string }[] = [
  {
    title: 'The produced episode',
    body: 'Recorded live with a producer in the room, cut and mixed to the Apex standard.',
  },
  {
    title: 'Show notes and chapters',
    body: 'Written show notes, timestamps, and the metadata your feed needs to get found.',
  },
  {
    title: 'Cover art and clips',
    body: 'Album-grade cover art and a set of social clips pulled from the moments that worked.',
  },
  {
    title: 'The Debrief',
    body: 'A written debrief after every release. The producer’s read on what landed, on the record.',
  },
  {
    title: 'Network distribution',
    body: 'A place on the Apex Podcast Network feed, where every Apex show carries the others.',
  },
  {
    title: 'Pentatype mapping',
    body: 'The assessment that tunes the show to how you actually communicate, before we ever record.',
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What does a producer in the room actually mean?',
    a: 'A real producer is on every session. Markers, interventions, a clean conversation. The Green Room standard, not an editor handed a file after the fact.',
  },
  {
    q: 'Is there a contract?',
    a: 'Your Weekly Show runs per 28-day cycle, cancel anytime before the next cycle. The Prepisode is a one-time gateway with a credit toward Weekly Show inside the ninety-day window.',
  },
  {
    q: 'Who owns the show?',
    a: 'You do. The feed, the files, the audience. Apex produces and distributes; the show is yours.',
  },
]

function PriceCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={
        plan.featured
          ? 'flex flex-col rounded-3xl bg-ink p-10 text-bone shadow-xl ring-1 ring-ink'
          : 'flex flex-col rounded-3xl bg-bone p-10 text-ink shadow-sm ring-1 ring-ink/10'
      }
    >
      <p
        className={
          plan.featured
            ? 'font-mono text-xs uppercase tracking-widest text-acid'
            : 'font-mono text-xs uppercase tracking-widest text-ink/50'
        }
      >
        {plan.name}
      </p>
      <div className="mt-5 flex items-end gap-2">
        <span className="font-display text-5xl tracking-tighter">{plan.price}</span>
        <span className={plan.featured ? 'mb-1 text-sm text-bone/60' : 'mb-1 text-sm text-ink/55'}>
          {plan.period}
        </span>
      </div>
      <p className={plan.featured ? 'mt-5 flex-1 text-bone/75' : 'mt-5 flex-1 text-ink/70'}>
        {plan.tagline}
      </p>
      <div className="mt-8">
        <JoinWaitlistButton
          source={`subscription-${plan.name}`}
          tone={plan.featured ? 'dark' : 'light'}
          label="Join the wait list"
          className="w-full"
        />
      </div>
    </div>
  )
}

export default function SubscriptionPage() {
  return (
    <>
      <PageHero
        eyebrow="The offer."
        title={
          <>
            The PREP system, bundled, modular, or licensed
            <span className="text-acid">.</span>
          </>
        }
      >
        Four ways in. Run one episode through the full PREP system, run a weekly show with the
        bundle, take just the Promote phase as a standalone, or license the whole pipeline under
        your own brand.
      </PageHero>

      {/* Plans */}
      <section className="section">
        <div className="container-apex">
          <RevealStagger className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {PLANS.map((plan) => (
              <RevealItem key={plan.name} className="flex">
                <div className="w-full">
                  <PriceCard plan={plan} />
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* What's included */}
      <section className="section pt-0">
        <div className="container-apex">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow-acid">What you get every cycle</p>
            <h2 className="mt-4 h-section text-ink">
              One show. The full bundle
              <span className="text-acid">.</span>
            </h2>
          </Reveal>
          <RevealStagger className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item) => (
              <RevealItem key={item.title}>
                <div className="border-t border-ink/15 pt-6">
                  <h3 className="font-display text-xl tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-3 text-ink/70">{item.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="section pt-0">
        <div className="container-apex max-w-3xl">
          <Reveal className="mb-10">
            <p className="eyebrow-acid">Questions</p>
            <h2 className="mt-4 h-section text-ink">
              The honest answers
              <span className="text-acid">.</span>
            </h2>
          </Reveal>
          <dl className="divide-y divide-ink/10">
            {FAQS.map((faq) => (
              <Reveal as="div" key={faq.q} className="py-6">
                <dt className="font-display text-lg tracking-tight text-ink">{faq.q}</dt>
                <dd className="mt-3 text-ink/70">{faq.a}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <ContactBlock source="subscription">
        <p>
          Tell us what you want to launch. A producer will reach out by email when a spot opens, and
          walk you through which way in fits.
        </p>
      </ContactBlock>
    </>
  )
}
