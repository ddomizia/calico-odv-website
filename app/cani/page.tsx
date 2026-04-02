import Image from 'next/image'
import Link from 'next/link'
import { client } from '../../sanity/lib/client'
import { allDogsQuery } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'

type Dog = {
  _id: string
  name: string
  slug?: {
    current: string
  }
  sex?: 'male' | 'female'
  ageValue?: number
  ageUnit?: 'months' | 'years'
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
    <div className="mb-7">
      <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
        <span className="text-black">{first} </span>
        <span className="text-[#E4B15A]">{second}</span>
      </h2>
    </div>
  )
}

function DogCard({ dog }: { dog: Dog & { imageUrl?: string } }) {
  return (
    <article className="overflow-hidden border border-gray-200 bg-white">
      <div className="relative h-52 bg-[#F6F1E7]">
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
        <h3 className="mb-2 text-xl font-bold text-black">{dog.name}</h3>

        <p className="mb-2 text-sm leading-6 text-gray-700">
          {dog.sex ? sexLabels[dog.sex] : 'Sesso n.d.'}
          {' | '}
          {formatAge(dog.ageValue, dog.ageUnit)}
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
    <section className="mb-14">
      <SectionTitle first={titleFirst} second={titleSecond} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dogs.map((dog) => (
          <DogCard key={dog._id} dog={dog} />
        ))}
      </div>
    </section>
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
    (dog) => getAgeGroup(dog.ageValue, dog.ageUnit) === 'puppy'
  )
  const adults = mappedDogs.filter(
    (dog) => getAgeGroup(dog.ageValue, dog.ageUnit) === 'adult'
  )
  const seniors = mappedDogs.filter(
    (dog) => getAgeGroup(dog.ageValue, dog.ageUnit) === 'senior'
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
  <span className="text-[#E4B15A]">Cani</span>
</h1>

          <div className="mt-5 h-3 w-44 bg-[#E4B15A]" />
        </div>
      </section>

      <div className="w-full mb-16">
        <div className="space-y-0">
          <div className="grid min-h-[340px] grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center bg-white p-8 text-black md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Tutti i cani che cercano casa
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/75">
                Qui sotto puoi vedere tutti i cani a cui stiamo cercando di
                trovare casa, divisi in cuccioli, adulti e anziani per aiutarti
                a orientarti meglio.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-black/75">
                In ogni scheda troverai il rimando alla pagina del cane su
                Empethy per procedere con la richiesta di adozione oppure per
                chiederci ulteriori informazioni.
              </p>
            </div>

            <div className="relative min-h-[260px]">
              <Image
                src="/cane-1.jpg"
                alt="Cani in adozione"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid min-h-[340px] grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[260px]">
              <Image
                src="/cane-2.jpg"
                alt="Adozione tramite Empethy"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center bg-[#E4B15A] p-8 text-black md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Le adozioni avvengono tramite Empethy
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
        <Section titleFirst="Cani" titleSecond="Cuccioli" dogs={puppies} />
        <Section titleFirst="Cani" titleSecond="Adulti" dogs={adults} />
        <Section titleFirst="Cani" titleSecond="Anziani" dogs={seniors} />
      </section>
    </main>
  )
}