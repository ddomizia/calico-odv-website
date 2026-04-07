import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className="w-full bg-[#1F3B2D] text-white">

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">

          {/* LOGO + DESCRIZIONE */}
          <div>
            <div className="relative mb-5 h-20 w-20">
              <Image
                src="/logo-calico.png"
                alt="Associazione Calico ODV"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-sm leading-6 text-white/80">
              Associazione Calico ODV nasce nel 2021 e opera in tutto il Lazio,
              principalmente tra Roma e Nepi, occupandosi ogni giorno di recupero,
              cura e adozione consapevole di animali in difficoltà.
            </p>
          </div>

          {/* LINK UTILI */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#E4B15A]">
              Link utili
            </h4>

            <ul className="space-y-2 text-sm">
              <li><Link href="/adozioni" className="hover:text-[#E4B15A]">Adozioni gatti</Link></li>
              <li><Link href="/cani" className="hover:text-[#E4B15A]">Adozioni cani</Link></li>
              <li><Link href="/gatteria" className="hover:text-[#E4B15A]">La Gatteria</Link></li>
              <li><Link href="/conigli" className="hover:text-[#E4B15A]">Conigli</Link></li>
              <li><Link href="/consigli" className="hover:text-[#E4B15A]">Consigli</Link></li>
              <li><Link href="/sostienici" className="hover:text-[#E4B15A]">Sostienici</Link></li>
              <li><Link href="/diventa-volontario" className="hover:text-[#E4B15A]">Volontariato</Link></li>
              <li><Link href="/chi-siamo" className="hover:text-[#E4B15A]">Chi siamo</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* CONTATTI */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#E4B15A]">
              Contatti
            </h4>

            <div className="flex flex-col gap-3 text-sm">

              <a
                href="https://wa.me/393393501334"
                className="flex items-center gap-2 transition hover:text-[#25D366]"
              >
                <FaWhatsapp /> WhatsApp
              </a>

              <a
                href="#"
                className="flex items-center gap-2 transition hover:text-[#E4405F]"
              >
                <FaInstagram /> Instagram
              </a>

              <a
                href="#"
                className="flex items-center gap-2 transition hover:text-[#1877F2]"
              >
                <FaFacebookF /> Facebook
              </a>

              <a
                href="mailto:calicoassociazione@gmail.com"
                className="flex items-center gap-2 transition hover:text-[#E4B15A]"
              >
                <MdEmail /> calicoassociazione@gmail.com
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* COLLABORAZIONI */}
      <div className="border-t border-white/10 bg-[#F3E6CC] py-10">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C96B3C]">
              Collaborazioni & strumenti
            </p>

            <h3 className="mt-3 text-xl font-black text-black sm:text-2xl">
              Realtà e piattaforme con cui portiamo avanti il nostro lavoro
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-4">

            {/* VALLE GRANDE */}
            <a
              href="https://www.vallegrandecaniegatti.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center"
            >
              <img
                src="/vallegrande.png"
                alt="Valle Grande"
                className="h-14 object-contain grayscale opacity-70 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
            </a>

            {/* CATLIVES */}
            <a
              href="https://catlives.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center"
            >
              <img
                src="/catlives.svg"
                alt="CatLives"
                className="h-10 object-contain grayscale opacity-70 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
            </a>

            {/* EMPETHY (FIX VISIVO) */}
            {/* EMPETHY */}
{/* EMPETHY */}
<a
  href="https://empethy.it"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center justify-center"
>
  <img
    src="/logo-empethy.svg"
    alt="Empethy"
    className="h-10 object-contain opacity-70 invert transition duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:invert-0"
  />
</a>
            {/* TEAMING */}
            <a
              href="https://www.teaming.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center"
            >
              <img
                src="/logotipo_teaming.png"
                alt="Teaming"
                className="h-10 object-contain grayscale opacity-70 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
            </a>

          </div>

          <p className="mt-8 text-center text-xs text-gray-500">
            I loghi appartengono ai rispettivi proprietari.
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-[#1F3B2D] py-6">
        <div className="mx-auto max-w-7xl px-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Associazione Calico ODV · Tutti i diritti riservati
        </div>
      </div>

    </footer>
  )
}