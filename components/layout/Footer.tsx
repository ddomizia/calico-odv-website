import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#E4B15A] text-black">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 items-start">
          {/* LINK UTILI */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-wide text-black/70">
              Link utili
            </h4>

            <ul className="mt-4 flex flex-col gap-2 text-sm md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-2">
              <li>
                <Link href="/privacy-policy" className="transition hover:opacity-70">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="transition hover:opacity-70">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTATTI */}
          <div className="text-center md:text-right">
            <h4 className="text-xs font-bold uppercase tracking-wide text-black/70">
              Contatti
            </h4>

            <div className="mt-4 space-y-3 text-sm text-black/80">
              <a
                href="mailto:calicoassociazione@gmail.com"
                className="flex items-center justify-center gap-2 transition hover:opacity-70 md:justify-end"
              >
                <Mail size={16} />
                <span className="break-all">calicoassociazione@gmail.com</span>
              </a>

              <a
                href="tel:+393393501334"
                className="flex items-center justify-center gap-2 transition hover:opacity-70 md:justify-end"
              >
                <Phone size={16} />
                +39 339 350 1334
              </a>

              <div className="flex items-center justify-center gap-4 pt-1 md:justify-end">
                <a
                  href="https://www.instagram.com/associazionecalico"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition hover:opacity-70"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="https://www.facebook.com/associazionecalico/?locale=it_IT"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="transition hover:opacity-70"
                >
                  <FaFacebookF size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-black/10 pt-4 text-center text-xs text-black/60">
          © {new Date().getFullYear()} Associazione Calico ODV
        </div>
      </div>
    </footer>
  )
}