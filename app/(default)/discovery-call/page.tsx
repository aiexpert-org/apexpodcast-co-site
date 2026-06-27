import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import Link from '@/components/ui/smart-link'
import ClosingCta from '@/components/sections/closing-cta'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Discovery Call',
  description:
    'A 20-minute call with a producer. We ask what you are building. We tell you what an Apex show would look like for you. No pitch deck, no obligation.',
  alternates: { canonical: '/discovery-call/' },
}

/**
 * Discovery booking page. The frame is the 20-minute conversation with a
 * producer. The booking embed below is a Google Calendar appointment-schedule
 * embed; the embed URL is a placeholder pending Brett’s GCal scheduler URL.
 * Email + contact-form fallback wired underneath so the page never dead-ends.
 */
export default function DiscoveryCallPage() {
  // Placeholder. Replace with the production GCal appointment-schedule embed URL
  // (the one Brett ships from his apexpodcast.co Calendar). The full /book/<id>
  // URL works; the embed view appends ?gv=true.
  const calendarEmbedUrl = ''

  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-bone">
        <div className="container-apex pb-20 pt-36 md:pb-24 md:pt-44">
          <p className="eyebrow-acid">Discovery</p>
          <h1 className="display mt-6 max-w-4xl text-bone">
            A 20-minute call with a producer
            <span className="text-acid">.</span>
          </h1>
          <p className="lead mt-7 max-w-3xl text-bone/70">
            Pick a 20-minute slot. We ask what you are building. We tell you what an Apex show would
            look like for you. No pitch deck, no obligation on either side at the end of the call.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-bone/55">
            You will be matched with a producer based on what you are working on.
          </p>
        </div>
      </section>

      {/* Calendar embed slot */}
      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <p className="eyebrow">Pick a time.</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8 overflow-hidden rounded-3xl border border-ink/12 bg-ink">
              {calendarEmbedUrl ? (
                <iframe
                  src={calendarEmbedUrl}
                  title="Book a discovery call with an Apex producer"
                  style={{ border: 0 }}
                  width="100%"
                  height="720"
                  loading="lazy"
                  className="block w-full bg-bone"
                />
              ) : (
                <div className="flex flex-col items-start gap-6 p-10 md:p-14">
                  <p className="font-mono text-xs uppercase tracking-widest text-bone/55">
                    Booking calendar
                  </p>
                  <p className="max-w-2xl text-bone/80">
                    The live Google Calendar appointment-schedule embed loads here. While the embed is
                    being wired up, email us and a producer will hold a slot manually inside the
                    business day.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <CtaLink href={`mailto:${siteConfig.email.brett}?subject=Discovery%20call`} variant="primary" arrow>
                      Email a producer
                    </CtaLink>
                    <CtaLink href="/contact/" variant="ghost-dark">
                      Use the contact form
                    </CtaLink>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What to expect */}
      <section className="section bg-bone pt-0">
        <div className="container-apex grid gap-10 lg:grid-cols-3">
          <Reveal>
            <div className="rounded-3xl border border-ink/12 p-7 md:p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-ink/55">01</p>
              <h2 className="mt-3 font-display text-lg text-ink">What you are building.</h2>
              <p className="mt-3 text-ink/75">
                A few minutes on what you do, who it is for, and whether a show is on the table.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-ink/12 p-7 md:p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-ink/55">02</p>
              <h2 className="mt-3 font-display text-lg text-ink">What the show looks like.</h2>
              <p className="mt-3 text-ink/75">
                The producer maps your communication wiring to a show shape: format, cadence,
                Pentatype profile, the lane it sits in.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink/12 p-7 md:p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-ink/55">03</p>
              <h2 className="mt-3 font-display text-lg text-ink">A clear recommendation.</h2>
              <p className="mt-3 text-ink/75">
                Your First Episode, Your Weekly Show, the license, or none of the above. We tell you
                which one fits, or that none of them does.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prefer to write first */}
      <section className="section bg-bone pt-0">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">Prefer to write first?</p>
              <p className="mt-5 text-ink/75">
                Use the contact form. Tell us about your show or project and a producer will pick it
                up. The contact form feeds the same lead capture the call does, so nothing is lost in
                translation.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact/"
                  className="inline-flex items-center font-mono text-xs uppercase tracking-widest text-ink underline decoration-acid underline-offset-4 hover:text-ink/70"
                >
                  Open the contact form
                  <span className="ml-2" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCta headline="Want a producer in the room?" />
    </>
  )
}
