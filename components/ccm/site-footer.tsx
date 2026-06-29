import Link from 'next/link'
import { Container } from '@/components/ccm/container'
import { FadeIn } from '@/components/ccm/fade-in'
import { Logo } from '@/components/ccm/logo'
import { ApexAvatar } from '@/components/ccm/apex-portrait'
import { JoinWaitListButton } from '@/components/ccm/join-waitlist-button'
import { siteConfig, footerSiteLinks } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
          <div>
            <Link
              href="/"
              aria-label={`${siteConfig.name} home`}
              className="inline-block"
            >
              <Logo />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-6 text-neutral-600">
              {siteConfig.defaultDescription}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-display text-sm font-semibold tracking-wider uppercase text-neutral-950">
              Site
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              {footerSiteLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-neutral-950 hover:underline underline-offset-4 decoration-[var(--color-cta)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-semibold tracking-wider uppercase text-neutral-950">
              Contact us
            </h2>

            <p className="mt-6 max-w-xs text-sm leading-6 text-neutral-600">
              Drop your info and a producer will reach out personally.
            </p>
            <div className="mt-5">
              <JoinWaitListButton source="footer" />
            </div>

            <ul className="mt-8 space-y-3 text-sm text-neutral-700">
              <li>
                <a
                  href={`mailto:${siteConfig.email.brett}`}
                  className="transition hover:text-neutral-950 hover:underline underline-offset-4 decoration-[var(--color-cta)]"
                >
                  {siteConfig.email.brett}
                </a>
              </li>
              <li className="text-neutral-500">
                {siteConfig.city}, {siteConfig.state}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-200 pt-8 pb-12">
          <p className="flex flex-wrap items-center gap-x-1.5 text-sm text-neutral-500">
            &copy; {siteConfig.name} {new Date().getFullYear()}.
            <ApexAvatar size={32} />
            <span className="font-medium text-neutral-600">{siteConfig.name}</span>
          </p>

          <p className="text-sm text-neutral-500">
            {siteConfig.city}, {siteConfig.state}.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
