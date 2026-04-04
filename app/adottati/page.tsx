import Image from 'next/image'
import { HeartPulse } from 'lucide-react'
import { client } from '../../sanity/lib/client'
import { adoptedAnimalsQuery } from '../../sanity/lib/queries'
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
  specialConditions?: string[]
}

const sexLabels: Record<string, string> = {
  male: 'Maschio',
  female: 'Femmina',
}

const speciesLabels: Record<string, string> = {
  cat: 'Gatto',
  dog: 'Cane',
}

const speciesBadgeClasses: Record<string, string> = {
  cat: 'bg-[#E4B15A] text-black',
  dog: 'bg-[#1F3B2D] text-white',
}

function formatAgeFromBirth(birthMonth?: number, birthYear?: number) {
  if (!birthMonth || !birthYear) return 'Età n.d.'

  const now = new Date()
  const currentMonth = now.getMonth() + 1
  const currentYear = now.getFullYear()

  const totalMonths =
    (currentYear - birthYear) * 12 + (currentMonth - birthMonth)

  if (totalMonths < 0) return 'Età n.d.'

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  if (years === 0) {
    return `${months} ${months === 1 ? 'mese' : 'mesi'}`
  }

  if (months === 0) {
    return `${years} ${years === 1 ? 'anno' : 'anni'}`
  }

  return `${years} ${years === 1 ? 'anno' : 'anni'} e ${months} ${months === 1 ? 'mese' : 'mesi'}`
}

function AdoptedCard({ animal }: { animal: Animal & { imageUrl?: string } }) {
  const speciesLabel = animal.species ? speciesLabels[animal.species] : 'Animale'
  const speciesBadgeClass = animal.species
    ? speciesBadgeClasses[animal.species]
    : 'bg-black text-white'

  const hasPositiveViralStatus =
    animal.species === 'cat' &&
    (animal.fivStatus === 'positive' || animal.felvStatus === 'positive')

  const viralBadgeLabel =
    animal.fivStatus === 'positive' && animal.felvStatus === 'positive'
      ? 'FIV+ / FeLV+'
      : animal.fivStatus === 'positive'
      ? 'FIV+'
      : animal.felvStatus === 'positive'
      ? 'FeLV+'
      : null

  const hasSpecialNeeds =
    animal.species === 'cat' &&
    animal.specialConditions &&
    animal.specialConditions.length > 0

  return (
    <article className="overflow-hidden border border-gray-200 bg-white">
      <div className="relative h-56 bg-[#F6F1E7]">
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

        <div className="absolute left-3 top-3">
          <span
            className={`inline-flex px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${speciesBadgeClass}`}
          >
            {speciesLabel}
          </span>
        </div>

        <div className="absolute right-3 top-3">
          <span className="inline-flex bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-black">
            Adottato
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <h3 className="text-xl font-bold text-black">{animal.name}</h3>

          {hasPositiveViralStatus && viralBadgeLabel && (
            <span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-red-700">
              <HeartPulse size={12} />
              {viralBadgeLabel}
            </span>
          )}

          {hasSpecialNeeds && (
            <span className="inline-flex items-center gap-1 rounded-full border border-[#E4B15A]/50 bg-[#FDF6E8] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#C96B3C]">
              <HeartPulse size={12} />
              Adozione del cuore
            </span>
          )}
        </div>

        <p className="text-sm leading-6 text-gray-700">
          {animal.sex ? sexLabels[animal.sex] : 'Sesso n.d.'}
          {' | '}
          {formatAgeFromBirth(animal.birthMonth, animal.birthYear)}
        </p>
      </div>
    </article>
  )
}

export default async function AdottatiPage() {
  const animals = await client.fetch<Animal[]>(adoptedAnimalsQuery)

  const mappedAnimals = animals.map((animal) => ({
    ...animal,
    imageUrl: animal.image
      ? urlFor(animal.image).width(800).height(800).url()
      : undefined,
  }))

  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="relative min-h-[420px] overflow-hidden">
        <Image
          src="/home-hero.jpg"
          alt="Animali adottati"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
              <span className="text-white">Ado</span>
              <span className="text-[#E4B15A]">ttati</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-12 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#E4B15A]">
            Associazione Calico ODV
          </p>

          <h2 className="text-4xl font-black leading-none text-black md:text-5xl">
            Chi ha trovato una nuova casa
          </h2>

          <div className="mt-5 h-3 w-44 bg-[#E4B15A]" />

          <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-700 md:text-[15px]">
            Qui trovi gli animali che hanno già trovato una famiglia. Ogni adozione
            per noi è una gioia enorme e racconta il senso del lavoro che facciamo
            ogni giorno.
          </p>
        </div>

        {mappedAnimals.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mappedAnimals.map((animal) => (
              <AdoptedCard key={animal._id} animal={animal} />
            ))}
          </div>
        ) : (
          <div className="border border-gray-200 bg-white p-8">
            <p className="text-sm leading-6 text-gray-700">
              Al momento non ci sono ancora animali segnati come adottati.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}