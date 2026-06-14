import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import NumberedList from '@/components/ui/numbered-list'
import FaqAccordion from '@/components/ui/faq-accordion'
import ClosingCta from '@/components/sections/closing-cta'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Affiliates',
  description:
    'The Apex affiliate program pays ten percent on Apex SKUs with a 60-day cookie window. Refer someone who should have a show, and earn on what they buy.',
  alternates: { canonical: '/affiliate/' },
}

const howItWorks = [
  {
    title: 'Apply and sign.',
    body: 'A short application, then the affiliate agreement through GoHighLevel. Read it, sign it, get your referral link.',
  },
  {
    title: 'Share your link.',
    body: 'Your link carries a 60-day cookie. Anyone who clicks it and buys an Apex offer inside that window is credited to you.',
  },
  {
    title: 'They buy an Apex offer.',
    body: 'Your First Episode, Your Weekly Show, or the Multi-Tenant Pipeline License. Ten percent of the sale is yours.',
  },
  {
    title: 'Get paid.',
    body: 'Commissions track inside the GHL Affiliate Manager. Payouts run monthly, net fifteen, after the refund window clears.',
  },
]

const terms = [
  { label: 'Commission', value: 'Ten percent on Apex SKUs.' },
  { label: 'Cookie window', value: '60 days from the click.' },
  { label: 'Eligible offers', value: 'Your First Episode, Your Weekly Show, Multi-Tenant Pipeline License.' },
  { label: 'Payout cadence', value: 'Monthly, net fifteen, after the refund window.' },
]

const faq = [
  {
    q: 'How much do I earn?',
    a: 'Ten percent on Apex SKUs. On Your First Episode that is $99.70. On a Weekly Show cycle it is $299.70 per cycle the referred client stays. On the Multi-Tenant Pipeline License it is $299.70 per month.',
  },
  {
    q: 'How long is the cookie?',
    a: 'Sixty days. If someone clicks your link and buys within sixty days, the sale is credited to you, even if they did not buy on the first visit.',
  },
  {
    q: 'When do I get paid?',
    a: 'Monthly, net fifteen, once the refund window on the sale has cleared. Everything tracks inside the GoHighLevel Affiliate Manager so you can see your referrals and commissions.',
  },
  {
    q: 'Who can be an affiliate?',
    a: 'Active Apex clients, Brett K Moore HQ alumni, and anyone with a working relationship inside the network. The full agreement is sent when you apply.',
  },
  {
    q: 'Is this the same as the Partners program?',
    a: 'They overlap. The affiliate program is the standard ten-percent referral path with a tracked link. The Partners page covers the broader referral relationship, including managed-ad-spend arrangements.',
  },
]

export default function AffiliatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-bone">
        <div className="container-apex pb-20 pt-36 md:pb-24 md:pt-44">
          <p className="eyebrow-acid">Affiliates.</p>
          <h1 className="display mt-6 max-w-4xl text-bone">
            Refer a show, earn ten percent
            <span className="text-acid">.</span>
          </h1>
          <p className="lead mt-7 max-w-3xl text-bone/70">
            You know people who should have a show. The Apex affiliate program pays you ten percent on
            Apex offers, with a 60-day cookie window. Share your link, and earn on what your referrals
            buy.
          </p>
          <div className="mt-9">
            <CtaLink href={siteConfig.affiliateSignupUrl} variant="primary" arrow>
              Become an Apex affiliate
            </CtaLink>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-bone/55">
            Ten percent on Apex SKUs. 60-day cookie. Tracked inside the GHL Affiliate Manager.
          </p>
        </div>
      </section>

      {/* Terms at a glance */}
      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow">The terms at a glance.</h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-4">
            {terms.map((t) => (
              <div key={t.label} className="bg-bone p-7">
                <p className="font-mono text-xs uppercase tracking-widest text-ink/55">{t.label}</p>
                <p className="mt-3 text-ink/80">{t.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-ink text-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow-acid">How it works.</h2>
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-bone/10 bg-bone/10 md:grid-cols-4">
            {howItWorks.map((step, i) => (
              <li key={step.title} className="bg-ink p-7">
                <span className="catalog text-acid" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-base text-bone">{step.title}</h3>
                <p className="mt-2 text-sm text-bone/65">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <CtaLink href={siteConfig.affiliateSignupUrl} variant="primary" arrow>
              Apply to the program
            </CtaLink>
          </div>
        </div>
      </section>

      {/* What you can refer */}
      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <h2 className="eyebrow">What you can refer.</h2>
          </Reveal>
          <div className="mt-10">
            <NumberedList
              columns={1}
              items={[
                {
                  title: 'Your First Episode, $997.',
                  body: 'The honest entry point. Ten percent is $99.70 per referral.',
                },
                {
                  title: 'Your Weekly Show, $2,997 per cycle.',
                  body: 'The retention offer. Ten percent is $299.70 for every cycle the referred client stays in production.',
                },
                {
                  title: 'Multi-Tenant Pipeline License, $2,997 per month.',
                  body: 'The license for operators. Ten percent is $299.70 per month for the life of the license.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-bone pt-0">
        <div className="container-apex max-w-3xl">
          <Reveal>
            <h2 className="h-sub text-ink">Questions about the program.</h2>
          </Reveal>
          <div className="mt-8">
            <FaqAccordion items={faq} />
          </div>
        </div>
      </section>

      <ClosingCta headline="Ready to send your first referral?" />
    </>
  )
}
