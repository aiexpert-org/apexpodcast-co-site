import ListenButtons from '@/components/ui/listen-buttons'
import DebriefSignupForm from '@/components/forms/debrief-signup-form'
import { Reveal } from '@/components/motion/reveal'

/**
 * Closing band for the podcast-first home: Listen (primary) + Subscribe to The
 * Debrief. Sits above the global site footer.
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
                  Press play on The Apex Podcast
                  <span className="text-acid">.</span>
                </h2>
                <p className="mt-5 max-w-xl text-bone/70">
                  New episodes land in the feed. Follow the show wherever you listen, and get The
                  Debrief when there is something worth sending.
                </p>
                <ListenButtons tone="dark" className="mt-8" />
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-bone/15 p-7 md:p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-bone/55">
                    Subscribe to The Debrief
                  </p>
                  <div className="mt-5">
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
