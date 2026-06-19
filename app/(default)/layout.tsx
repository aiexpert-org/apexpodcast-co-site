import { SiteHeader } from '@/components/ccm/site-header'
import { SiteFooter } from '@/components/ccm/site-footer'
import SmoothScroll from '@/components/providers/smooth-scroll'
import JsonLd from '@/components/seo/json-ld'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd />
      <SmoothScroll />
      <SiteHeader />
      <main id="main" className="flex-auto pt-28 sm:pt-32">
        {children}
      </main>
      <SiteFooter />
    </>
  )
}
