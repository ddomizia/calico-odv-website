import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Associazione Calico ODV',
  description: 'Sito ufficiale Associazione Calico ODV',
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
  <div className="pt-20">
    {children}
  </div>
</body>
    </html>
  )
}