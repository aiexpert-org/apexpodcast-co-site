import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How Apex Podcast Co handles the information you share with us.',
  alternates: { canonical: '/legal/privacy/' },
}

export default function PrivacyPage() {
  return (
    <article className="bg-bone">
      <div className="container-apex max-w-3xl pb-24 pt-36 md:pt-44">
        <p className="font-mono text-xs uppercase tracking-widest text-acid">
          Legal
        </p>
        <h1 className="display mt-5 text-ink">
          Privacy
          <span className="text-acid">.</span>
        </h1>
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-ink/55">
          Last updated 2026-06-18.
        </p>

        <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-ink/80">
          <p>
            This policy explains how Apex Podcast Co LLC ("Apex," "we," "us")
            handles personal information collected through apexpodcast.co (the
            "Site"). If you reach out, fill out a form, or use the Pentatype
            assessment on the Site, this policy tells you what we do with that
            information.
          </p>

          <h2 className="font-display text-2xl tracking-tight text-ink">
            Information we collect
          </h2>
          <p>
            We collect only what you give us. Specifically: the name, email
            address, phone number, and optional affiliate code you enter in the
            Join the Waitlist form. The first name, email, and assessment
            answers you enter in the Pentatype assessment. The name and email
            you enter in any signup form. The contents of any email you send to
            us. Server logs (IP address, browser, referrer) collected at the
            edge of our hosting provider for security and reliability purposes.
          </p>

          <h2 className="font-display text-2xl tracking-tight text-ink">
            How we use it
          </h2>
          <p>
            We use your information to reply to you, to evaluate fit if you are
            applying to be on a show, to run the engagement if you become a
            client, to deliver the Pentatype assessment result you requested,
            and to send you the producer notes that come with it. If you
            include an affiliate code, we credit the referring affiliate.
          </p>
          <p>
            We do not sell your information. We do not share it with third
            parties for their own marketing purposes. We do use service
            providers (listed below) to operate the Site and the business.
          </p>

          <h2 className="font-display text-2xl tracking-tight text-ink">
            Service providers
          </h2>
          <p>
            The Site is hosted on Vercel. Form submissions are stored in
            Google Sheets via an Apps Script web app and in GoHighLevel (our
            CRM, the operational system of record). The Pentatype assessment
            is administered under license from Pentatype the company; your
            answers are not shared with Pentatype unless you upgrade to the
            Full Profile on pentatype.com. Email runs on Google Workspace.
          </p>

          <h2 className="font-display text-2xl tracking-tight text-ink">
            Your choices
          </h2>
          <p>
            You can unsubscribe from any email we send at any time. You can
            email{' '}
            <a
              href={`mailto:${siteConfig.email.brett}`}
              className="text-ink underline decoration-acid underline-offset-4 hover:text-ink/70"
            >
              {siteConfig.email.brett}
            </a>{' '}
            to request that we delete your records, or to ask what we have on
            file for you. Residents of California, the EU, and other regions
            with applicable privacy regimes have the rights granted under
            those regimes; we honor them.
          </p>

          <h2 className="font-display text-2xl tracking-tight text-ink">
            Cookies
          </h2>
          <p>
            The Site uses only the cookies necessary to operate it (session
            preferences, the prefetch cache for the Next.js app router). No
            tracking pixels, no third-party advertising cookies.
          </p>

          <h2 className="font-display text-2xl tracking-tight text-ink">
            Contact
          </h2>
          <p>
            Questions about your data, this policy, or anything else:{' '}
            <a
              href={`mailto:${siteConfig.email.brett}`}
              className="text-ink underline decoration-acid underline-offset-4 hover:text-ink/70"
            >
              {siteConfig.email.brett}
            </a>
            . Apex Podcast Co LLC.
          </p>
        </div>
      </div>
    </article>
  )
}
