import Image from 'next/image'
import Link from 'next/link'

export default function GatteriaPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="relative min-h-[560px] overflow-hidden">
        <Image
          src="/chi-siamo.jpg"
          alt="La Gatteria"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
              <span className="text-white">La </span>
              <span className="text-[#E4B15A]">Gatteria</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#E4B15A]">
            Associazione Calico ODV
          </p>

          <h2 className="text-4xl font-black uppercase leading-none text-black md:text-5xl">
            Uno spazio sicuro per i nostri mici
          </h2>

          <div className="mt-5 h-3 w-44 bg-[#E4B15A]" />

          <div className="mt-8 space-y-4 text-sm leading-6 text-gray-700 md:text-[15px]">
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

            <div className="pt-2">
              <p className="font-bold text-black">Dove si trova</p>
              <p>Via di Corte 5, Nepi (VT)</p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[420px] bg-[#F3E6CC]">
          <Image
            src="/gatto-8.jpg"
            alt="La Gatteria a Nepi"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="w-full">
        <div className="space-y-0">
          <div className="grid min-h-[340px] grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center bg-white p-8 text-black md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Osserva i gatti ospiti con CatLives
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/75">
                Il progetto CatLives permette di seguire i mici ospiti della
                Gatteria attraverso le camere live del rifugio. È un modo bello e
                trasparente per conoscere meglio gli spazi, osservare i gatti e
                vedere la quotidianità della struttura.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-black/75">
                Nella pagina dedicata alla Gatteria puoi trovare le cam, le
                informazioni sul rifugio e i gatti in adozione.
              </p>

              <div className="mt-5">
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

            <div className="relative min-h-[260px]">
              <Image
                src="/gatto-4.jpg"
                alt="CatLives e i gatti della Gatteria"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid min-h-[340px] grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[260px]">
              <Image
                src="/gatto-9.jpg"
                alt="Adotta dalla Gatteria"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center bg-[#E4B15A] p-8 text-black md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Un luogo di cura, attesa e adozione
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/85">
                La Gatteria accoglie mici con storie diverse: gatti abbandonati,
                gattini da seguire con attenzione, mici che hanno bisogno di
                recuperare serenità prima di trovare una casa.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-black/85">
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

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E4B15A]">
              Dove
            </p>
            <h3 className="mt-3 text-2xl font-bold text-black">Nepi (VT)</h3>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              La Gatteria si trova in Via di Corte 5, nel centro di Nepi.
            </p>
          </div>

          <div className="bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E4B15A]">
              Contatti
            </p>
            <h3 className="mt-3 text-2xl font-bold text-black">Parla con noi</h3>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              Per informazioni sulla struttura o sui mici ospiti puoi contattarci
              direttamente e ti aiuteremo volentieri.
            </p>
            <p className="mt-3 text-sm font-semibold text-black">339 3501334</p>
          </div>

          <div className="bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E4B15A]">
              Adozioni
            </p>
            <h3 className="mt-3 text-2xl font-bold text-black">
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