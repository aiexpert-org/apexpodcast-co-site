import CtaLink from '@/components/ui/cta-link'
import { siteConfig } from '@/lib/site-config'

/**
 * Discovery-call booking surface.
 *
 * TODO: swap to GHL calendar embed (master sub-account QRzW1cp8gNa31VJDILvJ).
 * Phase 3 ships a styled placeholder with the discovery CTA. When the confirmed
 * GHL calendar URL lands, replace the inner block with the GHL embed iframe and
 * keep the max-width wrapper (GHL embeds can blow out page width otherwise).
 */
export default function DiscoveryCalendarEmbed() {
  return (
    <div className="rounded-3xl border border-dashed border-ink/20 bg-bone p-8 md:p-12">
      <p className="font-mono text-xs uppercase tracking-widest text-ink/55">Apex booking calendar</p>
      <p className="mt-4 max-w-xl text-ink/75">
        Pick a 20-minute slot with a producer. The calendar handles the routing once you choose a
        time. No pitch deck, no obligation on either side.
      </p>
      <div className="mt-7">
        <CtaLink href={siteConfig.discoveryUrl} variant="primary" arrow>
          Book a discovery call
        </CtaLink>
      </div>
    </div>
  )
}
