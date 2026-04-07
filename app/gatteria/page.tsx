import Image from 'next/image'
import Link from 'next/link'
import ThirdPartyEmbedGate from '@/components/gatteria/ThirdPartyEmbedGate'

export default function GatteriaPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="relative min-h-[440px] overflow-hidden sm:min-h-[500px] md:min-h-[560px]">
        <Image
          src="/chi-siamo.jpg"
          alt="La Gatteria"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[440px] max-w-7xl items-center px-6 py-14 sm:min-h-[500px] md:min-h-[560px] md:py-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-7xl">
              <span className="text-white">La </span>
              <span className="text-[#E4B15A]">Gatteria</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:gap-10 md:py-14 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#E4B15A]">
            Associazione Calico ODV
          </p>

          <h2 className="text-3xl font-black uppercase leading-none text-black sm:text-4xl md:text-5xl">
            Uno spazio sicuro per i nostri mici
          </h2>

          <div className="mt-4 h-2 w-28 bg-[#E4B15A] md:mt-5 md:h-3 md:w-44" />

          <div className="mt-6 space-y-4 text-sm leading-6 text-gray-700 md:mt-8 md:text-[15px]">
            <p>
              La Gatteria è un piccolo spazio nel centro di Nepi, in provincia di
              Viterbo, dove i volontari di Calico possono ospitare i mici
              abbandonati in attesa di una famiglia.
            </p>

            <p>
              È nata nel maggio 2023 dall’esigenza di avere un luogo protetto dove
              accudire e coccolare i gatti che non potevano essere reintrodotti in
              strada dopo la sterilizzazione o dove assistere i gattini
              abbandonati in cerca di adozione.
            </p>

            <p>
              Oggi La Gatteria è anche un punto di riferimento per chi vuole
              adottare un gatto, chiedere consigli, conoscere più da vicino il
              nostro lavoro o dare una mano concreta all’associazione.
            </p>

            <div className="pt-1 md:pt-2">
              <p className="font-bold text-black">Dove si trova</p>
              <p>Via di Corte 5, Nepi (VT)</p>
            </div>
          </div>
        </div>

        <div className="order-1 relative min-h-[250px] bg-[#F3E6CC] sm:min-h-[320px] md:min-h-[420px] lg:order-2">
          <Image
            src="/gatto-8.jpg"
            alt="La Gatteria a Nepi"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="w-full">
        <div className="space-y-6 md:space-y-0">
          <div className="grid grid-cols-1 overflow-hidden bg-white md:min-h-[340px] md:grid-cols-2">
            <div className="flex flex-col justify-center p-6 text-black sm:p-8 md:p-12">
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                Osserva i gatti ospiti con CatLives
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/75 md:text-[15px]">
                Il progetto CatLives permette di seguire i mici ospiti della
                Gatteria attraverso le camere live del rifugio. È un modo bello e
                trasparente per conoscere meglio gli spazi, osservare i gatti e
                vedere la quotidianità della struttura.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-black/75 md:text-[15px]">
                Nella pagina dedicata alla Gatteria puoi trovare le cam, le
                informazioni sul rifugio e i gatti in adozione.
              </p>

              <div className="mt-6">
                <Image
                  src="/catlives.svg"
                  alt="CatLives"
                  width={120}
                  height={40}
                  className="mb-4 object-contain"
                />

                <a
                  href="https://catlives.org/en/shelters/la-gatteria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-[#1F3B2D] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  Guarda La Gatteria su CatLives
                </a>
              </div>
            </div>

            <ThirdPartyEmbedGate title="Diretta CatLives">
              <div className="relative min-h-[260px] bg-black sm:min-h-[320px] md:min-h-[340px]">
                <iframe
                  loading="lazy"
                  src="https://services.skylinewebcams.com/?w=228001"
                  className="absolute inset-0 h-full w-full"
                  frameBorder="0"
                  scrolling="no"
                  marginWidth={0}
                  marginHeight={0}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Diretta CatLives - La Gatteria"
                />
              </div>
            </ThirdPartyEmbedGate>
          </div>

          <div className="grid grid-cols-1 overflow-hidden md:min-h-[340px] md:grid-cols-2">
            <div className="relative min-h-[240px] bg-[#F3E6CC] sm:min-h-[300px] md:min-h-[340px]">
              <Image
                src="/catlives.png"
                alt="CatLives e i gatti della Gatteria"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center bg-[#E4B15A] p-6 text-black sm:p-8 md:p-12">
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                Un luogo di cura, attesa e adozione
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/85 md:text-[15px]">
                La Gatteria accoglie mici con storie diverse: gatti abbandonati,
                gattini da seguire con attenzione, mici che hanno bisogno di
                recuperare serenità prima di trovare una casa.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-black/85 md:text-[15px]">
                Se vuoi conoscere i gatti ospiti o iniziare un percorso di
                adozione, puoi visitare le nostre pagine dedicate e scoprire chi
                sta aspettando una famiglia.
              </p>

              <div className="mt-5">
                <Link
                  href="/adozioni"
                  className="inline-flex bg-black px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  Scopri i gatti in adozione
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid gap-5 md:grid-cols-3 md:gap-8">
          <div className="bg-white p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E4B15A]">
              Dove
            </p>
            <h3 className="mt-3 text-xl font-bold text-black md:text-2xl">
              Nepi (VT)
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              La Gatteria si trova in Via di Corte 5, nel centro di Nepi.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E4B15A]">
              Contatti
            </p>
            <h3 className="mt-3 text-xl font-bold text-black md:text-2xl">
              Parla con noi
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              Per informazioni sulla struttura o sui mici ospiti puoi contattarci
              direttamente e ti aiuteremo volentieri.
            </p>
            <p className="mt-3 text-sm font-semibold text-black">339 3501334</p>
          </div>

          <div className="bg-white p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E4B15A]">
              Adozioni
            </p>
            <h3 className="mt-3 text-xl font-bold text-black md:text-2xl">
              Incontra i nostri ospiti
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              Sulla pagina CatLives dedicata alla Gatteria puoi vedere i mici in
              adozione e approfondire le loro informazioni.
            </p>
            <div className="mt-5">
              <a
                href="https://catlives.org/en/shelters/la-gatteria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[#E4B15A] px-5 py-3 text-sm font-bold text-black transition hover:opacity-90"
              >
                Apri la pagina CatLives
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}