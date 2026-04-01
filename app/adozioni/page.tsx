import Image from 'next/image'
import Link from 'next/link'
import { client } from '../../sanity/lib/client'
import { allAnimalsQuery } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'

type Animal = {
  _id: string
  name: string
  slug?: {
    current: string
  }
  sex?: 'male' | 'female'
  ageValue?: number
  ageUnit?: 'months' | 'years'
  image?: any
  fivStatus?: 'positive' | 'negative' | 'not_tested'
  felvStatus?: 'positive' | 'negative' | 'not_tested'
}

const sexLabels: Record<string, string> = {
  male: 'Maschio',
  female: 'Femmina',
}

const statusLabels: Record<string, string> = {
  positive: '+',
  negative: '-',
  not_tested: 'n.t.',
}

function formatAge(ageValue?: number, ageUnit?: 'months' | 'years') {
  if (ageValue === undefined || ageValue === null) return 'Età n.d.'

  if (ageUnit === 'months') {
    return `${ageValue} ${ageValue === 1 ? 'mese' : 'mesi'}`
  }

  return `${ageValue} ${ageValue === 1 ? 'anno' : 'anni'}`
}

function getAgeInYears(ageValue?: number, ageUnit?: 'months' | 'years') {
  if (ageValue === undefined || ageValue === null) return null

  if (ageUnit === 'months') {
    return ageValue / 12
  }

  return ageValue
}

function getAgeGroup(ageValue?: number, ageUnit?: 'months' | 'years') {
  const ageInYears = getAgeInYears(ageValue, ageUnit)

  if (ageInYears === null) return 'adult'
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
          {formatAge(animal.ageValue, animal.ageUnit)}
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
  const animals = await client.fetch<Animal[]>(allAnimalsQuery)

  const mappedAnimals = animals.map((animal) => ({
    ...animal,
    imageUrl: animal.image
      ? urlFor(animal.image).width(700).height(700).url()
      : undefined,
  }))

  const kittens = mappedAnimals.filter(
    (animal) => getAgeGroup(animal.ageValue, animal.ageUnit) === 'kitten'
  )
  const adults = mappedAnimals.filter(
    (animal) => getAgeGroup(animal.ageValue, animal.ageUnit) === 'adult'
  )
  const seniors = mappedAnimals.filter(
    (animal) => getAgeGroup(animal.ageValue, animal.ageUnit) === 'senior'
  )

  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#E4B15A]">
            Associazione Calico ODV
          </p>

          <h1 className="text-6xl font-black uppercase leading-none md:text-8xl">
            <span className="text-black">Ado</span>
            <span className="text-[#E4B15A]">zioni</span>
          </h1>

          <div className="mt-5 h-3 w-44 bg-[#E4B15A]" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-700">
            Qui puoi conoscere i nostri gatti in cerca di casa. Li abbiamo divisi
            in cuccioli, adulti e anziani per aiutarti a trovare più facilmente
            il compagno giusto.
          </p>
        </div>

        <Section titleFirst="Gatti" titleSecond="Cuccioli" animals={kittens} />
        <Section titleFirst="Gatti" titleSecond="Adulti" animals={adults} />
        <Section titleFirst="Gatti" titleSecond="Anziani" animals={seniors} />
      </section>
    </main>
  )
}