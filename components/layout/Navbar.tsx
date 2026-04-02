'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

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
]

const transparencyItems = [
  { label: 'Bilancio 2021', href: '/trasparenza/bilancio-2021.pdf' },
  { label: 'Bilancio 2022', href: '/trasparenza/bilancio-2022.pdf' },
  { label: 'Bilancio 2023', href: '/trasparenza/bilancio-2023.pdf' },
  { label: 'Bilancio 2024', href: '/trasparenza/bilancio-2024.pdf' },
  { label: 'Bilancio 2025', href: '/trasparenza/bilancio-2025.pdf' },
  { label: 'Rendicontazione 5x1000', href: '/trasparenza/rendicontazione-5x1000.pdf' },
]

export default function Navbar() {
  const [isTransparencyOpen, setIsTransparencyOpen] = useState(false)
  const transparencyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        transparencyRef.current &&
        !transparencyRef.current.contains(event.target as Node)
      ) {
        setIsTransparencyOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#e8dcc7] bg-[#FCFBF8]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
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

        <nav className="flex items-center gap-1 whitespace-nowrap">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`shrink-0 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.06em] transition hover:opacity-90 ${item.bg} ${item.text}`}
            >
              {item.label}
            </Link>
          ))}

          <div
            ref={transparencyRef}
            className="relative shrink-0"
            onMouseEnter={() => {
              if (window.innerWidth >= 768) setIsTransparencyOpen(true)
            }}
            onMouseLeave={() => {
              if (window.innerWidth >= 768) setIsTransparencyOpen(false)
            }}
          >
            <button
              type="button"
              onClick={() => setIsTransparencyOpen((prev) => !prev)}
              className="inline-flex items-center gap-1 bg-[#F3E6CC] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.06em] text-black transition hover:opacity-90"
              aria-expanded={isTransparencyOpen}
              aria-haspopup="true"
            >
              Trasparenza
              <ChevronDown
                size={14}
                className={`transition-transform ${isTransparencyOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isTransparencyOpen && (
              <div className="absolute right-0 top-full z-[60] mt-2 min-w-[230px] border border-[#e8dcc7] bg-white shadow-lg">
                <ul className="py-1">
                  {transparencyItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-black transition hover:bg-[#F3E6CC]"
                        onClick={() => setIsTransparencyOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}