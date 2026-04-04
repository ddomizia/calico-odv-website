import Image from 'next/image'
import { client } from '../../sanity/lib/client'
import { allEventsQuery } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'
import { Calendar, Clock, MapPin, Info } from 'lucide-react'

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

function EventCard({
  event,
  isPast,
}: {
  event: EventItem & { imageUrl?: string }
  isPast?: boolean
}) {
  return (
    <article className="overflow-hidden border border-gray-200 bg-white">
      <div className="relative h-72 bg-[#F6F1E7]">
        {isPast && (
          <div className="absolute left-3 top-3 z-10">
            <span className="inline-flex items-center bg-[#C96B3C] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-white shadow-md">
              ✓ Evento concluso
            </span>
          </div>
        )}

        {event.imageUrl ? (
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-contain"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            Nessuna locandina disponibile
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-bold text-black">{event.title}</h3>

        <div className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {event.date && (
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#E4B15A]" />
              <span>{formatItalianDate(event.date)}</span>
            </div>
          )}

          {event.time && (
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#1F3B2D]" />
              <span>{event.time}</span>
            </div>
          )}

          {(event.location || event.street) && (
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-[2px] text-[#C96B3C]" />
              <span>
                {event.location}
                {event.street ? `, ${event.street}` : ''}
              </span>
            </div>
          )}

          {event.contacts && (
            <div className="flex items-center gap-2">
              <Info size={16} className="text-black" />
              <span>{event.contacts}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  )
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
      <section className="relative min-h-[420px] overflow-hidden">
        <Image
          src="/home-hero.jpg"
          alt="Attività Associazione Calico ODV"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
              <span className="text-white">Atti</span>
              <span className="text-[#E4B15A]">vità</span>
            </h1>

            <div className="mt-8 max-w-3xl bg-white/10 px-5 py-4 backdrop-blur-sm">
              <p className="text-sm leading-6 text-white md:text-[15px]">
                L’associazione organizza mercatini solidali, raccolte fondi ed
                eventi di sensibilizzazione per sostenere concretamente i nostri
                animali e far conoscere il nostro lavoro.
              </p>

              <p className="mt-4 text-sm leading-6 text-white md:text-[15px]">
                Promuoviamo anche passeggiate, visite veterinarie gratuite e
                campagne di educazione rivolte alla comunità, con l’obiettivo di
                diffondere maggiore consapevolezza sul benessere animale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        {futureEvents.length > 0 && (
          <section className="mb-16">
            <SectionTitle first="Eventi" second="futuri" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {futureEvents.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          </section>
        )}

        {pastEvents.length > 0 && (
          <section>
            <SectionTitle first="Eventi" second="passati" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <EventCard key={event._id} event={event} isPast />
              ))}
            </div>
          </section>
        )}

        {futureEvents.length === 0 && pastEvents.length === 0 && (
          <div className="border border-gray-200 bg-white p-8">
            <p className="text-sm leading-6 text-gray-700">
              Non ci sono ancora eventi pubblicati.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}