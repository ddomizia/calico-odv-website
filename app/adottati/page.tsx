import Image from 'next/image'
import { client } from '../../sanity/lib/client'
import {
  adoptedAnimalsQuery,
  testimonialsQuery,
} from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'
import AdoptedAnimalsBrowser, {
  AdoptedAnimal,
  Testimonial,
} from './AdoptedAnimalsBrowser'

type AnimalFromSanity = {
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

export default async function AdottatiPage() {
  const [animals, testimonials] = await Promise.all([
    client.fetch<AnimalFromSanity[]>(adoptedAnimalsQuery),
    client.fetch<Testimonial[]>(testimonialsQuery),
  ])

  const mappedAnimals: AdoptedAnimal[] = animals.map((animal) => ({
    ...animal,
    imageUrl: animal.image
      ? urlFor(animal.image).width(900).height(900).url()
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
            Qui trovi gli animali che hanno già trovato una famiglia. Ogni
            adozione per noi è una gioia enorme e racconta il senso del lavoro
            che facciamo ogni giorno.
          </p>
        </div>

        <AdoptedAnimalsBrowser
          animals={mappedAnimals}
          testimonials={testimonials}
        />
      </section>
    </main>
  )
}