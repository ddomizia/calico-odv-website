import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { client } from '../../sanity/lib/client'
import { allDogsQuery } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adozioni cani',
  description:
    'Scopri i cani in adozione seguiti da Associazione Calico ODV e i percorsi di adozione consapevole.',
  alternates: {
    canonical: '/cani',
  },
}

type Dog = {
  _id: string
  name: string
  slug?: {
    current: string
  }
  sex?: 'male' | 'female'
  birthMonth?: number
  birthYear?: number
  image?: any
  dogSize?: 'small' | 'medium' | 'large'
  dogWeight?: number
  dogBreed?: string
  dogCoatLength?: 'short' | 'medium' | 'long'
  isCrossbreedDog?: boolean
  crossbreedDogDetails?: string
  dogDewormed?: boolean
  dogMicrochipped?: boolean
  dogVaccinated?: boolean
  dogSterilized?: boolean
}

const sexLabels: Record<string, string> = {
  male: 'Maschio',
  female: 'Femmina',
}

const dogSizeLabels: Record<string, string> = {
  small: 'Taglia piccola',
  medium: 'Taglia media',
  large: 'Taglia grande',
}

const dogBreedLabels: Record<string, string> = {
  mixed: 'Meticcio',
  labrador: 'Labrador Retriever',
  golden: 'Golden Retriever',
  german_shepherd: 'Pastore Tedesco',
  border_collie: 'Border Collie',
  jack_russell: 'Jack Russell Terrier',
  bulldog: 'Bulldog',
  beagle: 'Beagle',
  poodle: 'Barboncino',
  chihuahua: 'Chihuahua',
  cocker: 'Cocker Spaniel',
  setter: 'Setter',
  dalmatian: 'Dalmata',
  rottweiler: 'Rottweiler',
  dobermann: 'Dobermann',
  husky: 'Husky Siberiano',
  shih_tzu: 'Shih Tzu',
  maltese: 'Maltese',
  volpino: 'Volpino',
  akita: 'Akita',
  cane_corso: 'Cane Corso',
  dachshund: 'Bassotto',
  pug: 'Carlino',
  weimaraner: 'Weimaraner',
  great_dane: 'Alano',
  pitbull: 'Pitbull',
  amstaff: 'American Staffordshire Terrier',
  segugio: 'Segugio',
  greyhound: 'Levriero',
  other: 'Altro / Non definita',
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

  if (ageInYears <= 1) return 'puppy'
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
    <div className="mb-6 md:mb-7">
      <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-4xl">
        <span className="text-black">{first} </span>
        <span className="text-[#E4B15A]">{second}</span>
      </h2>
    </div>
  )
}

function DogCard({ dog }: { dog: Dog & { imageUrl?: string } }) {
  return (
    <article className="overflow-hidden border border-gray-200 bg-white transition hover:shadow-md">
      <div className="relative h-48 bg-[#F6F1E7] sm:h-52">
        {dog.imageUrl ? (
          <Image
            src={dog.imageUrl}
            alt={dog.name}
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
        <h3 className="mb-2 text-lg font-bold text-black sm:text-xl">{dog.name}</h3>

        <p className="mb-2 text-sm leading-6 text-gray-700">
          {dog.sex ? sexLabels[dog.sex] : 'Sesso n.d.'}
          {' | '}
          {formatAge(dog.birthMonth, dog.birthYear)}
        </p>

        <p className="mb-4 text-sm leading-6 text-gray-600">
          {dog.dogSize ? dogSizeLabels[dog.dogSize] : 'Taglia n.d.'}
          {dog.dogWeight ? ` | ${dog.dogWeight} kg` : ''}
          {dog.dogBreed
            ? ` | ${dogBreedLabels[dog.dogBreed] ?? dog.dogBreed}`
            : ''}
        </p>

        {dog.slug?.current && (
          <Link
            href={`/adozioni/${dog.slug.current}`}
            className="inline-flex border border-black px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black transition hover:bg-black hover:text-white"
          >
            Scopri di più su {dog.name}
          </Link>
        )}
      </div>
    </article>
  )
}

function Section({
  titleFirst,
  titleSecond,
  dogs,
}: {
  titleFirst: string
  titleSecond: string
  dogs: (Dog & { imageUrl?: string })[]
}) {
  if (!dogs.length) return null

  return (
    <section className="mb-12 md:mb-14">
      <SectionTitle first={titleFirst} second={titleSecond} />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dogs.map((dog) => (
          <DogCard key={dog._id} dog={dog} />
        ))}
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 overflow-hidden bg-white md:min-h-[340px] md:grid-cols-2">
        <div className="flex flex-col justify-center p-6 text-black sm:p-8 md:p-12">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            Tutti i cani che cercano casa
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-black/75 md:text-[15px]">
            Qui sotto puoi vedere tutti i cani a cui stiamo cercando di
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
            src="/cane-1.jpg"
            alt="Cani in adozione"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 overflow-hidden md:min-h-[340px] md:grid-cols-2">
        <div className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[340px]">
          <Image
            src="/cane-2.jpg"
            alt="Adozione tramite Empethy"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center bg-[#E4B15A] p-6 text-black sm:p-8 md:p-12">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            Le adozioni avvengono tramite Empethy
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

export default async function CaniPage() {
  const dogs = await client.fetch<Dog[]>(allDogsQuery)

  const mappedDogs = dogs.map((dog) => ({
    ...dog,
    imageUrl: dog.image
      ? urlFor(dog.image).width(700).height(700).url()
      : undefined,
  }))

  const puppies = mappedDogs.filter(
    (dog) => getAgeGroup(dog.birthMonth, dog.birthYear) === 'puppy'
  )
  const adults = mappedDogs.filter(
    (dog) => getAgeGroup(dog.birthMonth, dog.birthYear) === 'adult'
  )
  const seniors = mappedDogs.filter(
    (dog) => getAgeGroup(dog.birthMonth, dog.birthYear) === 'senior'
  )

  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="mb-10 max-w-5xl md:mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#E4B15A]">
            Associazione Calico ODV
          </p>

          <h1 className="text-4xl font-black uppercase leading-none sm:text-5xl md:text-8xl">
            <span className="text-black">Adozioni </span>
            <span className="text-[#E4B15A]">Cani</span>
          </h1>

          <div className="mt-4 h-2 w-28 bg-[#E4B15A] md:mt-5 md:h-3 md:w-44" />
        </div>
      </section>

      <div className="mb-12 w-full md:mb-16">
        <IntroSection />
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-12 md:pb-14">
        <Section titleFirst="Cani" titleSecond="Cuccioli" dogs={puppies} />
        <Section titleFirst="Cani" titleSecond="Adulti" dogs={adults} />
        <Section titleFirst="Cani" titleSecond="Anziani" dogs={seniors} />
      </section>
    </main>
  )
}