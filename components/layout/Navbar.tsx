import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { label: 'Gatti', href: '/adozioni', bg: 'bg-[#E4B15A]', text: 'text-black' },
  { label: 'Cani', href: '/cani', bg: 'bg-[#F3E6CC]', text: 'text-black' },
  { label: 'Conigli', href: '/conigli', bg: 'bg-[#D8C3A5]', text: 'text-black' },
  { label: 'Adottati', href: '/adottati', bg: 'bg-[#A65A3A]', text: 'text-white' },
  { label: 'La gatteria', href: '/gatteria', bg: 'bg-[#2F2F2F]', text: 'text-white' },
  { label: 'Sostienici', href: '/sostienici', bg: 'bg-[#1F3B2D]', text: 'text-white' },
  { label: 'Diventa volontario', href: '/diventa-volontario', bg: 'bg-[#C96B3C]', text: 'text-white' },
  { label: 'Attività', href: '/attivita', bg: 'bg-[#2F2F2F]', text: 'text-white' },
  { label: 'Consigli', href: '/consigli', bg: 'bg-[#E4B15A]', text: 'text-black' },
  { label: 'Chi siamo', href: '/chi-siamo', bg: 'bg-[#1F3B2D]', text: 'text-white' },
  { label: 'Trasparenza', href: '/trasparenza', bg: 'bg-[#F3E6CC]', text: 'text-black' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#e8dcc7] bg-[#FCFBF8]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        
        {/* LOGO */}
        <Link href="/" className="flex shrink-0 items-center">
          <div className="relative h-12 w-12 overflow-hidden">
            <Image
              src="/logo-calico.png"
              alt="Logo Associazione Calico ODV"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* NAV A DESTRA */}
        <nav className="flex items-center gap-1 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`shrink-0 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.06em] transition hover:opacity-90 ${item.bg} ${item.text}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  )
}