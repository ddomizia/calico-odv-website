import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  {
    label: 'Gatti',
    href: '/adozioni',
    bg: 'bg-[#E4B15A]',
    text: 'text-black',
  },
  {
    label: 'Sostienici',
    href: '/sostienici',
    bg: 'bg-[#1F3B2D]',
    text: 'text-white',
  },
  {
    label: 'Diventa Volontario',
    href: '/diventa-volontario',
    bg: 'bg-[#C96B3C]',
    text: 'text-white',
  },
  {
    label: 'Le nostre attività',
    href: '/attivita',
    bg: 'bg-[#2F2F2F]',
    text: 'text-white',
  },
  {
    label: 'I nostri consigli',
    href: '/consigli',
    bg: 'bg-[#F3E6CC]',
    text: 'text-black',
  },
  {
    label: 'Chi siamo',
    href: '/chi-siamo',
    bg: 'bg-[#A65A3A]',
    text: 'text-white',
  },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#e8dcc7] bg-[#FCFBF8]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-4 shrink-0">
          <div className="relative h-14 w-14 overflow-hidden">
            <Image
              src="/logo-calico.png"
              alt="Logo Associazione Calico ODV"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="leading-tight">
            <p className="text-lg font-black uppercase tracking-tight text-black">
              Associazione
            </p>
            <p className="text-xl font-black uppercase tracking-tight text-black">
              Calico ODV
            </p>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`px-4 py-3 text-sm font-bold uppercase tracking-wide transition hover:opacity-90 ${item.bg} ${item.text}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="xl:hidden">
          <button
            type="button"
            className="border border-black px-4 py-2 text-sm font-bold uppercase text-black"
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}