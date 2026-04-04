import Image from 'next/image'
import Link from 'next/link'

const rabbits = [
  {
    image: '/coniglio-1.jpeg',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    image: '/coniglio-2.jpeg',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    image: '/coniglio-3.jpeg',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    image: '/coniglio-4.jpeg',
    className: 'md:col-span-2 md:row-span-1',
  },
]

export default function ConigliPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="relative min-h-[560px] overflow-hidden">
        <Image
          src="/coniglio-4.jpeg"
          alt="I conigli seguiti dall'associazione"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
              <span className="text-white">I nostri </span>
              <span className="text-[#E4B15A]">conigli</span>
            </h1>

            <div className="mt-8 max-w-3xl bg-white/10 px-5 py-5 backdrop-blur-sm">
              <h2 className="text-2xl font-black leading-tight text-white md:text-3xl">
                Un impegno quotidiano anche per loro
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-6 text-white/95 md:text-[15px]">
                <p>
  I conigli di cui ci prendiamo cura nella struttura di Vallegrande, a Roma,
  provengono da un sequestro effettuato presso una catena di vendita di generi
  alimentari e animali. Da quel momento sono stati accolti e seguiti
  quotidianamente dai volontari dell’associazione.
</p>

<p>
  Ogni giorno garantiamo loro verdura fresca, pellet e fieno, assicurando
  un’alimentazione corretta e costante. Vivono in uno spazio sicuro e protetto,
  dove hanno a disposizione sia un’area al chiuso sia uno spazio all’aperto,
  così da poter muoversi liberamente e trascorrere le loro giornate in un
  ambiente adatto alle loro esigenze.
</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid overflow-hidden bg-white md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 text-black md:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#E4B15A]">
              Sostienili con noi
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Non sono in adozione
            </h2>

            <div className="mt-5 h-2 w-28 bg-[#E4B15A]" />

            <p className="mt-6 max-w-xl text-sm leading-6 text-black/75 md:text-[15px]">
              I conigli di cui ci occupiamo non sono adottabili. È però possibile
              aiutarci a sostenerli con una donazione a distanza, contribuendo
              alle spese quotidiane per cibo, materiali e cure.
            </p>

            <div className="mt-6">
              <Link
                href="/sostienici"
                className="inline-flex bg-[#1F3B2D] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                Scopri come aiutarci
              </Link>
            </div>
          </div>

          <div className="relative min-h-[320px] md:min-h-[420px]">
            <Image
              src="/coniglio-4.jpeg"
              alt="Sostieni i nostri conigli"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="mb-10 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#E4B15A]">
            Il nostro spazio
          </p>

          <h2 className="text-4xl font-black leading-none text-black md:text-5xl">
            I conigli che seguiamo
          </h2>

          <div className="mt-5 h-2 w-28 bg-[#E4B15A]" />

          <p className="mt-6 max-w-2xl text-sm leading-6 text-gray-700 md:text-[15px]">
            Alcuni dei conigli di cui ci prendiamo cura ogni giorno, tra spazi
            protetti, attenzioni costanti e una routine costruita sul loro
            benessere.
          </p>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4">
          {rabbits.map((rabbit, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-[#F3E6CC] ${rabbit.className}`}
            >
              <Image
                src={rabbit.image}
                alt="Conigli seguiti dall'associazione"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/5 transition group-hover:bg-black/10" />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}