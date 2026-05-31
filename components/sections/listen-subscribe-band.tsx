import CtaLink from '@/components/ui/cta-link'
import ListenButtons from '@/components/ui/listen-buttons'
import DebriefSignupForm from '@/components/forms/debrief-signup-form'
import { Reveal } from '@/components/motion/reveal'

/**
 * Closing conversion band. Primary action: tell us about your show (apply/fit).
 * Listen + subscribe sit secondary. Direct-response voice, sphere woven in.
 */
export default function ListenSubscribeBand() {
  return (
    <section className="section bg-bone">
      <div className="container-apex">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-bone md:px-14 md:py-20">
            <div
              className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-acid/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="h-section text-bone">
                  Tell us about your show
                  <span className="text-acid">.</span>
                </h2>
                <p className="mt-5 max-w-xl text-bone/70">
                  If you already have an audience, you do not need our marketing. You need our
                  production. We take on a few new shows at a time. Tell us about yours and we will
                  tell you if it is a fit.
                </p>
                <div className="mt-8">
                  <CtaLink href="/contact/" variant="primary" arrow>
                    Tell us about your show
                  </CtaLink>
                </div>
              </div>
              <div className="lg:col-span-5">
                <p className="font-mono text-xs uppercase tracking-widest text-bone/55">
                  Or sample the work and stay in the loop
                </p>
                <ListenButtons tone="dark" className="mt-4" />
                <div className="mt-6 rounded-3xl border border-bone/15 p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-bone/55">
                    Subscribe to The Debrief
                  </p>
                  <div className="mt-4">
                    <DebriefSignupForm source="debrief_footer" tone="dark" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
