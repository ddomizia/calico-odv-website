import Image from 'next/image'
import Link from 'next/link'
import {
  PawPrint,
  Heart,
  Cat,
  Dog,
  HeartHandshake,
  BookOpen,
} from 'lucide-react'
import StatsStrip from '@/components/home/StatsStrip'

type FancyButtonProps = {
  href: string
  label: string
  variant?: 'dark' | 'light' | 'gold' | 'cream'
  icon: React.ElementType
  heartClassName?: string
  iconClassName?: string
}

function FancyButton({
  href,
  label,
  variant = 'dark',
  icon: Icon,
  heartClassName = 'text-[#E4B15A]',
  iconClassName = 'text-black',
}: FancyButtonProps) {
  const variants = {
    dark: 'bg-black text-white hover:opacity-90',
    light: 'bg-white text-black hover:opacity-90',
    gold: 'bg-[#E4B15A] text-black hover:opacity-90',
    cream:
      'border border-black bg-transparent text-black hover:bg-black hover:text-white',
  }

  return (
    <Link
      href={href}
      className={`group relative inline-flex h-[48px] min-w-[170px] items-center justify-center overflow-hidden px-5 text-sm font-bold transition ${variants[variant]}`}
    >
      <span className="transition-opacity duration-200 group-hover:opacity-0">
        {label}
      </span>

      <span className="absolute flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span className="relative flex items-center justify-center">
          <Heart
            size={36}
            className={`absolute animate-pulse ${heartClassName}`}
            fill="currentColor"
          />
          <Icon size={18} className={`relative ${iconClassName}`} />
        </span>
      </span>
    </Link>
  )
}

function HomeFeatureSection({
  title,
  text,
  image,
  imageAlt,
  bgClass,
  textClass = 'text-black',
  imageFirstMobile = false,
  reverseDesktop = false,
  children,
}: {
  title: string
  text: string
  image: string
  imageAlt: string
  bgClass: string
  textClass?: string
  imageFirstMobile?: boolean
  reverseDesktop?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-1 md:min-h-[420px] md:grid-cols-2">
      <div
        className={`relative min-h-[220px] sm:min-h-[260px] md:min-h-[320px] ${
          imageFirstMobile ? 'order-1' : 'order-2'
        } ${reverseDesktop ? 'md:order-2' : 'md:order-1'}`}
      >
        <Image src={image} alt={imageAlt} fill className="object-cover" />
      </div>

      <div
        className={`flex flex-col justify-center p-6 ${textClass} sm:p-8 md:p-12 lg:p-14 ${
          imageFirstMobile ? 'order-2' : 'order-1'
        } ${reverseDesktop ? 'md:order-1' : 'md:order-2'} ${bgClass}`}
      >
        <h3 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
          {title}
        </h3>

        <p
          className={`mt-4 max-w-xl text-sm leading-6 md:text-[15px] ${
            textClass === 'text-white' ? 'text-white/90' : 'text-black/80'
          }`}
        >
          {text}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="relative min-h-[460px] overflow-hidden sm:min-h-[520px] md:min-h-[560px]">
        <Image
          src="/home-hero.jpg"
          alt="Associazione Calico ODV"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[460px] max-w-7xl items-center px-6 py-16 sm:min-h-[520px] md:min-h-[560px]">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-7xl">
              <span className="text-white">Associazione </span>
              <span className="text-[#E4B15A]">Calico</span>{' '}
              <span className="text-white">ODV</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:gap-10 md:py-16 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#E4B15A]">
            Associazione Calico ODV
          </p>

          <h2 className="text-3xl font-black uppercase tracking-tight text-black sm:text-4xl md:text-5xl">
            Chi siamo
          </h2>

          <div className="mt-4 h-2 w-24 bg-[#E4B15A] sm:w-28" />

          <div className="mt-6 space-y-4 text-[15px] leading-7 text-gray-700 md:mt-8 md:text-base">
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

          <div className="mt-8">
            <Link
              href="/chi-siamo"
              className="inline-flex items-center gap-3 bg-[#1F3B2D] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:opacity-90"
            >
              <span className="inline-flex animate-bounce">
                <PawPrint size={18} className="text-[#E4B15A]" />
              </span>
              Conoscici meglio
            </Link>
          </div>
        </div>

        <div className="order-1 relative min-h-[260px] bg-[#F3E6CC] sm:min-h-[340px] md:min-h-[420px] lg:order-2">
          <Image
            src="/chi-siamo.jpg"
            alt="Volontari Associazione Calico ODV"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="w-full bg-[#1F3B2D]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 text-white md:min-h-[220px] md:grid-cols-[1fr_260px_1fr] md:items-stretch md:gap-8">
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-2xl font-black uppercase leading-tight sm:text-3xl md:text-4xl">
              Dona il 5x1000
            </p>
            <p className="mt-2 text-base font-bold uppercase tracking-wide text-[#E4B15A] sm:text-lg">
              all&apos;Associazione Calico
            </p>
          </div>

          <div className="relative mx-auto h-[150px] w-[150px] md:h-full md:min-h-[220px] md:w-full">
            <Image
              src="/logo-calico.png"
              alt="Logo Associazione Calico ODV"
              fill
              className="object-contain object-center"
            />
          </div>

          <div className="flex flex-col justify-center text-center md:text-right">
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

      <section className="w-full bg-[#FCFBF8] py-10 md:py-16">
        <div className="space-y-6 md:space-y-0">
          <HomeFeatureSection
            title="Vuoi adottare un gatto o un cane?"
            text="Non cercare la perfezione, cerca l’emozione. Fatti guidare dal cuore e lasciati trovare: perché alla fine, sono sempre loro a sceglierci."
            image="/gatto-1.jpg"
            imageAlt="Adozione gatti"
            bgClass="bg-[#E4B15A]"
            textClass="text-black"
            imageFirstMobile={true}
          >
            <FancyButton
              href="/adozioni"
              label="Adotta un gatto"
              variant="dark"
              icon={Cat}
              heartClassName="text-[#FCFBF8]"
              iconClassName="text-black"
            />

            <FancyButton
              href="/cani"
              label="Adotta un cane"
              variant="cream"
              icon={Dog}
              heartClassName="text-[#C96B3C]"
              iconClassName="text-black"
            />
          </HomeFeatureSection>

          <HomeFeatureSection
            title="Diventa una/un volontaria/o"
            text="C’è spazio per ogni tipo di aiuto: presenza, tempo, idee, supporto pratico e cura quotidiana. Anche un piccolo contributo può fare una grande differenza nella vita degli animali che seguiamo."
            image="/gatto-2.jpg"
            imageAlt="Volontariato con i gatti"
            bgClass="bg-[#1F3B2D]"
            textClass="text-white"
            reverseDesktop={true}
          >
            <FancyButton
              href="/diventa-volontario"
              label="Scopri di più"
              variant="gold"
              icon={PawPrint}
              heartClassName="text-[#FCFBF8]"
              iconClassName="text-[#1F3B2D]"
            />
          </HomeFeatureSection>

          <HomeFeatureSection
            title="Vuoi sostenerci? Scopri come puoi aiutarci"
            text="Basta davvero poco per aiutarci ad aiutarli. Anche il valore di pochi euro può garantire cure e cibo a chi è stato meno fortunato: ogni goccia conta!"
            image="/gatto-3.jpg"
            imageAlt="Sostegno all'associazione"
            bgClass="bg-[#C96B3C]"
            textClass="text-white"
            imageFirstMobile={true}
          >
            <FancyButton
              href="/sostienici"
              label="Scopri di più"
              variant="light"
              icon={HeartHandshake}
              heartClassName="text-[#E4B15A]"
              iconClassName="text-[#C96B3C]"
            />
          </HomeFeatureSection>

          <HomeFeatureSection
            title="I nostri consigli"
            text="Approfondimenti, indicazioni pratiche e contenuti utili per orientarsi meglio nell’adozione, nella convivenza e nella cura quotidiana degli animali."
            image="/gatto-4.jpg"
            imageAlt="Consigli sui gatti"
            bgClass="bg-[#F3E6CC]"
            textClass="text-black"
            reverseDesktop={true}
          >
            <FancyButton
              href="/consigli"
              label="Scopri di più"
              variant="dark"
              icon={BookOpen}
              heartClassName="text-[#E4B15A]"
              iconClassName="text-black"
            />
          </HomeFeatureSection>
        </div>
      </section>
    </main>
  )
}