import type { ReactNode } from 'react'
import JoinWaitlistButton from '@/components/ui/join-waitlist'

/**
 * Dark wait-list CTA band, ported from the CCM ContactBlock. Closes every page.
 * Ink ground, acid splash, the Join the wait list modal.
 */
export default function ContactBlock({
  heading = 'Join the wait list.',
  source = 'contact-block',
  children,
}: {
  heading?: string
  source?: string
  children?: ReactNode
}) {
  return (
    <section className="section">
      <div className="container-apex">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-bone sm:px-16 sm:py-20">
          <div className="relative max-w-2xl">
            <h2 className="h-section text-bone">
              {heading.replace(/\.$/, '')}
              <span className="text-acid">.</span>
            </h2>
            <div className="lead mt-6 text-bone/75">{children}</div>
            <div className="mt-9">
              <JoinWaitlistButton source={source} tone="dark" />
            </div>
          </div>
          <p className="relative mt-10 font-mono text-xs uppercase tracking-widest text-bone/45">
            Producers. Network. Cycle. Release.
          </p>
        </div>
      </div>
    </section>
  )
}
