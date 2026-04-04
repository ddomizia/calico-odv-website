import Image from 'next/image'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function VolunteerBlock({
  title,
  text,
  image,
  bgClass,
  textClass = 'text-black',
  reverseDesktop = false,
  imageFirstMobile = false,
}: {
  title: string
  text: string
  image: string
  bgClass: string
  textClass?: string
  reverseDesktop?: boolean
  imageFirstMobile?: boolean
}) {
  return (
    <div className="grid grid-cols-1 overflow-hidden md:min-h-[340px] md:grid-cols-2">
      <div
        className={`relative min-h-[220px] sm:min-h-[260px] md:min-h-[340px] ${
          imageFirstMobile ? 'order-1' : 'order-2'
        } ${reverseDesktop ? 'md:order-2' : 'md:order-1'}`}
      >
        <Image src={image} alt="" fill className="object-cover" />
      </div>

      <div
        className={`flex flex-col justify-center p-6 ${textClass} sm:p-8 md:p-12 ${
          imageFirstMobile ? 'order-2' : 'order-1'
        } ${reverseDesktop ? 'md:order-1' : 'md:order-2'} ${bgClass}`}
      >
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
          {title}
        </h2>

        <p
          className={`mt-4 max-w-xl text-sm leading-6 md:text-[15px] ${
            textClass === 'text-white' ? 'text-white/90' : 'text-black/80'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

export default function DiventaVolontarioPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="relative min-h-[460px] overflow-hidden sm:min-h-[520px] md:min-h-[560px]">
        <Image
          src="/home-hero.jpg"
          alt="Diventa volontario con Associazione Calico ODV"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[460px] max-w-7xl items-center px-6 py-14 sm:min-h-[520px] md:min-h-[560px] md:py-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-7xl">
              <span className="text-white">Diventa </span>
              <span className="text-[#E4B15A]">volontario</span>
            </h1>

            <div className="mt-6 max-w-3xl bg-white/10 px-4 py-4 backdrop-blur-sm sm:mt-8 sm:px-5">
              <p className="text-sm leading-6 text-white md:text-[15px]">
                Chiunque può diventare volontario: non ci sono limiti di nessun
                tipo. Cerchiamo persone che amano gli animali e che desiderano
                mettere a disposizione un po’ del proprio tempo e delle proprie
                energie.
              </p>

              <p className="mt-4 text-sm leading-6 text-white md:text-[15px]">
                Ogni aiuto è importante, anche il più piccolo. Ognuno può
                contribuire in modo diverso, in base alle proprie disponibilità e
                capacità.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] py-6 md:py-0">
        <div className="space-y-6 md:space-y-0">
          <VolunteerBlock
            title="Persone che amano gli animali"
            text="Il requisito più importante è la sensibilità verso gli animali. Non serve esperienza: conta la voglia di aiutare e di mettersi in gioco."
            image="/gatto-1.jpg"
            bgClass="bg-[#E4B15A]"
            textClass="text-black"
            imageFirstMobile={true}
          />

          <VolunteerBlock
            title="Drivers per le adozioni"
            text="Aiutaci nei trasporti dei gatti verso le loro nuove famiglie. I viaggi sono fondamentali per rendere possibili molte adozioni."
            image="/gatto-2.jpg"
            bgClass="bg-white"
            textClass="text-black"
            reverseDesktop={true}
          />

          <VolunteerBlock
            title="Coccolatori di gatti"
            text="Dedica tempo ai nostri gatti: coccole, compagnia e presenza sono fondamentali per il loro benessere, anche nei weekend."
            image="/gatto-3.jpg"
            bgClass="bg-[#1F3B2D]"
            textClass="text-white"
            imageFirstMobile={true}
          />

          <VolunteerBlock
            title="Supporto social media"
            text="Aiutaci a raccontare il nostro lavoro, le adozioni e le storie dei nostri gatti attraverso i social."
            image="/gatto-4.jpg"
            bgClass="bg-[#C96B3C]"
            textClass="text-white"
            reverseDesktop={true}
          />

          <VolunteerBlock
            title="Fotografi"
            text="Una buona foto può fare la differenza. Cerchiamo persone che sappiano valorizzare i nostri animali attraverso immagini belle e autentiche."
            image="/gatto-5.jpg"
            bgClass="bg-[#F3E6CC]"
            textClass="text-black"
            imageFirstMobile={true}
          />

          <VolunteerBlock
            title="Supporto in gattile"
            text="Aiutaci nella gestione quotidiana: pulizia, organizzazione e cura degli spazi dove vivono i nostri animali."
            image="/gatto-6.jpg"
            bgClass="bg-white"
            textClass="text-black"
            reverseDesktop={true}
          />

          <VolunteerBlock
            title="Eventi e raccolte fondi"
            text="Aiutaci a organizzare mercatini, eventi e iniziative per sostenere concretamente l’associazione."
            image="/chi-siamo.jpg"
            bgClass="bg-[#E4B15A]"
            textClass="text-black"
            imageFirstMobile={true}
          />
        </div>
      </section>

      <section className="w-full bg-[#1F3B2D] py-10 text-white md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-4xl">
            Vuoi unirti a noi?
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 md:text-[15px]">
            Scrivici sui nostri social, su WhatsApp o via mail: ti spiegheremo come
            iniziare e troveremo insieme il modo migliore per coinvolgerti.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/393393501334"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition hover:scale-105"
            >
              <FaWhatsapp size={22} />
            </a>

            <a
              href="https://www.instagram.com/associazionecalico"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#E4405F]/10 text-[#E4405F] transition hover:scale-105"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://www.facebook.com/associazionecalico/?locale=it_IT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2] transition hover:scale-105"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="mailto:calicoassociazione@gmail.com"
              aria-label="Email"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:scale-105"
            >
              <MdEmail size={22} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}