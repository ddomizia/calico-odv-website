'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, PawPrint, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/', bg: 'bg-[#1F3B2D]', text: 'text-white' },
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
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [isTransparencyOpen, setIsTransparencyOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileTransparencyOpen, setIsMobileTransparencyOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(!isHome)

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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isHome) {
      setShowNavbar(true)
      return
    }

    function handleScroll() {
      setShowNavbar(window.scrollY > 80)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b border-[#e8dcc7]/80 bg-[#FCFBF8]/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-500 ${
          showNavbar
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full pointer-events-none opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="group flex shrink-0 items-center">
            <div className="relative h-12 w-12 overflow-hidden transition duration-300 group-hover:scale-105 group-hover:rotate-[2deg]">
              <Image
                src="/logo-calico.png"
                alt="Logo Associazione Calico ODV"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-1 whitespace-nowrap md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative shrink-0 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.06em] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${item.bg} ${item.text}`}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-x-2 bottom-1 h-[2px] scale-x-0 bg-black/20 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}

            <div
              ref={transparencyRef}
              className="relative shrink-0"
              onMouseEnter={() => setIsTransparencyOpen(true)}
              onMouseLeave={() => setIsTransparencyOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsTransparencyOpen((prev) => !prev)}
                className="group inline-flex items-center gap-1 bg-[#F3E6CC] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.06em] text-black shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                aria-expanded={isTransparencyOpen}
                aria-haspopup="true"
              >
                Trasparenza
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    isTransparencyOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`absolute right-0 top-full z-[60] min-w-[240px] pt-2 transition-all duration-200 ${
                  isTransparencyOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-1 opacity-0'
                }`}
              >
                <span className="absolute left-0 right-0 top-0 h-2" />

                <div className="overflow-hidden rounded-2xl border border-[#e8dcc7] bg-white/95 shadow-[0_20px_50px_rgba(0,0,0,0.14)] backdrop-blur-xl">
                  <ul className="py-2">
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
              </div>
            </div>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-[#E4B15A] px-4 py-2 text-sm font-bold uppercase tracking-[0.06em] text-black shadow-sm transition duration-300 hover:scale-[1.02] hover:shadow-md md:hidden"
            aria-label="Apri menù"
          >
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1F3B2D] text-white">
              <PawPrint size={16} />
            </span>
            Menù
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[70] bg-black/35 backdrop-blur-[3px] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed right-0 top-0 z-[80] h-full w-[88%] max-w-[370px] bg-[#FCFBF8]/95 shadow-[0_25px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-transform duration-500 ease-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#e8dcc7] px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E4B15A] text-black shadow-sm">
              <PawPrint size={18} />
            </span>
            <span className="text-sm font-black uppercase tracking-[0.08em] text-black">
              Menù
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e8dcc7] bg-white text-black transition duration-300 hover:rotate-90 hover:bg-black hover:text-white"
            aria-label="Chiudi menù"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="h-[calc(100%-73px)] overflow-y-auto px-4 py-4">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-[0.06em] shadow-sm transition duration-300 hover:translate-x-1 hover:shadow-md ${item.bg} ${item.text}`}
              >
                {item.label}
              </Link>
            ))}

            <div className="overflow-hidden rounded-2xl border border-[#e8dcc7] bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setIsMobileTransparencyOpen((prev) => !prev)}
                className="flex w-full items-center justify-between bg-[#F3E6CC] px-4 py-3 text-sm font-bold uppercase tracking-[0.06em] text-black transition"
              >
                Trasparenza
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isMobileTransparencyOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isMobileTransparencyOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-70'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-[#e8dcc7] bg-white">
                    {transparencyItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsMobileTransparencyOpen(false)
                        }}
                        className="block px-4 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-black transition hover:bg-[#FCFBF8]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}