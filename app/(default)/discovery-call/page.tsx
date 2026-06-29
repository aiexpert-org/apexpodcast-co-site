import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import ClosingCta from '@/components/sections/closing-cta'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Discovery Call',
  description:
    'Twenty minutes with a producer. We ask what you are building. We tell you what an Apex show would look like for you.',
  alternates: { canonical: '/discovery-call/' },
}

export default function DiscoveryCallPage() {
  const calendarEmbedUrl = ''

  return (
    <>
      <section className="bg-ink text-bone">
        <div className="container-apex pb-20 pt-36 md:pb-24 md:pt-44">
          <p className="eyebrow-acid">Discovery</p>
          <h1 className="display mt-6 max-w-4xl text-bone">
            Twenty minutes. One question. Is a show right for you
            <span className="text-acid">?</span>
          </h1>
          <p className="lead mt-7 max-w-3xl text-bone/70">
            A producer asks what you are building. We tell you what an Apex show would look like for you. No pitch deck, no obligation either way.
          </p>
        </div>
      </section>

      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <p className="eyebrow">Pick a time</p>
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
                    Email us and a producer will hold a slot inside the business day.
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

      <section className="section bg-bone pt-0">
        <div className="container-apex grid gap-10 lg:grid-cols-3">
          <Reveal>
            <div className="rounded-3xl border border-ink/12 p-7 md:p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-ink/55">01</p>
              <h2 className="mt-3 font-display text-lg text-ink">Tell us what you are building.</h2>
              <p className="mt-3 text-ink/75">
                What you do, who it is for, whether a show is on the table.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-ink/12 p-7 md:p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-ink/55">02</p>
              <h2 className="mt-3 font-display text-lg text-ink">We map what the show looks like.</h2>
              <p className="mt-3 text-ink/75">
                Format, cadence, the shape that fits your voice.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink/12 p-7 md:p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-ink/55">03</p>
              <h2 className="mt-3 font-display text-lg text-ink">You get an honest answer.</h2>
              <p className="mt-3 text-ink/75">
                The Prepisode, the weekly show, the network, or none. We tell you which.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCta headline="Ready to find out?" />
    </>
  )
}
