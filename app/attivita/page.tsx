import Image from 'next/image'
import { client } from '../../sanity/lib/client'
import { allEventsQuery } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'
import {
  Calendar,
  Clock,
  MapPin,
  Info,
  ArrowUpRight,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

type EventItem = {
  _id: string
  title: string
  date?: string
  time?: string
  location?: string
  street?: string
  contacts?: string
  poster?: any
}

function formatItalianDate(dateString?: string) {
  if (!dateString) return ''

  const date = new Date(dateString)
  return new Intl.DateTimeFormat('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

function buildWhatsAppShareUrl(event: EventItem) {
  const eventUrl = `https://associazionecalico.it/attivita#event-${event._id}`

  const parts = [
    `Ti condivido questo evento di Associazione Calico ODV 🐾`,
    event.title,
    event.date ? `Data: ${formatItalianDate(event.date)}` : '',
    event.time ? `Orario: ${event.time}` : '',
    event.location
      ? `Luogo: ${event.location}${event.street ? `, ${event.street}` : ''}`
      : event.street
        ? `Luogo: ${event.street}`
        : '',
    eventUrl,
  ].filter(Boolean)

  return `https://wa.me/?text=${encodeURIComponent(parts.join('\n'))}`
}

function EventCard({
  event,
  isPast,
}: {
  event: EventItem & { imageUrl?: string }
  isPast?: boolean
}) {
  const shareUrl = buildWhatsAppShareUrl(event)

  return (
    <article
      id={`event-${event._id}`}
      className={`group overflow-hidden border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] ${
        isPast ? 'opacity-[0.96]' : ''
      }`}
    >
      <div className="relative h-64 bg-[#F6F1E7] sm:h-72">
        {isPast ? (
          <div className="absolute left-3 top-3 z-10">
            <span className="inline-flex items-center bg-[#C96B3C] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-white shadow-md">
              ✓ Evento concluso
            </span>
          </div>
        ) : (
          <div className="absolute left-3 top-3 z-10">
            <span className="inline-flex items-center bg-[#1F3B2D] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-white shadow-md">
              Prossimo evento
            </span>
          </div>
        )}

        {event.imageUrl ? (
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-contain transition duration-300 group-hover:scale-[1.01]"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center text-gray-400">
            Nessuna locandina disponibile
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-black leading-tight text-black sm:text-2xl">
          {event.title}
        </h3>

        <div className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
          {event.date && (
            <div className="flex items-center gap-2">
              <Calendar size={16} className="shrink-0 text-[#E4B15A]" />
              <span>{formatItalianDate(event.date)}</span>
            </div>
          )}

          {event.time && (
            <div className="flex items-center gap-2">
              <Clock size={16} className="shrink-0 text-[#1F3B2D]" />
              <span>{event.time}</span>
            </div>
          )}

          {(event.location || event.street) && (
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-[2px] shrink-0 text-[#C96B3C]" />
              <span>
                {event.location}
                {event.street ? `, ${event.street}` : ''}
              </span>
            </div>
          )}

          {event.contacts && (
            <div className="flex items-start gap-2">
              <Info size={16} className="mt-[2px] shrink-0 text-black" />
              <span>{event.contacts}</span>
            </div>
          )}
        </div>

        <div className="mt-6 border-t border-black/10 pt-5">
          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Condividi l'evento ${event.title} su WhatsApp`}
            className="block transition hover:opacity-90"
          >
            <span className="inline-flex items-center justify-center rounded-full bg-[#25D366] p-3 text-white sm:hidden">
              <FaWhatsapp size={20} />
            </span>

            <div className="hidden items-center justify-between border border-[#25D366]/20 bg-[#25D366]/10 px-4 py-3 sm:flex">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <FaWhatsapp size={20} />
                </span>

                <p className="text-sm font-bold text-[#1F3B2D]">
                  Condividi questo evento su WhatsApp
                </p>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white">
                Condividi
                <ArrowUpRight size={16} />
              </span>
            </div>
          </a>
        </div>
      </div>
    </article>
  )
}

function SectionTitle({
  eyebrow,
  first,
  second,
}: {
  eyebrow?: string
  first: string
  second: string
}) {
  return (
    <div className="mb-7 md:mb-8">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#C96B3C]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-4xl">
        <span className="text-black">{first} </span>
        <span className="text-[#E4B15A]">{second}</span>
      </h2>
    </div>
  )
}

export default async function AttivitaPage() {
  const events = await client.fetch<EventItem[]>(allEventsQuery)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const mappedEvents = events.map((event) => ({
    ...event,
    imageUrl: event.poster
      ? urlFor(event.poster).width(900).height(1200).url()
      : undefined,
  }))

  const futureEvents = mappedEvents.filter((event) => {
    if (!event.date) return false
    const eventDate = new Date(event.date)
    eventDate.setHours(0, 0, 0, 0)
    return eventDate >= today
  })

  const pastEvents = mappedEvents
    .filter((event) => {
      if (!event.date) return false
      const eventDate = new Date(event.date)
      eventDate.setHours(0, 0, 0, 0)
      return eventDate < today
    })
    .reverse()

  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="relative min-h-[400px] overflow-hidden sm:min-h-[440px] md:min-h-[500px]">
        <Image
          src="/home-hero.jpg"
          alt="Attività Associazione Calico ODV"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[400px] max-w-7xl items-center px-6 py-14 sm:min-h-[440px] md:min-h-[500px] md:py-16">
          <div className="max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#E4B15A]">
              Associazione Calico ODV
            </p>

            <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-7xl">
              <span className="text-white">Atti</span>
              <span className="text-[#E4B15A]">vità</span>
            </h1>

            <div className="mt-6 max-w-3xl bg-white/10 px-4 py-4 backdrop-blur-sm sm:mt-8 sm:px-5">
              <p className="text-sm leading-6 text-white md:text-[15px]">
                L’associazione organizza mercatini solidali, raccolte fondi,
                giornate di sensibilizzazione e iniziative utili a sostenere
                concretamente gli animali che seguiamo.
              </p>

              <p className="mt-4 text-sm leading-6 text-white md:text-[15px]">
                In questa pagina trovi gli appuntamenti futuri e una memoria
                delle attività passate: eventi che raccontano il nostro lavoro e
                che puoi anche condividere facilmente su WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        {futureEvents.length > 0 && (
          <section className="mb-14 md:mb-16">
            <SectionTitle
              eyebrow="Partecipa con noi"
              first="Eventi"
              second="futuri"
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {futureEvents.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          </section>
        )}

        {pastEvents.length > 0 && (
          <section>
            <SectionTitle
              eyebrow="Le attività svolte"
              first="Eventi"
              second="passati"
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <EventCard key={event._id} event={event} isPast />
              ))}
            </div>
          </section>
        )}

        {futureEvents.length === 0 && pastEvents.length === 0 && (
          <div className="border border-black/10 bg-white p-6 md:p-8">
            <p className="text-sm leading-6 text-gray-700 md:text-[15px]">
              Non ci sono ancora eventi pubblicati. Torna presto per scoprire i
              prossimi appuntamenti dell’associazione.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}