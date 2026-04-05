'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Animal } from '@/app/adozioni/page'

type CatWithImage = Animal & {
  imageUrl?: string
}

const sexLabels: Record<string, string> = {
  male: 'Maschio',
  female: 'Femmina',
}

type AgeGroup = 'kitten' | 'adult' | 'senior'
type SexFilter = 'all' | 'male' | 'female'
type AgeFilter = 'all' | AgeGroup

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

function getAgeGroup(birthMonth?: number, birthYear?: number): AgeGroup {
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
    <div className="mb-6 md:mb-7">
      <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-4xl">
        <span className="text-black">{first} </span>
        <span className="text-[#E4B15A]">{second}</span>
      </h2>
    </div>
  )
}

function CatCard({ animal }: { animal: CatWithImage }) {
  return (
    <article className="overflow-hidden border border-gray-200 bg-white transition hover:shadow-md">
      <div className="relative h-56 bg-[#F6F1E7] sm:h-60">
        {animal.imageUrl ? (
          <Image
            src={animal.imageUrl}
            alt={animal.name}
            fill
            className="object-cover object-[center_20%]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            Nessuna immagine
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="mb-2 text-lg font-bold text-black sm:text-xl">{animal.name}</h3>

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

function QuickLink({
  href,
  label,
}: {
  href: string
  label: string
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-[#E4B15A] bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-black transition hover:bg-[#E4B15A]"
    >
      {label}
    </a>
  )
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition ${
        active
          ? 'bg-[#1F3B2D] text-white'
          : 'border border-black/10 bg-white text-black hover:bg-[#F3E6CC]'
      }`}
    >
      {children}
    </button>
  )
}

function Section({
  id,
  titleFirst,
  titleSecond,
  animals,
}: {
  id: string
  titleFirst: string
  titleSecond: string
  animals: CatWithImage[]
}) {
  const [visibleCount, setVisibleCount] = useState(8)

  useEffect(() => {
    setVisibleCount(8)
  }, [animals])

  if (!animals.length) return null

  const visibleAnimals = animals.slice(0, visibleCount)
  const hasMore = visibleCount < animals.length

  return (
    <section id={id} className="scroll-mt-28 mb-12 md:mb-14">
      <SectionTitle first={titleFirst} second={titleSecond} />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleAnimals.map((animal) => (
          <CatCard key={animal._id} animal={animal} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="inline-flex rounded-full bg-[#E4B15A] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:opacity-90"
          >
            Carica altro
          </button>
        </div>
      )}
    </section>
  )
}

export default function CatsAdoptionBrowser({
  animals,
}: {
  animals: CatWithImage[]
}) {
  const [nameQuery, setNameQuery] = useState('')
  const [sexFilter, setSexFilter] = useState<SexFilter>('all')
  const [ageFilter, setAgeFilter] = useState<AgeFilter>('all')

  const filteredAnimals = useMemo(() => {
    return animals.filter((animal) => {
      const matchesName = animal.name
        .toLowerCase()
        .includes(nameQuery.trim().toLowerCase())

      const matchesSex =
        sexFilter === 'all' ? true : animal.sex === sexFilter

      const catAgeGroup = getAgeGroup(animal.birthMonth, animal.birthYear)
      const matchesAge = ageFilter === 'all' ? true : catAgeGroup === ageFilter

      return matchesName && matchesSex && matchesAge
    })
  }, [animals, nameQuery, sexFilter, ageFilter])

  const kittens = filteredAnimals.filter(
    (animal) => getAgeGroup(animal.birthMonth, animal.birthYear) === 'kitten'
  )
  const adults = filteredAnimals.filter(
    (animal) => getAgeGroup(animal.birthMonth, animal.birthYear) === 'adult'
  )
  const seniors = filteredAnimals.filter(
    (animal) => getAgeGroup(animal.birthMonth, animal.birthYear) === 'senior'
  )

  const totalResults = filteredAnimals.length

  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 md:pb-14">
      <div className="mb-10 overflow-hidden border border-black/10 bg-white md:mb-12">
        <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E4B15A]">
              Esplora le adozioni
            </p>

            <h2 className="mt-3 text-2xl font-black uppercase leading-none text-black sm:text-3xl md:text-4xl">
              Cerca il gatto giusto per te
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-700 md:text-[15px]">
              Puoi navigare rapidamente tra cuccioli, adulti e anziani oppure
              filtrare per sesso, fascia d’età e nome.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <QuickLink href="#gatti-cuccioli" label="Gatti cuccioli" />
              <QuickLink href="#gatti-adulti" label="Gatti adulti" />
              <QuickLink href="#gatti-anziani" label="Gatti anziani" />
            </div>
          </div>

          <div className="rounded-2xl bg-[#FCFBF8] p-4 sm:p-5">
            <div>
              <label
                htmlFor="cat-search"
                className="text-xs font-bold uppercase tracking-wide text-black/70"
              >
                Cerca per nome
              </label>
              <input
                id="cat-search"
                type="text"
                value={nameQuery}
                onChange={(e) => setNameQuery(e.target.value)}
                placeholder="Scrivi il nome del gatto"
                className="mt-2 w-full border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[#E4B15A]"
              />
            </div>

            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wide text-black/70">
                Sesso
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <FilterButton active={sexFilter === 'all'} onClick={() => setSexFilter('all')}>
                  Tutti
                </FilterButton>
                <FilterButton active={sexFilter === 'male'} onClick={() => setSexFilter('male')}>
                  Maschi
                </FilterButton>
                <FilterButton active={sexFilter === 'female'} onClick={() => setSexFilter('female')}>
                  Femmine
                </FilterButton>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wide text-black/70">
                Età
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <FilterButton active={ageFilter === 'all'} onClick={() => setAgeFilter('all')}>
                  Tutti
                </FilterButton>
                <FilterButton active={ageFilter === 'kitten'} onClick={() => setAgeFilter('kitten')}>
                  Cuccioli
                </FilterButton>
                <FilterButton active={ageFilter === 'adult'} onClick={() => setAgeFilter('adult')}>
                  Adulti
                </FilterButton>
                <FilterButton active={ageFilter === 'senior'} onClick={() => setAgeFilter('senior')}>
                  Anziani
                </FilterButton>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-4">
              <p className="text-sm font-medium text-gray-700">
                {totalResults === 1 ? '1 risultato' : `${totalResults} risultati`}
              </p>

              <button
                type="button"
                onClick={() => {
                  setNameQuery('')
                  setSexFilter('all')
                  setAgeFilter('all')
                }}
                className="text-xs font-bold uppercase tracking-wide text-[#1F3B2D] transition hover:opacity-70"
              >
                Azzera filtri
              </button>
            </div>
          </div>
        </div>
      </div>

      {totalResults === 0 ? (
        <div className="border border-black/10 bg-white p-8 text-center">
          <p className="text-sm leading-6 text-gray-700">
            Nessun gatto corrisponde ai filtri selezionati.
          </p>
        </div>
      ) : (
        <>
          <Section
            id="gatti-cuccioli"
            titleFirst="Gatti"
            titleSecond="Cuccioli"
            animals={kittens}
          />
          <Section
            id="gatti-adulti"
            titleFirst="Gatti"
            titleSecond="Adulti"
            animals={adults}
          />
          <Section
            id="gatti-anziani"
            titleFirst="Gatti"
            titleSecond="Anziani"
            animals={seniors}
          />
        </>
      )}
    </section>
  )
}