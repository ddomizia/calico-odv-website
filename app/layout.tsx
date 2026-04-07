import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'
import LayoutPageOffset from '@/components/layout/LayoutPageOffset'
import CookieBanner from '@/components/layout/CookieBanner'

export const metadata: Metadata = {
  metadataBase: new URL('https://associazionecalico.it'),

  title: {
    default: 'Associazione Calico ODV',
    template: '%s | Associazione Calico ODV',
  },

  description:
    'Associazione Calico ODV si occupa di recupero, cura e adozione consapevole di animali in difficoltà tra Roma e Nepi. Scopri i nostri gatti, cani, progetti e attività.',

  keywords: [
    'Associazione Calico ODV',
    'adozione gatti Roma',
    'adozione cani Lazio',
    'gattile Nepi',
    'associazione animali Lazio',
    'adozione animali Roma',
    'gatti in adozione',
    'cani in adozione',
    'volontariato animali',
    '5x1000 animali',
  ],

  authors: [{ name: 'Associazione Calico ODV' }],
  creator: 'Associazione Calico ODV',
  publisher: 'Associazione Calico ODV',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
  },

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

  openGraph: {
    title: 'Associazione Calico ODV',
    description:
      'Recupero, cura e adozione consapevole di animali in difficoltà tra Roma e Nepi.',
    url: 'https://associazionecalico.it',
    siteName: 'Associazione Calico ODV',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/home-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Associazione Calico ODV',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Associazione Calico ODV',
    description:
      'Recupero, cura e adozione consapevole di animali in difficoltà tra Roma e Nepi.',
    images: ['/home-hero.jpg'],
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