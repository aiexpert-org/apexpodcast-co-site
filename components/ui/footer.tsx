import Link from '@/components/ui/smart-link'
import Wordmark from '@/components/ui/wordmark'
import DebriefSignupForm from '@/components/forms/debrief-signup-form'
import { footerSiteLinks, siteConfig } from '@/lib/site-config'

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="container-apex py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1. Apex. */}
          <div>
            <Wordmark tone="dark" className="text-3xl" />
            <p className="mt-5 max-w-xs text-sm text-bone/65">
              A producer and a network behind every show.
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-bone/55">
              APX series, est. 2026.
            </p>
          </div>

          {/* Column 2. Site. */}
          <nav aria-label="Footer">
            <h2 className="font-mono text-xs uppercase tracking-widest text-bone/55">Site</h2>
            <ul className="mt-5 space-y-3">
              {footerSiteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-bone/75 hover:text-acid">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3. The Debrief. */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-bone/55">The Debrief</h2>
            <p className="mt-5 text-sm text-bone/65">
              Notable quotes from the cohort. Producer notes from the room. One short read, sent when
              there is something worth sending.
            </p>
            <div className="mt-5">
              <DebriefSignupForm source="debrief_footer" tone="dark" />
            </div>
            <p className="mt-3 text-xs text-bone/55">
              We send The Debrief when we have something to say. You can unsubscribe at any time.
            </p>
          </div>

          {/* Column 4. Network. */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-bone/55">Network</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.transistorUrl}
                  className="text-bone/75 hover:text-acid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apex Podcast Network on Transistor
                </a>
              </li>
              <li>
                <Link href="/#the-apex-podcast" className="text-bone/75 hover:text-acid">
                  The Apex Podcast
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.podcastNetworkUrl}
                  className="text-bone/75 hover:text-acid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PodcastNetwork.org
                </a>
                <span className="block text-xs text-bone/55">Sibling property, separate company.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Final row */}
        <div className="mt-16 flex flex-col gap-4 border-t border-bone/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-bone/60">
            &copy; 2026 Apex Podcast Co. Brett K. Moore and Randy Highsmith.
          </p>
          <div className="flex items-center gap-5 text-xs text-bone/60">
            <Link href="/legal/privacy/" className="hover:text-acid">
              Privacy
            </Link>
            <Link href="/legal/terms/" className="hover:text-acid">
              Terms
            </Link>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-bone/55">
            Producers. Network. Cycle. Release.
          </p>
        </div>
      </div>
    </footer>
  )
}
