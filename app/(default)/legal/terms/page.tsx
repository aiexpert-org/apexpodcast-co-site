import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Terms',
  description: 'The terms that govern use of the Apex Podcast Co website.',
  alternates: { canonical: '/legal/terms/' },
}

// TODO: replace placeholder text with legal-reviewed copy before public deploy.
export default function TermsPage() {
  return (
    <article className="bg-bone">
      <div className="container-apex max-w-3xl pb-24 pt-36 md:pt-44">
        <p className="eyebrow">Legal</p>
        <h1 className="display mt-5 text-ink">Terms</h1>
        <p className="mt-5 font-mono text-xs uppercase tracking-widest text-ink/55">
          Draft, pending legal review.
        </p>

        <div className="mt-10 space-y-5 text-ink/75">
          <p>
            This is a plain-language summary while the full terms are finalized. This site describes
            Apex Podcast Co and its two services, Launch and Managed. The content here is for
            information. It is not a contract and it is not an offer that binds either side.
          </p>
          <p>
            The actual terms of any engagement live in the signed Launch or Managed agreement. Where
            this site and a signed agreement differ, the signed agreement governs. Prices and program
            details described here can change before you sign.
          </p>
          <p>
            The Apex name, the wordmark, and the site content belong to Apex Podcast Co. Show owners
            keep ownership of their own shows, episodes, cover art, and feeds, as set out in their
            agreement.
          </p>
          <p>
            Questions about these terms:{' '}
            <a
              href={`mailto:${siteConfig.email.brett}`}
              className="text-ink underline decoration-acid underline-offset-4 hover:text-ink/70"
            >
              {siteConfig.email.brett}
            </a>
            .
          </p>
        </div>
      </div>
    </article>
  )
}
