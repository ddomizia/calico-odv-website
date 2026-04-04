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
      <section className="relative min-h-[480px] overflow-hidden sm:min-h-[520px] md:min-h-[560px]">
        <Image
          src="/coniglio-4.jpeg"
          alt="I conigli seguiti dall'associazione"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex min-h-[480px] max-w-7xl items-center px-6 py-14 sm:min-h-[520px] md:min-h-[560px] md:py-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-7xl">
              <span className="text-white">I nostri </span>
              <span className="text-[#E4B15A]">conigli</span>
            </h1>

            <div className="mt-6 max-w-3xl bg-white/10 px-4 py-4 backdrop-blur-sm sm:mt-8 sm:px-5 sm:py-5">
              <h2 className="text-xl font-black leading-tight text-white sm:text-2xl md:text-3xl">
                Un impegno quotidiano anche per loro
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-6 text-white/95 md:mt-5 md:text-[15px]">
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

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid overflow-hidden bg-white md:grid-cols-2">
          <div className="flex flex-col justify-center p-6 text-black sm:p-8 md:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#E4B15A] md:mb-4">
              Sostienili con noi
            </p>

            <h2 className="text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
              Non sono in adozione
            </h2>

            <div className="mt-4 h-2 w-24 bg-[#E4B15A] md:mt-5 md:w-28" />

            <p className="mt-5 max-w-xl text-sm leading-6 text-black/75 md:mt-6 md:text-[15px]">
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

          <div className="relative min-h-[240px] sm:min-h-[300px] md:min-h-[420px]">
            <Image
              src="/coniglio-4.jpeg"
              alt="Sostieni i nostri conigli"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 md:pb-14">
        <div className="mb-8 max-w-4xl md:mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#E4B15A] md:mb-4">
            Il nostro spazio
          </p>

          <h2 className="text-3xl font-black leading-none text-black sm:text-4xl md:text-5xl">
            I conigli che seguiamo
          </h2>

          <div className="mt-4 h-2 w-24 bg-[#E4B15A] md:mt-5 md:w-28" />

          <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-700 md:mt-6 md:text-[15px]">
            Alcuni dei conigli di cui ci prendiamo cura ogni giorno, tra spazi
            protetti, attenzioni costanti e una routine costruita sul loro
            benessere.
          </p>
        </div>

        {/* MOBILE: griglia più pulita */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {rabbits.map((rabbit, index) => (
            <div
              key={index}
              className="relative aspect-[4/5] overflow-hidden bg-[#F3E6CC]"
            >
              <Image
                src={rabbit.image}
                alt="Conigli seguiti dall'associazione"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* DESKTOP: mosaico editoriale */}
        <div className="hidden auto-rows-[220px] gap-4 md:grid md:grid-cols-4">
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