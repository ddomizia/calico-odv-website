import Image from 'next/image'
import Link from 'next/link'

type Rabbit = {
  name: string
  age: string
  sex: string
  image: string
}

const rabbits: Rabbit[] = [
  {
    name: 'Luna',
    age: '2 anni',
    sex: 'Femmina',
    image: '/coniglio-1.jpg',
  },
  {
    name: 'Nuvola',
    age: '1 anno',
    sex: 'Maschio',
    image: '/coniglio-2.jpg',
  },
  {
    name: 'Miele',
    age: '3 anni',
    sex: 'Femmina',
    image: '/coniglio-3.jpg',
  },
]

function RabbitCard({ rabbit }: { rabbit: Rabbit }) {
  return (
    <article className="overflow-hidden border border-gray-200 bg-white">
      <div className="relative h-56 bg-[#F6F1E7]">
        <Image
          src={rabbit.image}
          alt={rabbit.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold text-black">{rabbit.name}</h3>

        <p className="text-sm leading-6 text-gray-700">
          {rabbit.sex} | {rabbit.age}
        </p>
      </div>
    </article>
  )
}

export default function ConigliPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="relative min-h-[420px] overflow-hidden">
        <Image
          src="/conigli-hero.jpg"
          alt="I conigli seguiti dall'associazione"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
              <span className="text-white">I nostri </span>
              <span className="text-[#E4B15A]">conigli</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#E4B15A]">
            Associazione Calico ODV
          </p>

          <h2 className="text-4xl font-black leading-none text-black md:text-5xl">
            Un impegno quotidiano anche per loro
          </h2>

          <div className="mt-5 h-3 w-44 bg-[#E4B15A]" />

          <div className="mt-8 space-y-4 text-sm leading-6 text-gray-700 md:text-[15px]">
            <p>
              Tra gli animali di cui ci prendiamo cura ci sono anche dei conigli,
              accolti e seguiti ogni giorno con attenzione, pulizia, cibo adatto
              e spazi sicuri.
            </p>

            <p>
              Anche per loro il nostro impegno è costante: servono tempo, cure,
              materiali e risorse per garantire benessere e una gestione corretta.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="space-y-0">
          <div className="grid min-h-[340px] grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center bg-white p-8 text-black md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Non sono in adozione
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/75">
                I conigli di cui ci occupiamo non sono adottabili. È però possibile
                aiutarci a sostenerli con una donazione a distanza, contribuendo
                alle spese quotidiane per cibo, materiali e cure.
              </p>

              <div className="mt-5">
                <Link
                  href="/sostienici"
                  className="inline-flex bg-[#1F3B2D] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  Scopri come aiutarci
                </Link>
              </div>
            </div>

            <div className="relative min-h-[260px]">
              <Image
                src="/coniglio-4.jpg"
                alt="Sostieni i nostri conigli"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-4xl font-black leading-none text-black md:text-5xl">
            I conigli che seguiamo
          </h2>

          <div className="mt-5 h-3 w-44 bg-[#E4B15A]" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rabbits.map((rabbit) => (
            <RabbitCard key={rabbit.name} rabbit={rabbit} />
          ))}
        </div>
      </section>
    </main>
  )
}