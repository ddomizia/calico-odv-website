import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'
import LayoutPageOffset from '@/components/layout/LayoutPageOffset'
import CookieBanner from '@/components/layout/CookieBanner'

export const metadata: Metadata = {
  title: 'Associazione Calico ODV',
  description: 'Sito ufficiale Associazione Calico ODV',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body>
        <Navbar />
        <LayoutPageOffset>{children}</LayoutPageOffset>
        <Footer />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  )
}