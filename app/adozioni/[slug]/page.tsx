import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, HeartPulse, MapPin, Mars, Venus } from 'lucide-react'
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
  age?: string
  hostLocation?: string
  description?: string
  image?: any
  fivStatus?: 'positive' | 'negative' | 'not_tested'
  felvStatus?: 'positive' | 'negative' | 'not_tested'
  specialConditions?: string[]
  healthNotes?: string
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

  const infoItems = [
    animal.species === 'cat' && animal.fivStatus
      ? {
          key: 'fiv',
          icon: <HeartPulse size={17} className="text-red-500" />,
          text: `FIV ${statusLabels[animal.fivStatus]}`,
        }
      : null,
    animal.species === 'cat' && animal.felvStatus
      ? {
          key: 'felv',
          icon: <HeartPulse size={17} className="text-red-500" />,
          text: `FeLV ${statusLabels[animal.felvStatus]}`,
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
    animal.age
      ? {
          key: 'age',
          icon: <Calendar size={17} className="text-green-700" />,
          text: `${animal.age} anni`,
        }
      : null,
  ].filter(Boolean) as { key: string; icon: React.ReactNode; text: string }[]

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href="/adozioni"
          className="mb-8 inline-flex text-sm text-gray-600 transition hover:text-black"
        >
          ← Torna alle adozioni
        </Link>

        <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr]">
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
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.text}</span>
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
                <p className="text-[15px] leading-7 whitespace-pre-line text-gray-800">
                  {animal.description}
                </p>
              )}

              {animal.healthNotes && (
                <p className="mt-4 text-[15px] leading-7 text-gray-700">
                  {animal.healthNotes}
                </p>
              )}

              {animal.specialConditions && animal.specialConditions.length > 0 && (
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
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
  <p className="mb-4 text-base font-medium text-black">
  Vuoi adottare <span className="font-semibold">{animal.name}</span> o chiederci maggiori informazioni? Scrivici su Whatsapp, Instagram, Facebook o inviaci una mail, risponderemo il prima possibile!
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
</div>
          </div>
        </div>
      </section>
    </main>
  )
}