import Image from 'next/image'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { client } from '../../sanity/lib/client'
import { availableCatsQuery } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'
import CatsAdoptionBrowser from '../adozioni/CatsAdoptionBrowser'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adozioni gatti',
  description:
    'Scopri i gatti in adozione seguiti da Associazione Calico ODV tra Roma, Nepi e il Lazio.',
  alternates: {
    canonical: '/adozioni',
  },
}

export type Animal = {
  _id: string
  name: string
  slug?: {
    current: string
  }
  species?: 'cat' | 'dog'
  sex?: 'male' | 'female'
  birthMonth?: number
  birthYear?: number
  image?: any
  fivStatus?: 'positive' | 'negative' | 'not_tested'
  felvStatus?: 'positive' | 'negative' | 'not_tested'
  adoptionStatus?: 'available' | 'adopted'
}

function IntroSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 overflow-hidden bg-white md:min-h-[340px] md:grid-cols-2">
        <div className="flex flex-col justify-center p-6 text-black sm:p-8 md:p-12">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            Tutti i gatti che cercano casa
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-black/75 md:text-[15px]">
            Qui sotto puoi vedere tutti i gatti a cui stiamo cercando di
            trovare casa, divisi in cuccioli, adulti e anziani per aiutarti
            a orientarti meglio.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-6 text-black/75 md:text-[15px]">
            Per maggiori informazioni sulle adozioni puoi contattarci
            direttamente: saremo felici di aiutarti e rispondere a qualsiasi
            dubbio.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/393393501334"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition hover:scale-105"
            >
              <FaWhatsapp size={22} />
            </a>

            <a
              href="https://www.instagram.com/associazionecalico"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#E4405F]/10 text-[#E4405F] transition hover:scale-105"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://www.facebook.com/associazionecalico/?locale=it_IT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2] transition hover:scale-105"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="mailto:calicoassociazione@gmail.com"
              aria-label="Email"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/5 text-black transition hover:scale-105"
            >
              <MdEmail size={22} />
            </a>
          </div>
        </div>

        <div className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[340px]">
          <Image
            src="/gatto-5.jpg"
            alt="Gatti in adozione"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 overflow-hidden md:min-h-[340px] md:grid-cols-2">
        <div className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[340px]">
          <Image
            src="/gatto-6.jpg"
            alt="Adozione tramite Empethy"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center bg-[#E4B15A] p-6 text-black sm:p-8 md:p-12">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            Le adozioni avvengono anche tramite Empethy
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-black/85 md:text-[15px]">
            Empethy è un portale dedicato alle adozioni consapevoli, pensato
            per aiutare associazioni e adottanti a incontrarsi in modo più
            semplice, chiaro e sicuro.
          </p>

          <div className="mt-5">
            <a
              href="https://www.empethy.it/organizzazioni/calico-odg-roma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#1F3B2D] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              Vai alla nostra pagina Empethy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default async function AdozioniPage() {
  const animals = await client.fetch<Animal[]>(availableCatsQuery)

  const mappedAnimals = animals.map((animal) => ({
    ...animal,
    imageUrl: animal.image
      ? urlFor(animal.image).width(700).height(700).url()
      : undefined,
  }))

  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="mb-10 max-w-5xl md:mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#E4B15A]">
            Associazione Calico ODV
          </p>

          <h1 className="text-4xl font-black uppercase leading-none sm:text-5xl md:text-8xl">
            <span className="text-black">Adozioni </span>
            <span className="text-[#E4B15A]">Gatti</span>
          </h1>

          <div className="mt-4 h-2 w-28 bg-[#E4B15A] md:mt-5 md:h-3 md:w-44" />
        </div>
      </section>

      <div className="mb-12 w-full md:mb-16">
        <IntroSection />
      </div>

      <CatsAdoptionBrowser animals={mappedAnimals} />
    </main>
  )
}