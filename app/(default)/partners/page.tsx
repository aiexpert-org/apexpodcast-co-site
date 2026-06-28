import type { Metadata } from 'next'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import FaqAccordion from '@/components/ui/faq-accordion'
import ClosingCta from '@/components/sections/closing-cta'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'Send a name and earn ten percent of the referred client’s monthly Apex revenue for the life of the engagement. Paid as cash, or as managed ad spend on your own accounts.',
  alternates: { canonical: '/partners/' },
}

const steps = [
  {
    title: 'Send a name.',
    body: 'A warm introduction, an email forward, a referral form, or your unique referral link from GHL. Any path works.',
  },
  {
    title: 'They become an Apex client.',
    body: 'We run the discovery, we land the contract, we ship the work. You stay out of the production loop unless you want to be in it.',
  },
  {
    title: 'You earn for the life of the engagement.',
    body: 'Ten percent of their monthly Apex revenue. Paid the first business week after each cycle bills. Cash to your account, or managed ad spend on your accounts. Your pick.',
  },
]

const partnersFaq = [
  {
    q: 'When do I get paid?',
    a: 'The first business week after each cycle bills. So if your referred client renews on the fifth of the month, your commission lands the week after that.',
  },
  {
    q: 'What happens if my referred client cancels?',
    a: 'Your commission stops at their cancellation. No clawbacks on payments already made.',
  },
  {
    q: 'How are taxes handled?',
    a: 'Cash payouts above the IRS threshold ($600 / year) come with a 1099 at year end. Managed-ad-spend payouts run on your accounts, so the ad budget is your business expense to handle in your own books.',
  },
  {
    q: 'What is the cookie or attribution window?',
    a: 'Sixty days from first click on your unique referral link, or any direct introduction you make to one of the producers by name. Manual attribution overrides the cookie. We are not the kind of program that hides attribution.',
  },
  {
    q: 'Can I do both cash and ad spend?',
    a: 'Yes. Tell us the split you want and we run it that way.',
  },
]

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-bone">
        <div className="container-apex pb-20 pt-36 md:pb-24 md:pt-44">
          <p className="eyebrow-acid">Partners.</p>
          <h1 className="display mt-6 max-w-4xl text-bone">
            Send a name. Earn for the life of the engagement
            <span className="text-acid">.</span>
          </h1>
          <p className="lead mt-7 max-w-3xl text-bone/70">
            Ten percent of the referred client’s monthly Apex revenue for as long as they are an Apex
            client. Paid as cash, or as managed ad spend on your own connected ad accounts. Your pick.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* TODO: swap to GHL affiliate signup URL */}
            <CtaLink href={siteConfig.partnerEnrollUrl} variant="primary" arrow>
              Enroll as a partner
            </CtaLink>
            <CtaLink href={`mailto:${siteConfig.email.partners}`} variant="ghost-dark">
              Email {siteConfig.email.partners}
            </CtaLink>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow">How it works.</h2>
          </Reveal>
          <RevealStagger className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <RevealItem key={step.title} className="flex gap-5">
                <span className="catalog shrink-0 text-ink/40" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-lg text-ink">{step.title}</h3>
                  <p className="mt-2 text-ink/70">{step.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Two payout options */}
      <section className="section bg-ink text-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow-acid">Cash or ad spend. Your pick.</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-bone/12 p-8">
                <h3 className="font-display text-xl text-bone">Cash payout.</h3>
                <p className="mt-4 text-bone/70">
                  Paid monthly through GHL into a connected account. 1099 issued at year end above the
                  threshold.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="h-full rounded-3xl border border-bone/12 p-8">
                <h3 className="font-display text-xl text-bone">Managed ad spend on your accounts.</h3>
                <p className="mt-4 text-bone/70">
                  We run boosted-post or paid-promo campaigns through your connected Meta, Google, or
                  platform ad account. We do not pool ad spend in a shared wallet. The campaigns run on
                  your accounts under your control, and the cycle debrief includes a reporting line.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Where the 10% comes from + Buddy Buck */}
      <section className="section bg-bone">
        <div className="container-apex grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-ink/12 p-8 md:p-10">
              <h2 className="eyebrow">The math, said honestly.</h2>
              <p className="mt-5 text-ink/75">
                When Apex runs dynamic ad insertion on the Apex Podcast Network feed, ninety percent of
                the ad revenue goes to the show. The remaining ten percent stays with Apex and funds
                this program. The same ten percent is what you earn when you refer a new client. The
                number is consistent on purpose. The economics are the same shape on both sides of the
                transaction.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-3xl bg-ink p-8 text-bone md:p-10">
              <h2 className="eyebrow-acid">Honoring existing relationships.</h2>
              <p className="mt-5 text-bone/75">
                One founding partner holds a grandfathered twenty percent commission on referrals
                across the sibling companies, including Apex. That arrangement is honored as it stands.
                The ten percent partner program above is the open program for everyone else.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section bg-bone pt-0">
        <div className="container-apex max-w-3xl">
          <Reveal>
            <h2 className="eyebrow">Who can be a partner.</h2>
            <p className="mt-5 text-ink/75">
              Active Apex clients (Prepisode buyers, Weekly Show clients, Apex Podcast Network clients, and case-study clients).
              Network alumni. Anyone with a working relationship inside the Apex network. The full
              agreement is sent when you enroll. Read it, sign it, get a referral link.
            </p>
            <div className="mt-8 rounded-3xl bg-ink px-8 py-10 text-bone">
              <h3 className="h-sub text-bone">Ready to send the first name?</h3>
              <div className="mt-6">
                {/* TODO: swap to GHL affiliate signup URL */}
                <CtaLink href={siteConfig.partnerEnrollUrl} variant="primary" arrow>
                  Enroll as a partner
                </CtaLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-bone pt-0">
        <div className="container-apex max-w-3xl">
          <Reveal>
            <h2 className="h-sub text-ink">Partner questions.</h2>
          </Reveal>
          <div className="mt-8">
            <FaqAccordion items={partnersFaq} />
          </div>
        </div>
      </section>

      <ClosingCta headline="Have a name in mind?" />
    </>
  )
}
