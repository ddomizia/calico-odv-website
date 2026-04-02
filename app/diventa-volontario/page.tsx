import Image from 'next/image'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function DiventaVolontarioPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="relative min-h-[560px] overflow-hidden">
        <Image
          src="/home-hero.jpg"
          alt="Diventa volontario con Associazione Calico ODV"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
              <span className="text-white">Diventa </span>
              <span className="text-[#E4B15A]">volontario</span>
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
            C’è spazio anche per te
          </h2>

          <div className="mt-5 h-3 w-44 bg-[#E4B15A]" />

          <div className="mt-8 space-y-4 text-sm leading-6 text-gray-700 md:text-[15px]">
            <p>
              Chiunque può diventare volontario: non ci sono limiti di nessun tipo.
              Cerchiamo persone che amano gli animali e che desiderano mettere a
              disposizione un po’ del proprio tempo e delle proprie energie.
            </p>

            <p>
              Ogni aiuto è importante, anche il più piccolo. Ognuno può contribuire
              in modo diverso, in base alle proprie disponibilità e capacità.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8]">
        <div className="space-y-0">

          <div className="grid min-h-[340px] grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center bg-[#E4B15A] p-8 text-black md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Persone che amano gli animali
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/85">
                Il requisito più importante è la sensibilità verso gli animali.
                Non serve esperienza: conta la voglia di aiutare e di mettersi in gioco.
              </p>
            </div>

            <div className="relative min-h-[260px]">
              <Image src="/gatto-1.jpg" alt="" fill className="object-cover" />
            </div>
          </div>

          <div className="grid min-h-[340px] grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[260px]">
              <Image src="/gatto-2.jpg" alt="" fill className="object-cover" />
            </div>

            <div className="flex flex-col justify-center bg-white p-8 text-black md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Drivers per le adozioni
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/75">
                Aiutaci nei trasporti dei gatti verso le loro nuove famiglie.
                I viaggi sono fondamentali per rendere possibili molte adozioni.
              </p>
            </div>
          </div>

          <div className="grid min-h-[340px] grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center bg-[#1F3B2D] p-8 text-white md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Coccolatori di gatti
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/90">
                Dedica tempo ai nostri gatti: coccole, compagnia e presenza sono
                fondamentali per il loro benessere, anche nei weekend.
              </p>
            </div>

            <div className="relative min-h-[260px]">
              <Image src="/gatto-3.jpg" alt="" fill className="object-cover" />
            </div>
          </div>

          <div className="grid min-h-[340px] grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[260px]">
              <Image src="/gatto-4.jpg" alt="" fill className="object-cover" />
            </div>

            <div className="flex flex-col justify-center bg-[#C96B3C] p-8 text-white md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Supporto social media
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/90">
                Aiutaci a raccontare il nostro lavoro, le adozioni e le storie dei
                nostri gatti attraverso i social.
              </p>
            </div>
          </div>

          <div className="grid min-h-[340px] grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center bg-[#F3E6CC] p-8 text-black md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Fotografi
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/80">
                Una buona foto può fare la differenza. Cerchiamo persone che sappiano
                valorizzare i nostri animali attraverso immagini belle e autentiche.
              </p>
            </div>

            <div className="relative min-h-[260px]">
              <Image src="/gatto-5.jpg" alt="" fill className="object-cover" />
            </div>
          </div>

          <div className="grid min-h-[340px] grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[260px]">
              <Image src="/gatto-6.jpg" alt="" fill className="object-cover" />
            </div>

            <div className="flex flex-col justify-center bg-white p-8 text-black md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Supporto in gattile
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/75">
                Aiutaci nella gestione quotidiana: pulizia, organizzazione e cura
                degli spazi dove vivono i nostri animali.
              </p>
            </div>
          </div>

          <div className="grid min-h-[340px] grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center bg-[#E4B15A] p-8 text-black md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Eventi e raccolte fondi
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/85">
                Aiutaci a organizzare mercatini, eventi e iniziative per sostenere
                concretamente l’associazione.
              </p>
            </div>

            <div className="relative min-h-[260px]">
              <Image src="/chi-siamo.jpg" alt="" fill className="object-cover" />
            </div>
          </div>

        </div>
      </section>

      <section className="w-full bg-[#1F3B2D] py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
            Vuoi unirti a noi?
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 md:text-[15px]">
            Scrivici sui nostri social, su WhatsApp o via mail: ti spiegheremo come
            iniziare e troveremo insieme il modo migliore per coinvolgerti.
          </p>

          <div className="mt-6 flex items-center gap-5">
            <a
              href="https://wa.me/393393501334"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:opacity-80"
            >
              <FaWhatsapp size={28} />
            </a>

            <a
              href="https://instagram.com/tuo_profilo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4405F] hover:opacity-80"
            >
              <FaInstagram size={26} />
            </a>

            <a
              href="https://facebook.com/tuapagina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:opacity-80"
            >
              <FaFacebookF size={24} />
            </a>

            <a
              href="mailto:info@calicoodv.it"
              className="text-white hover:opacity-80"
            >
              <MdEmail size={30} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}