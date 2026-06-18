import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Terms',
  description: 'The terms that govern use of the Apex Podcast Co website.',
  alternates: { canonical: '/legal/terms/' },
}

export default function TermsPage() {
  return (
    <article className="bg-bone">
      <div className="container-apex max-w-3xl pb-24 pt-36 md:pt-44">
        <p className="font-mono text-xs uppercase tracking-widest text-acid">
          Legal
        </p>
        <h1 className="display mt-5 text-ink">
          Terms
          <span className="text-acid">.</span>
        </h1>
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-ink/55">
          Last updated 2026-06-18.
        </p>

        <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-ink/80">
          <p>
            These terms ("Terms") govern your use of apexpodcast.co (the
            "Site") operated by Apex Podcast Co LLC ("Apex," "we," "us"). By
            using the Site you agree to these Terms. If you do not, do not
            use the Site.
          </p>

          <h2 className="font-display text-2xl tracking-tight text-ink">
            What the Site is
          </h2>
          <p>
            The Site describes Apex Podcast Co and the productions on the
            Apex Podcast Network. It is informational. It is not a contract
            and it is not an offer that binds either side. The actual terms
            of any engagement live in the signed service or license agreement
            we share with you separately. Where the Site and a signed
            agreement differ, the signed agreement governs.
          </p>

          <h2 className="font-display text-2xl tracking-tight text-ink">
            Pentatype assessment
          </h2>
          <p>
            The Pentatype: Find Your Podcast Core assessment on the Site is
            licensed from Pentatype the company. Your individual result is
            yours. The Pentatype methodology, archetype framework, and scoring
            system are the property of Pentatype the company. You may not
            re-host, redistribute, or build derivative assessments from the
            questions or scoring rules.
          </p>

          <h2 className="font-display text-2xl tracking-tight text-ink">
            Intellectual property
          </h2>
          <p>
            The Apex Podcast Co name, the apex. wordmark, the Apex Podcast
            Network mark, and the Site copy and design belong to Apex Podcast
            Co LLC. Show owners keep ownership of their own shows, episodes,
            cover art, and feeds, as set out in their agreement with us.
          </p>

          <h2 className="font-display text-2xl tracking-tight text-ink">
            Acceptable use
          </h2>
          <p>
            You agree not to scrape, mirror, or republish the Site without
            written permission. You agree not to submit waitlist or
            assessment entries on behalf of someone who has not consented. You
            agree not to use the Site to harass, defame, or harm anyone.
          </p>

          <h2 className="font-display text-2xl tracking-tight text-ink">
            Third-party links
          </h2>
          <p>
            The Site links to platforms we use or recommend (Transistor,
            Spotify, Apple Podcasts, pentatype.com, podcastnetwork.org). We
            are not responsible for the content or practices of those
            third-party properties.
          </p>

          <h2 className="font-display text-2xl tracking-tight text-ink">
            No warranties
          </h2>
          <p>
            The Site is provided as is. We do not warrant that it will be
            available without interruption, that the information is free of
            errors, or that any specific result will follow from filling out
            a form on it.
          </p>

          <h2 className="font-display text-2xl tracking-tight text-ink">
            Governing law
          </h2>
          <p>
            These Terms are governed by the laws of the State of Indiana,
            without regard to its conflicts-of-law principles, and any
            dispute will be brought in the state or federal courts located in
            Marion County, Indiana.
          </p>

          <h2 className="font-display text-2xl tracking-tight text-ink">
            Contact
          </h2>
          <p>
            Questions about these Terms:{' '}
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
