import JoinWaitlistButton from '@/components/ui/join-waitlist'
import { Reveal } from '@/components/motion/reveal'

export default function FooterCta({
  source = 'footer-cta',
  heading = 'Become the founder people listen to',
  body = 'Save your spot. A producer reaches out when one opens.',
  punctuation = '.',
}: {
  source?: string
  heading?: string
  body?: string
  punctuation?: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 text-bone md:py-32">
      <div className="container-apex">
        <Reveal className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-acid">
              Save your spot
            </p>
            <h2 className="mt-4 h-section text-bone">
              {heading}
              <span className="text-acid">{punctuation}</span>
            </h2>
            <p className="lead mt-5 max-w-xl text-bone/75">{body}</p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <JoinWaitlistButton source={source} tone="light" />
            <p className="max-w-sm font-mono text-xs uppercase tracking-widest text-bone/55 lg:text-right">
              Brett and Randy
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
