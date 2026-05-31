import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How Apex Podcast Co handles the information you share with us.',
  alternates: { canonical: '/legal/privacy/' },
}

// TODO: replace placeholder text with legal-reviewed copy before public deploy.
export default function PrivacyPage() {
  return (
    <article className="bg-bone">
      <div className="container-apex max-w-3xl pb-24 pt-36 md:pt-44">
        <p className="eyebrow">Legal</p>
        <h1 className="display mt-5 text-ink">Privacy</h1>
        <p className="mt-5 font-mono text-xs uppercase tracking-widest text-ink/55">
          Draft, pending legal review.
        </p>

        <div className="mt-10 space-y-5 text-ink/75">
          <p>
            This is a plain-language summary while the full policy is finalized. Apex Podcast Co
            collects only what you give us: your name and email when you subscribe to The Debrief or
            book a discovery call, and the details you share on a call or in an email.
          </p>
          <p>
            We use that information to reply to you, to run the engagement if you become a client, and
            to send The Debrief if you asked for it. You can unsubscribe at any time. We do not sell
            your information.
          </p>
          <p>
            Form and booking data is handled in our client system. Email runs on Google Workspace.
            When analytics is in place, it will measure page activity in aggregate.
          </p>
          <p>
            Questions about your data:{' '}
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
