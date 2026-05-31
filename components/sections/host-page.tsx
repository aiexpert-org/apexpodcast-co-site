import Link from '@/components/ui/smart-link'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'
import GuestApplicationForm from '@/components/forms/guest-application-form'
import { whyGuest, subscribePlatforms, PENDING, type Host } from '@/lib/hosts'
import { siteConfig } from '@/lib/site-config'

function PendingNote({ children }: { children?: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-widest text-ink/65">
      {children ?? '[Pulled from dossier — pending]'}
    </p>
  )
}

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
}

// Recent episodes come from the Transistor RSS feed. Integration is deferred;
// these are placeholder rows (see PHASE3-PLACEHOLDERS.md).
const placeholderEpisodes = Array.from({ length: 5 }, (_, i) => i + 1)

export default function HostPage({ host }: { host: Host }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-bone">
        <div className="container-apex pb-16 pt-36 md:pb-20 md:pt-44">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow-acid">Host</p>
              <h1 className="display mt-5 text-bone">
                {host.name}
                <span className="text-acid">.</span>
              </h1>
              {host.show ? (
                <p className="mt-5 font-mono text-sm uppercase tracking-widest text-acid">
                  {host.show}
                </p>
              ) : (
                <p className="mt-5 font-mono text-xs uppercase tracking-widest text-bone/55">
                  [Show name pending dossier]
                </p>
              )}
              <p className="lead mt-5 max-w-2xl text-bone/70">{host.tagline}</p>
            </div>
            {/* Photo placeholder (real headshot pending dossier) */}
            <div className="lg:col-span-4">
              <div
                className="flex aspect-square w-full max-w-xs items-center justify-center rounded-3xl border border-acid/25 bg-acid/10 lg:ml-auto"
                aria-hidden="true"
              >
                <span className="font-display text-6xl text-acid">{initials(host.name)}</span>
              </div>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-bone/55 lg:text-right">
                [Photo pending dossier]
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-bone">
        <div className="container-apex section grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {/* About the host */}
            <Reveal>
              <div>
                <h2 className="eyebrow">About the host.</h2>
                {host.bio === PENDING ? (
                  <div className="mt-5 rounded-2xl border border-dashed border-ink/20 p-6">
                    <PendingNote>[Bio pulled from dossier — pending]</PendingNote>
                    <p className="mt-2 text-sm text-ink/65">
                      Source: {host.dossier}
                    </p>
                  </div>
                ) : (
                  <p className="mt-5 text-lg text-ink/80">{host.bio}</p>
                )}
              </div>
            </Reveal>

            {/* About the show */}
            <Reveal>
              <div className="mt-14">
                <h2 className="eyebrow">About the show.</h2>
                {host.showPremise === PENDING ? (
                  <div className="mt-5 rounded-2xl border border-dashed border-ink/20 p-6">
                    <PendingNote>[Show premise pulled from dossier — pending]</PendingNote>
                  </div>
                ) : (
                  <p className="mt-5 text-lg text-ink/80">{host.showPremise}</p>
                )}
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-widest text-ink/65">Cadence</dt>
                    <dd className="mt-1 text-ink/75">{host.cadence ?? '[Pending dossier]'}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-widest text-ink/65">Audience</dt>
                    <dd className="mt-1 text-ink/75">{host.audience ?? '[Pending dossier]'}</dd>
                  </div>
                </dl>
                <Link
                  href={`/work/${host.caseStudySlug}/`}
                  className="mt-6 inline-flex items-center font-mono text-xs uppercase tracking-widest text-ink underline decoration-acid underline-offset-4 hover:text-ink/70"
                >
                  See the case study
                  <span className="ml-2" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </Reveal>

            {/* Notable guests */}
            <Reveal>
              <div className="mt-14">
                <h2 className="eyebrow">Notable guests.</h2>
                {host.notableGuests.length > 0 ? (
                  <ul className="mt-5 flex flex-wrap gap-3">
                    {host.notableGuests.map((g) => (
                      <li
                        key={g}
                        className="rounded-full border border-ink/15 px-4 py-2 font-display text-ink"
                      >
                        {g}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-5 rounded-2xl border border-dashed border-ink/20 p-6">
                    <PendingNote>[Notable guests pulled from dossier — pending]</PendingNote>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* Apply to be a guest */}
          <div className="lg:col-span-4">
            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-ink/12 p-7 md:p-8 lg:sticky lg:top-28">
                <h2 className="h-sub text-ink">Apply to be a guest.</h2>
                <p className="mt-3 text-sm text-ink/70">
                  Pitch yourself for {host.show ?? `${host.name}’s show`}. A producer reviews every
                  application.
                </p>
                <div className="mt-6">
                  <GuestApplicationForm hostName={host.name} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Why be a guest */}
      <section className="section bg-ink text-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow-acid">Why be a guest.</h2>
          </Reveal>
          <RevealStagger className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-bone/10 bg-bone/10 md:grid-cols-3">
            {whyGuest.map((r, i) => (
              <RevealItem key={r.title} className="bg-ink p-8">
                <span className="catalog text-acid" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-lg text-bone">{r.title}</h3>
                <p className="mt-2 text-bone/70">{r.body}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Recent episodes */}
      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow">Recent episodes.</h2>
            <p className="mt-4 max-w-xl text-sm text-ink/65">
              Pulled live from the Transistor feed once that integration lands. Placeholder list for now.
            </p>
          </Reveal>
          <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {placeholderEpisodes.map((n) => (
              <li key={n} className="flex items-baseline justify-between gap-6 py-4">
                <span className="text-ink/70">[Episode title pending feed]</span>
                <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-ink/65">
                  [Date]
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Subscribe */}
      <section className="section bg-bone pt-0">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow">Subscribe.</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {subscribePlatforms.map((p) => (
                <a
                  key={p}
                  href={siteConfig.transistorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink/20 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-ink/50"
                >
                  {p}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
