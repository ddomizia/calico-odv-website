import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  CakeSlice,
  HeartPulse,
  MapPin,
  Mars,
  Venus,
  ShieldCheck,
  Syringe,
  PawPrint,
  Cat,
  Ticket,
  Ruler,
  BadgeCheck,
  Scale,
  Dog,
} from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { client } from '../../../sanity/lib/client'
import { urlFor } from '../../../sanity/lib/image'
import { animalBySlugQuery } from '../../../sanity/lib/queries'

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
  hostLocation?: string
  description?: string
  image?: any
  empethyUrl?: string

  coatLength?: 'short' | 'medium' | 'long'
  breed?: string
  isCrossbreed?: boolean
  crossbreedDetails?: string
  dewormed?: boolean
  microchipped?: boolean
  vaccinated?: boolean
  sterilized?: boolean
  fivStatus?: 'positive' | 'negative' | 'not_tested'
  felvStatus?: 'positive' | 'negative' | 'not_tested'
  specialConditions?: string[]
  healthNotes?: string

  dogSize?: 'small' | 'medium' | 'large'
  dogWeight?: number
  dogCoatLength?: 'short' | 'medium' | 'long'
  dogBreed?: string
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

const statusLabels: Record<string, string> = {
  positive: '+',
  negative: '-',
  not_tested: 'non testato',
}

const coatLabels: Record<string, string> = {
  short: 'Pelo corto',
  medium: 'Pelo medio',
  long: 'Pelo lungo',
}

const dogSizeLabels: Record<string, string> = {
  small: 'Taglia piccola',
  medium: 'Taglia media',
  large: 'Taglia grande',
}

const breedLabels: Record<string, string> = {
  european: 'Europeo',
  tabby: 'Soriano / Tabby',
  persian: 'Persiano',
  maine_coon: 'Maine Coon',
  siamese: 'Siamese',
  ragdoll: 'Ragdoll',
  british_shorthair: 'British Shorthair',
  british_longhair: 'British Longhair',
  norwegian_forest: 'Norvegese delle Foreste',
  siberian: 'Siberiano',
  bengal: 'Bengala',
  birman: 'Sacro di Birmania',
  russian_blue: 'Blu di Russia',
  sphynx: 'Sphynx',
  abyssinian: 'Abissino',
  somali: 'Somalo',
  oriental: 'Orientale',
  devon_rex: 'Devon Rex',
  cornish_rex: 'Cornish Rex',
  exotic_shorthair: 'Exotic Shorthair',
  scottish_fold: 'Scottish Fold',
  scottish_straight: 'Scottish Straight',
  american_shorthair: 'American Shorthair',
  american_curl: 'American Curl',
  turkish_van: 'Turco Van',
  turkish_angora: 'Angora Turco',
  egyptian_mau: 'Egyptian Mau',
  ocicat: 'Ocicat',
  chartreux: 'Chartreux',
  burmese: 'Burmese',
  burmilla: 'Burmilla',
  tonkinese: 'Tonkinese',
  balinese: 'Balinese',
  himalayan: 'Himalayano',
  selkirk_rex: 'Selkirk Rex',
  laperm: 'LaPerm',
  snowshoe: 'Snowshoe',
  munchkin: 'Munchkin',
  savannah: 'Savannah',
  toyger: 'Toyger',
  singapura: 'Singapura',
  nebelung: 'Nebelung',
  korat: 'Korat',
  pixie_bob: 'Pixie-Bob',
  ragamuffin: 'Ragamuffin',
  mixed_unknown: 'Misto / Non definita',
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

const conditionLabels: Record<string, string> = {
  cieco: 'Cieco',
  ipovedente: 'Ipovedente',
  sordo: 'Sordo',
  tripode: 'Tripode',
  diabetico: 'Diabetico',
  insufficienza_renale: 'Insufficienza renale',
  terapia_in_corso: 'Terapia in corso',
  dieta_specifica: 'Dieta specifica',
  stomatite: 'Stomatite',
  atassico: 'Atassico',
  paralisi_parziale: 'Paralisi parziale',
}

function formatAgeFromBirth(birthMonth?: number, birthYear?: number) {
  if (!birthMonth || !birthYear) return null

  const now = new Date()
  const currentMonth = now.getMonth() + 1
  const currentYear = now.getFullYear()

  let totalMonths =
    (currentYear - birthYear) * 12 + (currentMonth - birthMonth)

  if (totalMonths < 0) return null

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

type DetailItem = {
  key: string
  icon: ReactNode
  text: string
  highlighted?: boolean
}

export default async function AnimalPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const animal = await client.fetch<Animal | null>(animalBySlugQuery, { slug })

  if (!animal) {
    notFound()
  }

  const formattedAge = formatAgeFromBirth(animal.birthMonth, animal.birthYear)

  const infoItems: DetailItem[] = [
    animal.species === 'cat' && animal.fivStatus
      ? {
          key: 'fiv',
          icon: (
            <HeartPulse
              size={17}
              className={
                animal.fivStatus === 'positive' ? 'text-red-600' : 'text-red-500'
              }
            />
          ),
          text: `FIV ${statusLabels[animal.fivStatus]}`,
          highlighted: animal.fivStatus === 'positive',
        }
      : null,
    animal.species === 'cat' && animal.felvStatus
      ? {
          key: 'felv',
          icon: (
            <HeartPulse
              size={17}
              className={
                animal.felvStatus === 'positive' ? 'text-red-600' : 'text-red-500'
              }
            />
          ),
          text: `FeLV ${statusLabels[animal.felvStatus]}`,
          highlighted: animal.felvStatus === 'positive',
        }
      : null,
    animal.sex
      ? {
          key: 'sex',
          icon:
            animal.sex === 'male' ? (
              <Mars size={17} className="text-blue-600" />
            ) : (
              <Venus size={17} className="text-pink-500" />
            ),
          text: sexLabels[animal.sex],
        }
      : null,
    formattedAge
      ? {
          key: 'age',
          icon: <CakeSlice size={17} className="text-green-700" />,
          text: formattedAge,
        }
      : null,
    animal.species === 'dog' && animal.dogSize
      ? {
          key: 'dogSize',
          icon: <Dog size={17} className="text-green-700" />,
          text: dogSizeLabels[animal.dogSize] ?? animal.dogSize,
        }
      : null,
    animal.species === 'dog' && animal.dogWeight
      ? {
          key: 'dogWeight',
          icon: <Scale size={17} className="text-green-700" />,
          text: `${animal.dogWeight} kg`,
        }
      : null,
  ].filter(Boolean) as DetailItem[]

  const extraIconClass = 'text-[#C96B3C]'

  const catExtraInfoItems: DetailItem[] = [
    animal.species === 'cat' && animal.coatLength
      ? {
          key: 'coatLength',
          icon: <Ruler size={17} className={extraIconClass} />,
          text: coatLabels[animal.coatLength] ?? animal.coatLength,
        }
      : null,
    animal.species === 'cat' && animal.breed
      ? {
          key: 'breed',
          icon: <Cat size={17} className={extraIconClass} />,
          text: `Razza: ${breedLabels[animal.breed] ?? animal.breed}`,
        }
      : null,
    animal.species === 'cat' && animal.isCrossbreed && animal.crossbreedDetails
      ? {
          key: 'crossbreedDetails',
          icon: <PawPrint size={17} className={extraIconClass} />,
          text: `Incrocio: ${animal.crossbreedDetails}`,
        }
      : animal.species === 'cat' && animal.isCrossbreed
      ? {
          key: 'crossbreed',
          icon: <PawPrint size={17} className={extraIconClass} />,
          text: 'Incrocio',
        }
      : null,
    animal.species === 'cat' && animal.dewormed
      ? {
          key: 'dewormed',
          icon: <ShieldCheck size={17} className={extraIconClass} />,
          text: 'Sverminato',
        }
      : null,
    animal.species === 'cat' && animal.microchipped
      ? {
          key: 'microchipped',
          icon: <Ticket size={17} className={extraIconClass} />,
          text: 'Microchip',
        }
      : null,
    animal.species === 'cat' && animal.vaccinated
      ? {
          key: 'vaccinated',
          icon: <Syringe size={17} className={extraIconClass} />,
          text: 'Vaccinato',
        }
      : null,
    animal.species === 'cat' && animal.sterilized
      ? {
          key: 'sterilized',
          icon: <BadgeCheck size={17} className={extraIconClass} />,
          text: 'Sterilizzato',
        }
      : null,
  ].filter(Boolean) as DetailItem[]

  const dogExtraInfoItems: DetailItem[] = [
    animal.species === 'dog' && animal.dogCoatLength
      ? {
          key: 'dogCoatLength',
          icon: <Ruler size={17} className={extraIconClass} />,
          text: coatLabels[animal.dogCoatLength] ?? animal.dogCoatLength,
        }
      : null,
    animal.species === 'dog' && animal.dogBreed
      ? {
          key: 'dogBreed',
          icon: <Dog size={17} className={extraIconClass} />,
          text: `Razza: ${dogBreedLabels[animal.dogBreed] ?? animal.dogBreed}`,
        }
      : null,
    animal.species === 'dog' && animal.isCrossbreedDog && animal.crossbreedDogDetails
      ? {
          key: 'crossbreedDogDetails',
          icon: <PawPrint size={17} className={extraIconClass} />,
          text: `Incrocio: ${animal.crossbreedDogDetails}`,
        }
      : animal.species === 'dog' && animal.isCrossbreedDog
      ? {
          key: 'crossbreedDog',
          icon: <PawPrint size={17} className={extraIconClass} />,
          text: 'Incrocio',
        }
      : null,
    animal.species === 'dog' && animal.dogDewormed
      ? {
          key: 'dogDewormed',
          icon: <ShieldCheck size={17} className={extraIconClass} />,
          text: 'Sverminato',
        }
      : null,
    animal.species === 'dog' && animal.dogMicrochipped
      ? {
          key: 'dogMicrochipped',
          icon: <Ticket size={17} className={extraIconClass} />,
          text: 'Microchip',
        }
      : null,
    animal.species === 'dog' && animal.dogVaccinated
      ? {
          key: 'dogVaccinated',
          icon: <Syringe size={17} className={extraIconClass} />,
          text: 'Vaccinato',
        }
      : null,
    animal.species === 'dog' && animal.dogSterilized
      ? {
          key: 'dogSterilized',
          icon: <BadgeCheck size={17} className={extraIconClass} />,
          text: 'Sterilizzato',
        }
      : null,
  ].filter(Boolean) as DetailItem[]

  const extraInfoItems =
    animal.species === 'dog' ? dogExtraInfoItems : catExtraInfoItems

  const hasCatExtraContent =
    animal.species === 'cat' &&
    (extraInfoItems.length > 0 ||
      animal.healthNotes ||
      (animal.specialConditions && animal.specialConditions.length > 0))

  const hasDogExtraContent =
    animal.species === 'dog' && extraInfoItems.length > 0

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href={animal.species === 'dog' ? '/cani' : '/adozioni'}
          className="mb-8 inline-flex text-sm text-gray-600 transition hover:text-black"
        >
          ← Torna alle adozioni
        </Link>

        <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="relative min-h-[520px] bg-gray-100">
              {animal.image ? (
                <Image
                  src={urlFor(animal.image).width(1400).height(1000).url()}
                  alt={animal.name}
                  fill
                  priority
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-400">
                  Nessuna immagine disponibile
                </div>
              )}
            </div>

            {(animal.fivStatus === 'positive' || animal.felvStatus === 'positive') && (
              <div className="mt-4">
                <Link
                  href="/consigli"
                  className="group flex items-center justify-between gap-4 border border-[#E4B15A]/40 bg-[#FCFBF8] px-5 py-4 transition hover:bg-[#F3E6CC]"
                >
                  <div>
                    <p className="text-sm font-semibold text-black">
                      Vuoi saperne di più sulla{' '}
                      {animal.fivStatus === 'positive' && animal.felvStatus === 'positive'
                        ? 'FIV e FeLV'
                        : animal.fivStatus === 'positive'
                        ? 'FIV'
                        : 'FeLV'}
                      ?
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      Scopri cosa significa e come adottare con consapevolezza
                    </p>
                  </div>

                  <span className="text-[#E4B15A] transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            )}
          </div>

          <div className="pt-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              {animal.species === 'cat' ? 'Gatto in adozione' : 'Cane in adozione'}
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-tight text-black md:text-5xl">
              {animal.name}
            </h1>

            {infoItems.length > 0 && (
              <div className="flex flex-wrap items-center gap-y-2 text-[15px] text-gray-800">
                {infoItems.map((item, index) => (
                  <div key={item.key} className="flex items-center">
                    <div
                      className={`flex items-center gap-2 ${
                        item.highlighted
                          ? 'rounded-full border border-red-200 bg-red-50 px-3 py-1'
                          : ''
                      }`}
                    >
                      {item.icon}
                      <span
                        className={item.highlighted ? 'font-semibold text-red-700' : ''}
                      >
                        {item.text}
                      </span>
                    </div>

                    {index < infoItems.length - 1 && (
                      <span className="mx-3 text-gray-300">|</span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {animal.hostLocation && (
              <div className="mt-4 flex items-start gap-2 text-[15px] text-gray-800">
                <MapPin size={17} className="mt-[2px] shrink-0 text-green-700" />
                <p>
                  <span className="font-semibold text-black">Struttura ospitante:</span>{' '}
                  {animal.hostLocation}
                </p>
              </div>
            )}

            <div className="mt-5 border-t border-gray-200 pt-5">
              {animal.description && (
                <p className="whitespace-pre-line text-[15px] leading-7 text-gray-800">
                  {animal.description}
                </p>
              )}
            </div>

            {(hasCatExtraContent || hasDogExtraContent) && (
              <div className="mt-6 border-y border-gray-200 py-6">
                {extraInfoItems.length > 0 && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {extraInfoItems.map((item) => (
                      <div
                        key={item.key}
                        className="flex items-center gap-2 text-[15px] text-gray-800"
                      >
                        {item.icon}
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {animal.species === 'cat' &&
                  animal.specialConditions &&
                  animal.specialConditions.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {animal.specialConditions.map((condition) => (
                        <span
                          key={condition}
                          className="inline-flex items-center border border-orange-200 bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-800"
                        >
                          {conditionLabels[condition] ?? condition}
                        </span>
                      ))}
                    </div>
                  )}

                {animal.species === 'cat' && animal.healthNotes && (
                  <p className="mt-5 text-[15px] leading-7 text-gray-700">
                    {animal.healthNotes}
                  </p>
                )}
              </div>
            )}

            <div className="mt-8 pt-1">
              <p className="mb-4 text-base font-medium leading-7 text-black">
                Vuoi adottare <span className="font-semibold">{animal.name}</span>?
                Registrati e compila il form su Empethy e ti faremo sapere nel più
                breve tempo possibile. Se hai dubbi o vuoi farci delle domande puoi
                scriverci sui nostri social, whatsapp o inviarci una mail!
              </p>

              <div className="flex items-center gap-5">
                <a
                  href="https://wa.me/39XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-[#25D366] transition hover:opacity-80"
                >
                  <FaWhatsapp size={26} />
                </a>

                <a
                  href="https://instagram.com/tuo_profilo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#E4405F] transition hover:opacity-80"
                >
                  <FaInstagram size={24} />
                </a>

                <a
                  href="https://facebook.com/tuapagina"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-[#1877F2] transition hover:opacity-80"
                >
                  <FaFacebookF size={22} />
                </a>

                <a
                  href="mailto:info@calicoodv.it"
                  aria-label="Email"
                  className="text-black transition hover:opacity-80"
                >
                  <MdEmail size={28} />
                </a>
              </div>

              {animal.empethyUrl && (
                <div className="mt-6">
                  <a
                    href={animal.empethyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex bg-[#E4B15A] px-5 py-3 text-sm font-bold text-black transition hover:opacity-90"
                  >
                    Adotta tramite Empethy
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}