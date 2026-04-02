import Image from 'next/image'
import Link from 'next/link'
import {
  AlertTriangle,
  Bath,
  Cat,
  DoorClosed,
  Home,
  ShieldAlert,
  ShoppingBag,
  Syringe,
  Wind,
  HeartHandshake,
} from 'lucide-react'

export default function ConsigliPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="relative min-h-[560px] overflow-hidden">
        <Image
          src="/gatto-6.jpg"
          alt="I nostri consigli"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
              <span className="text-white">I nostri </span>
              <span className="text-[#E4B15A]">consigli</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#E4B15A]">
            Associazione Calico ODV
          </p>

          <h2 className="text-4xl font-black uppercase leading-none text-black md:text-5xl">
            Consigli nati dall’esperienza
          </h2>

          <div className="mt-5 h-3 w-44 bg-[#E4B15A]" />

          <div className="mt-8 max-w-4xl space-y-4 text-sm leading-6 text-gray-700 md:text-[15px]">
            <p>
              Questi consigli nascono dall’esperienza quotidiana dell’associazione
              e non dalla saccenza: sono indicazioni pratiche che abbiamo imparato
              nel tempo seguendo adozioni, inserimenti e situazioni delicate.
            </p>

            <p>
              L’arrivo in una nuova casa può essere un momento molto stressante per
              un gatto, anche quando in gattile o durante gli incontri si è mostrato
              dolce, affettuoso e tranquillo. Per questo ti chiediamo davvero di
              ascoltarci e di seguire questi accorgimenti.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#E4B15A] py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-start gap-4">
            <ShoppingBag size={30} className="mt-1 text-[#1F3B2D]" />
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black text-black md:text-4xl">
                Prima di partire e durante il viaggio
              </h2>

              <div className="mt-5 space-y-3 text-sm leading-6 text-black/85 md:text-[15px]">
                <p>
                  Acquista un trasportino resistente e rigido, non morbido di stoffa.
                </p>
                <p>
                  Apri il trasportino solo quando sarai arrivato a casa, mai in
                  auto o durante il viaggio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-start gap-4">
            <Home size={30} className="mt-1 text-[#C96B3C]" />
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black text-black md:text-4xl">
                I primi giorni in casa
              </h2>

              <div className="mt-5 space-y-3 text-sm leading-6 text-gray-700 md:text-[15px]">
                <p>
                  All’inizio lascialo tranquillo in un bagno, in una stanza piccola
                  o comunque in un luogo ristretto, chiudendo bene finestre e porte.
                </p>
                <p>
                  Apri il trasportino ma non forzarlo a uscire. Dagli il tempo di
                  osservare e muoversi da solo.
                </p>
                <p>
                  Metti a disposizione lettiera, acqua e croccantini sempre
                  disponibili; il cibo umido è meglio offrirlo mattina e sera,
                  mantenendo sempre pulita la ciotola.
                </p>
                <p>
                  Lascialo in questo spazio per qualche giorno, finché non avrà
                  preso confidenza e imparato a usare bene la lettiera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#1F3B2D] py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-start gap-4">
            <DoorClosed size={30} className="mt-1 text-[#E4B15A]" />
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black md:text-4xl">
                Inserimento con altri gatti
              </h2>

              <div className="mt-5 space-y-3 text-sm leading-6 text-white/90 md:text-[15px]">
                <p>
                  Se hai già un gatto in casa, non presentare il nuovo arrivato
                  mostrandoglielo dal trasportino: è una cosa spontanea, ma è
                  sbagliata.
                </p>
                <p>
                  L’inserimento deve avvenire gradualmente, iniziando con lo
                  scambio di copertine o cuscini su cui i gatti dormono.
                </p>
                <p>
                  Quando possibile, usa una rete o lascia la porta socchiusa di
                  pochi centimetri, in modo che possano annusarsi e conoscersi con
                  calma. Solo dopo qualche giorno si potrà aprire gradualmente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#C96B3C] py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-start gap-4">
            <ShieldAlert size={30} className="mt-1 text-white" />
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black md:text-4xl">
                Cosa non fare assolutamente
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            <div className="bg-white/10 p-6">
              <h3 className="text-lg font-bold">Non mettere il collarino</h3>
              <p className="mt-3 text-sm leading-6 text-white/90">
                Può impigliarsi e diventare pericoloso; anche quelli con sicurezza
                non sono privi di rischi. 
              </p>
            </div>

            <div className="bg-white/10 p-6">
              <div className="flex items-center gap-2">
                <Bath size={20} className="text-white" />
                <h3 className="text-lg font-bold">Non fargli il bagno</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/90">
                Nei primi giorni aumenterebbe solo lo stress.
              </p>
            </div>

            <div className="bg-white/10 p-6">
              <div className="flex items-center gap-2">
                <Syringe size={20} className="text-white" />
                <h3 className="text-lg font-bold">Non portarlo subito dal veterinario</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/90">
                Se non ci sono urgenze, è meglio lasciargli il tempo di ambientarsi.
              </p>
            </div>

            <div className="bg-white/10 p-6">
              <div className="flex items-center gap-2">
                <Cat size={20} className="text-white" />
                <h3 className="text-lg font-bold">Non tagliare le unghie</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/90">
                Evita manovre che possano spaventarlo o irrigidirlo nei primi giorni.
              </p>
            </div>

            <div className="bg-white/10 p-6">
              <div className="flex items-center gap-2">
                <AlertTriangle size={20} className="text-white" />
                <h3 className="text-lg font-bold">No antiparassitari senza verifiche</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/90">
                Non somministrare nulla senza esserti assicurato che non sia già
                coperto da trattamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-start gap-4">
            <HeartHandshake size={30} className="mt-1 text-[#C96B3C]" />
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black text-black md:text-4xl">
                Cosa fare
              </h2>

              <div className="mt-5 space-y-3 text-sm leading-6 text-gray-700 md:text-[15px]">
                <p>
                  Se vuoi cambiare alimentazione, fai uno scalaggio graduale del
                  cibo, inserendo lentamente i nuovi croccantini insieme a quelli a
                  cui era abituato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F3E6CC] py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-start gap-4">
            <AlertTriangle size={30} className="mt-1 text-[#C96B3C]" />
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black text-black md:text-4xl">
                Pericoli
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-black">Terrazzi non protetti</h3>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                I gatti cadono: non sanno volare.
              </p>
            </div>

            <div className="bg-white p-6">
              <div className="flex items-center gap-2">
                <Wind size={20} className="text-[#C96B3C]" />
                <h3 className="text-lg font-bold text-black">Finestre a vasistas</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                Il gatto può restare incastrato.
              </p>
            </div>

            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-black">Elettrodomestici</h3>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                Lavatrici, asciugatrici e lavastoviglie possono diventare
                nascondigli molto pericolosi.
              </p>
            </div>

            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-black">Fili, lacci e plastica</h3>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                Anche i lacci dei sacchetti possono essere pericolosi.
              </p>
            </div>

            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-black">Divano letto</h3>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                Possono restare chiusi dentro o ferirsi negli ingranaggi.
              </p>
            </div>

            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-black">Water aperto</h3>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                Se sono molto piccoli possono cadere: meglio tenere la tavoletta
                chiusa.
              </p>
            </div>

            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-black">Acqua stagnante in casa</h3>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                Fai attenzione a dove possono esserci detersivi: wc, bucato in
                ammollo, scopino, scarichi dell’aria condizionata. 
              </p>
            </div>

            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-black">Lettiere autopulenti</h3>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                Possono essere pericolose o mortali; inoltre se il gatto si spaventa
                può smettere di usarle. 
              </p>
            </div>

            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-black">Collarini con sicurezza</h3>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                Anche quelli antistrangolo non sono privi di rischi e il campanello
                è una fonte continua di stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#1F3B2D] py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
                Se hai qualsiasi dubbio, contattaci
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90">
                In caso di dubbi o difficoltà, il consiglio migliore resta sempre
                quello di sentire il referente volontario che ha seguito
                l’adozione. 
              </p>
            </div>

            <div>
              <Link
                href="/chi-siamo"
                className="inline-flex bg-[#E4B15A] px-5 py-3 text-sm font-bold text-black transition hover:opacity-90"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}