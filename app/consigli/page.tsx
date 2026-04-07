import type { Metadata } from 'next'
import ConsigliPageClient from './ConsigliPageClient'

export const metadata: Metadata = {
  title: 'Consigli',
  description:
    'Approfondimenti, consigli pratici e contenuti utili sull’adozione e sulla cura quotidiana degli animali.',
  alternates: {
    canonical: '/consigli',
  },
  openGraph: {
    title: 'Consigli | Associazione Calico ODV',
    description:
      'Approfondimenti, consigli pratici e contenuti utili sull’adozione e sulla cura quotidiana degli animali.',
    url: 'https://associazionecalico.it/consigli',
    type: 'website',
    images: [
      {
        url: '/gatto-6.jpg',
        width: 1200,
        height: 630,
        alt: 'I nostri consigli - Associazione Calico ODV',
      },
    ],
  },
}

export default function ConsigliPage() {
  return <ConsigliPageClient />
}