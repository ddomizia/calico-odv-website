'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { HeartPulse, Quote } from 'lucide-react'

export type AdoptedAnimal = {
  _id: string
  name: string
  slug?: {
    current: string
  }
  species?: 'cat' | 'dog'
  sex?: 'male' | 'female'
  birthMonth?: number
  birthYear?: number
  imageUrl?: string
  fivStatus?: 'positive' | 'negative' | 'not_tested'
  felvStatus?: 'positive' | 'negative' | 'not_tested'
  specialConditions?: string[]
}

export type Testimonial = {
  _id: string
  name: string
  role?: string
  quote: string
  relatedAnimalName?: string
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

const INITIAL_VISIBLE_CARDS = 12
const LOAD_MORE_CARDS = 12

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

function AdoptedCard({ animal }: { animal: AdoptedAnimal }) {
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
            className="object-cover object-[center_22%]"
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

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="relative overflow-hidden border border-black/10 bg-white p-5 sm:p-6">
      <div className="absolute right-4 top-4 text-[#E4B15A]/30">
        <Quote size={34} />
      </div>

      <div className="relative">
        <p className="text-sm leading-7 text-gray-700 md:text-[15px]">
          “{testimonial.quote}”
        </p>

        <div className="mt-5 border-t border-black/10 pt-4">
          <p className="text-sm font-black text-black">{testimonial.name}</p>

          {(testimonial.role || testimonial.relatedAnimalName) && (
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#C96B3C]">
              {testimonial.role}
              {testimonial.role && testimonial.relatedAnimalName ? ' · ' : ''}
              {testimonial.relatedAnimalName
                ? `Per ${testimonial.relatedAnimalName}`
                : ''}
            </p>
          )}
        </div>
      </div>
    </article>
  )
}

export default function AdoptedAnimalsBrowser({
  animals,
  testimonials,
}: {
  animals: AdoptedAnimal[]
  testimonials: Testimonial[]
}) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_CARDS)

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_CARDS)
  }, [animals])

  const visibleAnimals = useMemo(
    () => animals.slice(0, visibleCount),
    [animals, visibleCount]
  )

  const hasMore = visibleCount < animals.length

  return (
    <>
      {animals.length > 0 ? (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleAnimals.map((animal) => (
              <AdoptedCard key={animal._id} animal={animal} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_CARDS)}
                className="inline-flex rounded-full bg-[#E4B15A] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:opacity-90"
              >
                Carica altro
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="border border-gray-200 bg-white p-6 md:p-8">
          <p className="text-sm leading-6 text-gray-700">
            Al momento non ci sono ancora animali segnati come adottati.
          </p>
        </div>
      )}

      <section className="mt-14 md:mt-16">
        <div className="mb-8 max-w-4xl md:mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#C96B3C]">
            Le vostre parole
          </p>

          <h2 className="text-3xl font-black leading-none text-black sm:text-4xl md:text-5xl">
            I messaggi più belli che riceviamo
          </h2>

          <div className="mt-4 h-2 w-28 bg-[#E4B15A] md:mt-5 md:h-3 md:w-44" />

          <p className="mt-5 max-w-3xl text-sm leading-6 text-gray-700 md:mt-6 md:text-[15px]">
            Alcune parole che ci accompagnano e che raccontano quanto possa
            essere importante il legame che nasce tra gli animali, le famiglie
            e chi li segue ogni giorno.
          </p>
        </div>

        {testimonials.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial._id}
                testimonial={testimonial}
              />
            ))}
          </div>
        ) : (
          <div className="border border-black/10 bg-white p-6 md:p-8">
            <p className="text-sm leading-6 text-gray-700">
              Presto troverai qui alcuni dei messaggi più belli che riceviamo da
              adottanti e sostenitori.
            </p>
          </div>
        )}
      </section>
    </>
  )
}