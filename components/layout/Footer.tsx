import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#1F3B2D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        
        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-3 items-start">
          
          {/* LOGO GRANDE */}
          <div className="flex justify-start md:justify-center">
            <Image
              src="/logo-calico.png"
              alt="Associazione Calico ODV"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>

          {/* LINK UTILI */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-[#E4B15A]">
              Link utili
            </h4>

            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#E4B15A]">Home</Link></li>
              <li><Link href="/adozioni" className="hover:text-[#E4B15A]">Adozioni gatti</Link></li>
              <li><Link href="/cani" className="hover:text-[#E4B15A]">Adozioni cani</Link></li>
              <li><Link href="/adottati" className="hover:text-[#E4B15A]">Adottati</Link></li>
              <li><Link href="/consigli" className="hover:text-[#E4B15A]">Consigli</Link></li>
              <li><Link href="/sostienici" className="hover:text-[#E4B15A]">Sostienici</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#E4B15A]">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-[#E4B15A]">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* CONTATTI */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-[#E4B15A]">
              Contatti
            </h4>

            <div className="mt-4 space-y-3 text-sm text-white/80">
              
              <a
                href="mailto:calicoassociazione@gmail.com"
                className="flex items-center gap-2 hover:text-[#E4B15A]"
              >
                <Mail size={16} />
                calicoassociazione@gmail.com
              </a>

              <a
                href="tel:+393393501334"
                className="flex items-center gap-2 hover:text-[#E4B15A]"
              >
                <Phone size={16} />
                +39 339 350 1334
              </a>

              <a
                href="https://www.instagram.com/associazionecalico"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E4B15A]"
              >
                <FaInstagram size={16} />
                @associazionecalico
              </a>

              <a
                href="https://www.facebook.com/associazionecalico/?locale=it_IT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E4B15A]"
              >
                <FaFacebookF size={14} />
                Associazione Calico ODV
              </a>
            </div>
          </div>
        </div>

        {/* LINEA FINALE */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Associazione Calico ODV — Tutti i diritti riservati
        </div>
      </div>
    </footer>
  )
}