import Image from 'next/image'
import Link from 'next/link'
import StatsStrip from '@/components/home/StatsStrip'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="relative min-h-[560px] overflow-hidden">
        <Image
          src="/home-hero.jpg"
          alt="Associazione Calico ODV"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
              <span className="text-white">Associazione </span>
              <span className="text-[#E4B15A]">Calico</span>{' '}
              <span className="text-white">ODV</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#E4B15A]">
            Associazione Calico ODV
          </p>

          <h2 className="text-4xl font-black uppercase tracking-tight text-black md:text-5xl">
            Chi siamo
          </h2>

          <div className="mt-4 h-2 w-28 bg-[#E4B15A]" />

          <div className="mt-8 space-y-4 text-[15px] leading-7 text-gray-700 md:text-base">
            <p>
              L’Associazione Calico odv è costituita da un gruppo di volontarie e
              volontari attivi su tutto il territorio del Lazio. Il nostro
              obiettivo? Non lasciare solo nessun animale bisognoso. A Nepi, in
              provincia di Viterbo abbiamo creato la Gatteria, un piccolo rifugio
              dove accogliamo gatti abbandonati e gli troviamo una famiglia. A
              Roma ci occupiamo dei gatti ospitati presso ValleGrande. Vigiliamo
              sul loro benessere e promuoviamo le adozioni di gatti e cani ospiti
              della struttura.
            </p>
          </div>
        </div>

        <div className="relative min-h-[420px] bg-[#F3E6CC]">
          <Image
            src="/chi-siamo.jpg"
            alt="Volontari Associazione Calico ODV"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="w-full bg-[#1F3B2D]">
        <div className="mx-auto grid max-w-7xl min-h-[220px] gap-8 px-6 text-white md:grid-cols-[1fr_260px_1fr] md:items-stretch">
          <div className="flex flex-col justify-center py-10">
            <p className="text-3xl font-black uppercase leading-tight md:text-4xl">
              Dona il 5x1000
            </p>
            <p className="mt-2 text-lg font-bold uppercase tracking-wide text-[#E4B15A]">
              all&apos;Associazione Calico
            </p>
          </div>

          <div className="relative h-full min-h-[220px]">
            <Image
              src="/logo-calico.png"
              alt="Logo Associazione Calico ODV"
              fill
              className="object-contain object-center"
            />
          </div>

          <div className="flex flex-col justify-center py-10 text-left md:text-right">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E4B15A]">
              Codice fiscale
            </p>
            <p className="mt-2 text-2xl font-black tracking-wide md:text-3xl">
              90129990561
            </p>

            <div className="mt-5">
              <Link
                href="/sostienici"
                className="inline-flex border border-[#E4B15A] bg-[#E4B15A] px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-transparent hover:text-white md:self-end"
              >
                Scopri di più
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="w-full bg-[#FCFBF8] py-16">
        <div className="space-y-0">
          <div className="grid min-h-[420px] grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[320px]">
              <Image
                src="/gatto-1.jpg"
                alt="Adozione gatti"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center bg-[#E4B15A] p-10 text-black md:p-14">
              <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                Vuoi adottare un gatto o un cane?
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-6 md:text-[15px]">
                Non cercare la perfezione, cerca l&apos;emozione. Fatti guidare dal
                cuore e lasciati trovare: perché alla fine, sono sempre loro a
                sceglierci.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/adozioni"
                  className="inline-flex justify-center bg-black px-5 py-3 text-sm font-bold text-white transition hover:opacity-85"
                >
                  Adotta un gatto
                </Link>

                <Link
                  href="/cani"
                  className="inline-flex justify-center border border-black bg-transparent px-5 py-3 text-sm font-bold text-black transition hover:bg-black hover:text-white"
                >
                  Adotta un cane
                </Link>
              </div>
            </div>
          </div>

          <div className="grid min-h-[420px] grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center bg-[#1F3B2D] p-10 text-white md:order-1 md:p-14">
              <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                Diventa una/un volontaria/o
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-6 text-white/90 md:text-[15px]">
                Lorem ipsu dolor sit amet, consectetur adipiscing elit. Integer
                posuere sapien nec luctus tincidunt. Curabitur non augue sed lacus
                varius fermentum. Sed viverra nunc id sem feugiat.
              </p>

              <div className="mt-6">
                <Link
                  href="/diventa-volontario"
                  className="inline-flex bg-[#E4B15A] px-5 py-3 text-sm font-bold text-black transition hover:opacity-85"
                >
                  Scopri di più
                </Link>
              </div>
            </div>

            <div className="relative min-h-[320px] md:order-2">
              <Image
                src="/gatto-2.jpg"
                alt="Volontariato con i gatti"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid min-h-[420px] grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[320px]">
              <Image
                src="/gatto-3.jpg"
                alt="Sostegno all'associazione"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center bg-[#C96B3C] p-10 text-white md:p-14">
              <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                Vuoi sostenerci? Scopri come puoi aiutarci
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-6 text-white/90 md:text-[15px]">
                Basta davvero poco per aiutarci ad aiutarli. Anche il valore di
                pochi euro può garantire cure e cibo a chi è stato meno fortunato:
                ogni goccia conta!
              </p>

              <div className="mt-6">
                <Link
                  href="/sostienici"
                  className="inline-flex bg-white px-5 py-3 text-sm font-bold text-[#C96B3C] transition hover:opacity-85"
                >
                  Scopri di più
                </Link>
              </div>
            </div>
          </div>

          <div className="grid min-h-[420px] grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center bg-[#F3E6CC] p-10 text-black md:order-1 md:p-14">
              <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                I nostri consigli
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-6 text-black/80 md:text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Donec tincidunt lectus et
                tempor dignissim.
              </p>

              <div className="mt-6">
                <Link
                  href="/consigli"
                  className="inline-flex bg-black px-5 py-3 text-sm font-bold text-white transition hover:opacity-85"
                >
                  Scopri di più
                </Link>
              </div>
            </div>

            <div className="relative min-h-[320px] md:order-2">
              <Image
                src="/gatto-4.jpg"
                alt="Consigli sui gatti"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#1F3B2D] py-16 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tight">
              Contattaci
            </h2>

            <div className="mt-4 h-2 w-28 bg-[#E4B15A]" />

            <p className="mt-6 max-w-md text-sm leading-7 text-white/90">
              Hai domande su un gatto? Vuoi adottare o darci una mano? Scrivici,
              ti risponderemo il prima possibile.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <p>
                <span className="font-bold">Email:</span> info@calicoodv.it
              </p>
              <p>
                <span className="font-bold">Telefono:</span> +39 000 0000000
              </p>
              <p>
                <span className="font-bold">Instagram:</span> @calicoodv
              </p>
              <p>
                <span className="font-bold">Facebook:</span> Associazione Calico
                ODV
              </p>
            </div>
          </div>

          <div className="bg-white p-8 text-black">
            <h3 className="mb-4 text-2xl font-bold">Scrivici un messaggio</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full border border-gray-300 px-4 py-3 text-sm"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-3 text-sm"
              />

              <textarea
                placeholder="Messaggio"
                rows={4}
                className="w-full border border-gray-300 px-4 py-3 text-sm"
              />

              <button
                type="submit"
                className="bg-[#E4B15A] px-5 py-3 text-sm font-bold text-black hover:opacity-90"
              >
                Invia messaggio
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}