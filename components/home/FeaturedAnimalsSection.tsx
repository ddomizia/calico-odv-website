import Image from 'next/image'
import {client} from '../../sanity/lib/client'
import {urlFor} from '../../sanity/lib/image'
import {featuredAnimalsQuery} from '../../sanity/lib/queries'

export default async function FeaturedAnimalsSection() {
  const animals = await client.fetch(featuredAnimalsQuery)

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">
        Animali in evidenza
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {animals.map((animal: any) => (
          <div
            key={animal._id}
            className="bg-white rounded-2xl shadow p-4"
          >
            {animal.image && (
              <img
                src={urlFor(animal.image).width(400).url()}
                alt={animal.name}
                className="rounded-xl mb-4"
              />
            )}

            <h3 className="text-xl font-semibold">
              {animal.name}
            </h3>

            <p className="text-sm text-gray-500">
              {animal.species === 'cat' ? 'Gatto' : 'Cane'} • {animal.age}
            </p>

            <p className="text-gray-700 mt-2">
              {animal.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}