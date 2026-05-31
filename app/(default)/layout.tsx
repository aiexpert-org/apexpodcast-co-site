import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
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
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  )
}
