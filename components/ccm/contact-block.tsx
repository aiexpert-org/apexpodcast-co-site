import { Container } from '@/components/ccm/container'
import { FadeIn } from '@/components/ccm/fade-in'
import { Border } from '@/components/ccm/border'
import { ApexAvatar } from '@/components/ccm/apex-portrait'
import { JoinWaitListButton } from '@/components/ccm/join-waitlist-button'
import { siteConfig } from '@/lib/site-config'

type Props = {
  heading: string
  children: React.ReactNode
  /** Tags the CTA so this page's bottom signups are attributed to it. */
  source?: string
}

export function ContactBlock({ heading, children, source = 'contact-block' }: Props) {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12" data-surface="dark">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl text-balance">
                {heading}
              </h2>
              <div className="mt-6 text-xl text-neutral-300">{children}</div>
              <div className="mt-10">
                <JoinWaitListButton source={source} tone="dark" />
              </div>
            </div>

            <FadeIn scaleIn className="hidden lg:block lg:justify-self-end">
              <ApexAvatar size={300} className="ring-2 ring-white/15" />
            </FadeIn>
          </div>

          <Border className="mt-16 pt-10" invert>
            <dl className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 text-sm">
              <div>
                <dt className="font-display font-semibold uppercase tracking-wider text-white/70">
                  Email
                </dt>
                <dd className="mt-3">
                  <a
                    href={`mailto:${siteConfig.email.brett}`}
                    className="text-white hover:text-[var(--color-cta)]"
                  >
                    {siteConfig.email.brett}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display font-semibold uppercase tracking-wider text-white/70">
                  Based in
                </dt>
                <dd className="mt-3 text-white">
                  Indianapolis, IN
                </dd>
              </div>
            </dl>
          </Border>
        </div>
      </FadeIn>
    </Container>
  )
}
