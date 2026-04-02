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
      className={`group relative inline-flex h-[48px] items-center justify-center overflow-hidden px-5 text-sm font-bold transition ${variants[variant]}`}
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
                <FancyButton
                  href="/diventa-volontario"
                  label="Scopri di più"
                  variant="gold"
                  icon={PawPrint}
                  heartClassName="text-[#FCFBF8]"
                  iconClassName="text-[#1F3B2D]"
                />
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
                <FancyButton
                  href="/sostienici"
                  label="Scopri di più"
                  variant="light"
                  icon={HeartHandshake}
                  heartClassName="text-[#E4B15A]"
                  iconClassName="text-[#C96B3C]"
                />
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
                <FancyButton
                  href="/consigli"
                  label="Scopri di più"
                  variant="dark"
                  icon={BookOpen}
                  heartClassName="text-[#E4B15A]"
                  iconClassName="text-black"
                />
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
    </main>
  )
}