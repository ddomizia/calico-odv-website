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
    <article className="overflow-hidden border border-gray-200 bg-white transition hover:shadow-md">
      <div className="relative h-52 bg-[#F6F1E7] sm:h-56">
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
            className={`inline-flex px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] sm:text-[11px] ${speciesBadgeClass}`}
          >
            {speciesLabel}
          </span>
        </div>

        <div className="absolute right-3 top-3">
          <span className="inline-flex bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-black sm:text-[11px]">
            Adottato
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-black sm:text-xl">{animal.name}</h3>

        {(hasPositiveViralStatus || hasSpecialNeeds) && (
          <div className="mt-3 flex flex-wrap gap-2">
            {hasPositiveViralStatus && viralBadgeLabel && (
              <span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-red-700 sm:text-[11px]">
                <HeartPulse size={12} />
                {viralBadgeLabel}
              </span>
            )}

            {hasSpecialNeeds && (
              <span className="inline-flex items-center gap-1 rounded-full border border-[#E4B15A]/50 bg-[#FDF6E8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#C96B3C] sm:text-[11px]">
                <HeartPulse size={12} />
                Adozione del cuore
              </span>
            )}
          </div>
        )}

        <p className="mt-3 text-sm leading-6 text-gray-700">
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
      <section className="relative min-h-[360px] overflow-hidden sm:min-h-[400px] md:min-h-[420px]">
        <Image
          src="/home-hero.jpg"
          alt="Animali adottati"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center px-6 py-14 sm:min-h-[400px] md:min-h-[420px] md:py-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-7xl">
              <span className="text-white">Ado</span>
              <span className="text-[#E4B15A]">ttati</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="mb-10 max-w-4xl md:mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#E4B15A]">
            Associazione Calico ODV
          </p>

          <h2 className="text-3xl font-black leading-none text-black sm:text-4xl md:text-5xl">
            Chi ha trovato una nuova casa
          </h2>

          <div className="mt-4 h-2 w-28 bg-[#E4B15A] md:mt-5 md:h-3 md:w-44" />

          <p className="mt-5 max-w-3xl text-sm leading-6 text-gray-700 md:mt-6 md:text-[15px]">
            Qui trovi gli animali che hanno già trovato una famiglia. Ogni adozione
            per noi è una gioia enorme e racconta il senso del lavoro che facciamo
            ogni giorno.
          </p>
        </div>

        {mappedAnimals.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mappedAnimals.map((animal) => (
              <AdoptedCard key={animal._id} animal={animal} />
            ))}
          </div>
        ) : (
          <div className="border border-gray-200 bg-white p-6 md:p-8">
            <p className="text-sm leading-6 text-gray-700">
              Al momento non ci sono ancora animali segnati come adottati.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}