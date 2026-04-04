import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { client } from '../../sanity/lib/client'
import { availableCatsQuery } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'

type Animal = {
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

const sexLabels: Record<string, string> = {
  male: 'Maschio',
  female: 'Femmina',
}

function getAgeParts(birthMonth?: number, birthYear?: number) {
  if (!birthMonth || !birthYear) return null

  const now = new Date()
  const currentMonth = now.getMonth() + 1
  const currentYear = now.getFullYear()

  const totalMonths = (currentYear - birthYear) * 12 + (currentMonth - birthMonth)

  if (totalMonths < 0) return null

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  return { years, months, totalMonths }
}

function formatAge(birthMonth?: number, birthYear?: number) {
  const age = getAgeParts(birthMonth, birthYear)

  if (!age) return 'Età n.d.'

  const { years, months } = age

  if (years === 0) {
    return `${months} ${months === 1 ? 'mese' : 'mesi'}`
  }

  if (months === 0) {
    return `${years} ${years === 1 ? 'anno' : 'anni'}`
  }

  return `${years} ${years === 1 ? 'anno' : 'anni'} e ${months} ${months === 1 ? 'mese' : 'mesi'}`
}

function getAgeGroup(birthMonth?: number, birthYear?: number) {
  const age = getAgeParts(birthMonth, birthYear)

  if (!age) return 'adult'

  const ageInYears = age.totalMonths / 12

  if (ageInYears <= 1) return 'kitten'
  if (ageInYears >= 10) return 'senior'
  return 'adult'
}

function SectionTitle({
  first,
  second,
}: {
  first: string
  second: string
}) {
  return (
    <div className="mb-7">
      <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
        <span className="text-black">{first} </span>
        <span className="text-[#E4B15A]">{second}</span>
      </h2>
    </div>
  )
}

function CatCard({ animal }: { animal: Animal & { imageUrl?: string } }) {
  return (
    <article className="overflow-hidden border border-gray-200 bg-white">
      <div className="relative h-52 bg-[#F6F1E7]">
        {animal.imageUrl ? (
          <Image
            src={animal.imageUrl}
            alt={animal.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            Nessuna immagine
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold text-black">{animal.name}</h3>

        <p className="mb-4 text-sm leading-6 text-gray-700">
          {animal.sex ? sexLabels[animal.sex] : 'Sesso n.d.'}
          {' | '}
          {formatAge(animal.birthMonth, animal.birthYear)}
        </p>

        {animal.slug?.current && (
          <Link
            href={`/adozioni/${animal.slug.current}`}
            className="inline-flex border border-black px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black transition hover:bg-black hover:text-white"
          >
            Scopri di più su {animal.name}
          </Link>
        )}
      </div>
    </article>
  )
}

function Section({
  titleFirst,
  titleSecond,
  animals,
}: {
  titleFirst: string
  titleSecond: string
  animals: (Animal & { imageUrl?: string })[]
}) {
  if (!animals.length) return null

  return (
    <section className="mb-14">
      <SectionTitle first={titleFirst} second={titleSecond} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {animals.map((animal) => (
          <CatCard key={animal._id} animal={animal} />
        ))}
      </div>
    </section>
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

  const kittens = mappedAnimals.filter(
    (animal) => getAgeGroup(animal.birthMonth, animal.birthYear) === 'kitten'
  )
  const adults = mappedAnimals.filter(
    (animal) => getAgeGroup(animal.birthMonth, animal.birthYear) === 'adult'
  )
  const seniors = mappedAnimals.filter(
    (animal) => getAgeGroup(animal.birthMonth, animal.birthYear) === 'senior'
  )

  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-14 max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#E4B15A]">
            Associazione Calico ODV
          </p>

          <h1 className="text-6xl font-black uppercase leading-none md:text-8xl">
            <span className="text-black">Adozioni </span>
            <span className="text-[#E4B15A]">Gatti</span>
          </h1>

          <div className="mt-5 h-3 w-44 bg-[#E4B15A]" />
        </div>
      </section>

      <div className="mb-16 w-full">
        <div className="space-y-0">
          <div className="grid min-h-[340px] grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center bg-white p-8 text-black md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Tutti i gatti che cercano casa
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/75">
                Qui sotto puoi vedere tutti i gatti a cui stiamo cercando di
                trovare casa, divisi in cuccioli, adulti e anziani per aiutarti
                a orientarti meglio.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-black/75">
                Per maggiori informazioni sulle adozioni puoi contattarci
                direttamente: saremo felici di aiutarti e rispondere a qualsiasi
                dubbio.
              </p>

              <div className="mt-6 flex items-center gap-5">
                <a
                  href="https://wa.me/393393501334"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-[#25D366] transition hover:opacity-80"
                >
                  <FaWhatsapp size={26} />
                </a>

                <a
                  href="https://www.instagram.com/associazionecalico"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#E4405F] transition hover:opacity-80"
                >
                  <FaInstagram size={24} />
                </a>

                <a
                  href="https://www.facebook.com/associazionecalico/?locale=it_IT"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-[#1877F2] transition hover:opacity-80"
                >
                  <FaFacebookF size={22} />
                </a>

                <a
                  href="mailto:calicoassociazione@gmail.com"
                  aria-label="Email"
                  className="text-black transition hover:opacity-80"
                >
                  <MdEmail size={28} />
                </a>
              </div>
            </div>

            <div className="relative min-h-[260px]">
              <Image
                src="/gatto-5.jpg"
                alt="Gatti in adozione"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid min-h-[340px] grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[260px]">
              <Image
                src="/gatto-6.jpg"
                alt="Adozione tramite Empethy"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center bg-[#E4B15A] p-8 text-black md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Le adozioni avvengono anche tramite Empethy
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/85">
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
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <Section titleFirst="Gatti" titleSecond="Cuccioli" animals={kittens} />
        <Section titleFirst="Gatti" titleSecond="Adulti" animals={adults} />
        <Section titleFirst="Gatti" titleSecond="Anziani" animals={seniors} />
      </section>
    </main>
  )
}