import './css/style.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Space_Mono } from 'next/font/google'
import { siteConfig } from '@/lib/site-config'

/**
 * Mona Sans variable, loaded local. Ported direct from CCM
 * (`createchurchmedia-site/src/fonts/Mona-Sans.var.woff2`). Variable axis
 * `wdth 125` drives the wider display register on `.display` headlines via
 * `font-variation-settings` in style.css. Replaces Inter (sans) and Archivo
 * Black (display) with a single variable font, matching CCM's chassis.
 */
const monaSans = localFont({
  src: '../public/fonts/Mona-Sans.var.woff2',
  display: 'block',
  variable: '--font-mona-sans',
  weight: '200 900',
})

/**
 * Space Mono carries the credit-sleeve / catalog-stamp register that the
 * record-label identity depends on. CCM has no equivalent layer; Apex keeps
 * it because the eyebrows, catalog numbers, and acid CTA labels all hang on
 * the monospace voice.
 */
const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s. Apex Podcast Co`,
  },
  description: siteConfig.defaultDescription,
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteConfig.url,
    siteName: 'Apex Podcast Co',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${monaSans.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased bg-bone text-ink">
        <div className="flex flex-col min-h-screen overflow-hidden">{children}</div>
      </body>
    </html>
  )
}
