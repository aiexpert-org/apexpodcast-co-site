import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import DiscoveryCalendarEmbed from '@/components/ui/discovery-calendar-embed'
import ContactForm from '@/components/forms/contact-form'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'The front door is a 20-minute discovery call with a producer. Email is a secondary path. Press, partners, and case-study inquiries each have their own line.',
  alternates: { canonical: '/contact/' },
}

// Confirm whether the case-study program is open at relaunch.
// When closed, set to false and the section is omitted.
const caseStudyProgramOpen = true

const directLines = [
  {
    email: siteConfig.email.brett,
    use: 'The fastest written path to a producer. Tell us what you are building and we route it.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-bone">
        <div className="container-apex pb-20 pt-36 md:pb-24 md:pt-44">
          <p className="eyebrow-acid">Contact.</p>
          <h1 className="display mt-6 max-w-4xl text-bone">
            The front door is a 20-minute call
            <span className="text-acid">.</span>
          </h1>
          <p className="lead mt-7 max-w-3xl text-bone/70">
            Discovery is the primary way in. Email is a secondary path. Press, partners, and
            case-study inquiries each have their own line.
          </p>
        </div>
      </section>

      {/* The discovery call */}
      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow">Book a discovery call.</h2>
            <p className="mt-5 max-w-2xl text-ink/75">
              20 minutes. With a producer. We ask what you are building. We tell you what an Apex
              show would look like for you. We do not run a pitch deck. There is no obligation on
              either side at the end of the call.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8">
              <DiscoveryCalendarEmbed />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact form (lead capture) */}
      <section className="section bg-bone pt-0">
        <div className="container-apex grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="eyebrow">Or tell us about your show.</h2>
              <p className="mt-5 text-ink/75">
                Prefer to write first? Send the details and one of the producers will pick it up. This
                is the same lead capture the discovery call feeds into.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* The split rule */}
      <section className="section bg-ink text-bone pt-0 md:pt-0">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl rounded-3xl border border-bone/12 p-8 md:p-10">
              <h2 className="eyebrow-acid">How we route the call.</h2>
              <p className="mt-5 text-bone/75">
                Tell us what your show is about and we match you with the producer who fits it best.
                Real estate and leadership, coaching and executive narrative, authors and brand voice.
                The calendar handles the routing once you pick a time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Direct contact */}
      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow">Direct lines.</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {directLines.map((line) => (
              <Reveal key={line.email}>
                <a
                  href={`mailto:${line.email}`}
                  className="group block rounded-3xl border border-ink/12 p-8 transition-colors hover:border-ink/40"
                >
                  <span className="font-display text-xl text-ink group-hover:text-ink">
                    {line.email}
                  </span>
                  <p className="mt-3 text-ink/70">{line.use}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case-study seat (conditional) */}
      {caseStudyProgramOpen && (
        <section className="section bg-bone pt-0">
          <div className="container-apex max-w-3xl">
            <Reveal>
              <h2 className="eyebrow">Case-study program.</h2>
              <p className="mt-5 text-ink/75">
                We open a small number of case-study seats. Zero-dollar consideration in exchange for
                case-study usage rights. The application is the same discovery call.
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Press */}
      <section className="section bg-bone pt-0">
        <div className="container-apex max-w-3xl">
          <Reveal>
            <h2 className="eyebrow">Press.</h2>
            <p className="mt-5 text-ink/75">
              For press, podcast features, and editorial inquiries:{' '}
              <a
                href={`mailto:${siteConfig.email.press}`}
                className="text-ink underline decoration-acid underline-offset-4 hover:text-ink/70"
              >
                {siteConfig.email.press}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
