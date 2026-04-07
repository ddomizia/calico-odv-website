import Image from 'next/image'
import Link from 'next/link'
import {
  Home,
  Cat,
  Dog,
  Rabbit,
  BookOpen,
  HandCoins,
  Users,
  CalendarHeart,
  Camera,
  ArrowRight,
  MapPin,
  FileText,
  ShieldCheck,
} from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi siamo',
  description:
    'Scopri la storia, i progetti e l’impegno quotidiano di Associazione Calico ODV tra Nepi, Roma e il Lazio.',
  alternates: {
    canonical: '/chi-siamo',
  },
}

type ProjectCardProps = {
  title: string
  text: string
  href: string
  icon: React.ElementType
  bgClass: string
  textClass?: string
}

function ProjectCard({
  title,
  text,
  href,
  icon: Icon,
  bgClass,
  textClass = 'text-black',
}: ProjectCardProps) {
  return (
    <article
      className={`flex h-full flex-col justify-between p-5 sm:p-6 md:p-7 ${bgClass}`}
    >
      <div>
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/70 sm:h-12 sm:w-12">
          <Icon size={21} className={textClass} />
        </div>

        <h3 className={`text-xl font-black leading-tight sm:text-2xl ${textClass}`}>
          {title}
        </h3>

        <p
          className={`mt-3 text-sm leading-6 md:text-[15px] ${
            textClass === 'text-white' ? 'text-white/90' : 'text-black/80'
          }`}
        >
          {text}
        </p>
      </div>

      <div className="mt-5">
        <Link
          href={href}
          className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide transition ${
            textClass === 'text-white'
              ? 'text-white hover:opacity-80'
              : 'text-black hover:opacity-80'
          }`}
        >
          Scopri di più
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  )
}

function TransparencyLink({
  href,
  label,
}: {
  href: string
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-[#F3E6CC]"
    >
      <FileText size={16} className="text-[#C96B3C]" />
      <span>{label}</span>
    </a>
  )
}

function SocialButton({
  href,
  label,
  children,
  className,
}: {
  href: string
  label: string
  children: React.ReactNode
  className: string
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition hover:scale-[1.03] ${className}`}
    >
      {children}
      <span>{label}</span>
    </a>
  )
}

export default function ChiSiamoPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 md:py-16">
          <div className="grid items-center gap-6 md:grid-cols-[0.95fr_1.05fr] md:gap-8">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#E4B15A]">
                Associazione Calico ODV
              </p>

              <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-7xl">
                <span className="text-black">Chi </span>
                <span className="text-[#E4B15A]">siamo</span>
              </h1>

              <div className="mt-5 h-2 w-28 bg-[#E4B15A] md:h-3 md:w-44" />

              <div className="mt-8 space-y-4 text-[15px] leading-7 text-gray-700 md:text-base">
                <p>
                  <strong>Calico ODV è nata nel 2021</strong> dall’impegno di
                  volontarie e volontari che hanno scelto di non voltarsi
                  dall’altra parte davanti alla fragilità degli animali più
                  vulnerabili. Operiamo in tutto il Lazio, principalmente tra
                  Nepi e Roma, occupandoci ogni giorno di recupero, accoglienza,
                  cura, sensibilizzazione e percorsi di adozione consapevole
                  costruiti con attenzione e responsabilità. Ogni animale che
                  incontriamo non è mai solo un numero, ma una storia unica fatta
                  di esperienze, paure e possibilità: il nostro compito è
                  accompagnarlo con rispetto e sensibilità verso una nuova
                  stabilità, seguendo i suoi tempi e aiutandolo a ritrovare
                  fiducia. È un lavoro fatto di presenza concreta, piccoli gesti
                  quotidiani e scelte consapevoli, con l’obiettivo di offrire a
                  ciascuno non solo protezione, ma anche una reale opportunità di
                  rinascita e di vita serena.
                </p>
              </div>

              <div className="mt-8 border-t border-black/10 pt-6">
                <p className="text-xs font-bold uppercase tracking-wide text-black/70">
                  Contattaci
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <SocialButton
                    href="https://wa.me/393393501334"
                    label="WhatsApp"
                    className="bg-[#25D366]/10 text-[#25D366]"
                  >
                    <FaWhatsapp size={18} />
                  </SocialButton>

                  <SocialButton
                    href="https://www.instagram.com/associazionecalico"
                    label="Instagram"
                    className="bg-[#E4405F]/10 text-[#E4405F]"
                  >
                    <FaInstagram size={18} />
                  </SocialButton>

                  <SocialButton
                    href="https://www.facebook.com/associazionecalico/?locale=it_IT"
                    label="Facebook"
                    className="bg-[#1877F2]/10 text-[#1877F2]"
                  >
                    <FaFacebookF size={16} />
                  </SocialButton>

                  <SocialButton
                    href="mailto:calicoassociazione@gmail.com"
                    label="Email"
                    className="bg-black/5 text-black"
                  >
                    <MdEmail size={18} />
                  </SocialButton>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-[220px] sm:max-w-[260px] md:max-w-[320px]">
                <Image
                  src="/logo-calico.png"
                  alt="Logo Associazione Calico ODV"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 md:py-16">
          <div className="grid gap-6 overflow-hidden md:grid-cols-[0.95fr_1.05fr] md:gap-8">
            <div className="relative min-h-[320px] bg-[#F3E6CC] sm:min-h-[420px] md:min-h-[620px]">
              <Image
                src="/sonia-d-angelo.jpg"
                alt="Sonia Nicoletta D'Angelo"
                fill
                priority
                className="object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-black/15" />
            </div>

            <div className="flex flex-col justify-center bg-[#FCFBF8] p-5 sm:p-6 md:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#C96B3C]">
                Fondatrice
              </p>

              <h2 className="text-2xl font-black leading-tight text-black sm:text-3xl md:text-5xl">
                Sonia Nicoletta D&apos;Angelo
              </h2>

              <div className="mt-4 h-2 w-24 bg-[#C96B3C]" />

              <div className="mt-6 space-y-4 text-[15px] leading-7 text-gray-700 md:mt-8 md:text-base">
                <p>
                  Sonia Nicoletta D&apos;Angelo è la fondatrice dell’Associazione
                  Calico ODV e il cuore del progetto da cui tutto ha preso forma.
                  Il suo impegno nasce da una scelta chiara: offrire agli animali
                  più vulnerabili una possibilità concreta di cura, protezione e
                  rinascita.
                </p>

                <p>
                  Attorno alla sua visione si è costruita una rete di persone che
                  ogni giorno lavora sul campo: dal recupero degli animali in
                  difficoltà alla gestione degli spazi, dalle adozioni alla
                  sensibilizzazione, fino all’organizzazione delle attività che
                  permettono all’associazione di continuare a operare.
                </p>

                <p>
                  La sua presenza è un punto di riferimento per tutta
                  l’associazione: nell’attenzione ai singoli casi, nella
                  costruzione dei progetti e nella capacità di trasformare la cura
                  quotidiana in qualcosa di stabile, concreto e profondamente
                  umano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-14 md:py-16">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#E4B15A]">
              Dove operiamo
            </p>

            <h2 className="text-2xl font-black uppercase tracking-tight text-black sm:text-3xl md:text-5xl">
              Un aiuto concreto per gli animali più fragili
            </h2>

            <div className="mt-4 h-2 w-28 bg-[#E4B15A]" />

            <div className="mt-6 space-y-4 text-[15px] leading-7 text-gray-700 md:mt-8 md:text-base">
              <p>
                L’associazione segue con attenzione gatti, cani e anche conigli,
                costruendo per ciascuno un percorso il più possibile rispettoso
                dei suoi tempi e dei suoi bisogni.
              </p>

              <p>
                A Nepi, in provincia di Viterbo, abbiamo creato{' '}
                <strong>La Gatteria</strong>, un piccolo rifugio dove ospitiamo
                gatti abbandonati in attesa di una famiglia.
              </p>

              <p>
                A Roma operiamo anche all’interno della struttura di{' '}
                <strong>Valle Grande</strong>, dove ci occupiamo della cura
                quotidiana degli animali ospitati, seguendone il benessere e
                promuovendo percorsi di adozione consapevole.
              </p>

              <p>
                Il nostro lavoro non si limita all’accoglienza: significa anche
                seguire situazioni delicate, accompagnare le adozioni, sostenere
                animali con fragilità sanitarie, organizzare eventi e raccolte
                fondi, diffondere informazioni corrette e costruire una rete di
                persone disponibili a dare una mano in modi diversi.
              </p>
            </div>
          </div>

          <div className="overflow-hidden border border-black/10 bg-white">
            <div className="border-b border-black/10 bg-[#FCFBF8] p-6 sm:p-8 md:p-10">
              <div className="flex flex-col items-center text-center">
                <a
                  href="https://www.vallegrandecaniegatti.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-28 w-full max-w-[260px] transition hover:scale-[1.02] sm:h-32 sm:max-w-[300px] md:h-40 md:max-w-[360px]"
                  aria-label="Vai al sito di Valle Grande"
                >
                  <Image
                    src="/vallegrande.png"
                    alt="Logo Valle Grande cani e gatti"
                    fill
                    className="object-contain"
                  />
                </a>

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#C96B3C]">
                  Roma
                </p>

                <h3 className="mt-2 text-xl font-black leading-tight text-black sm:text-2xl md:text-3xl">
                  Il nostro impegno anche presso Valle Grande
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6 md:p-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4B15A]/20 text-black">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-sm leading-6 text-gray-700 md:text-[15px]">
                    Nella struttura di Valle Grande seguiamo da vicino gli animali
                    ospitati, contribuendo alla loro cura quotidiana, alla loro
                    visibilità e alla ricerca di famiglie adatte. È un lavoro
                    fatto di presenza costante, attenzione e collaborazione sul
                    campo.
                  </p>

                  <div className="mt-5">
                    <a
                      href="https://www.vallegrandecaniegatti.it/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#E4B15A] px-5 py-3 text-sm font-bold text-black transition hover:opacity-90"
                    >
                      Visita il sito di Valle Grande
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trasparenza" className="w-full bg-white scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 md:py-16">
          <div className="overflow-hidden border border-black/10 bg-[#FCFBF8]">
            <div className="grid gap-0 md:grid-cols-[1fr_1.1fr]">
              <div className="bg-[#1F3B2D] p-6 text-white sm:p-8 md:p-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <ShieldCheck size={22} className="text-[#E4B15A]" />
                </div>

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#E4B15A]">
                  Trasparenza
                </p>

                <h2 className="mt-3 text-2xl font-black uppercase leading-tight sm:text-3xl md:text-4xl">
                  Documenti e rendicontazione dell’associazione
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 md:text-[15px]">
                  Associazione Calico ODV è nata nel 2021. In questa sezione puoi
                  consultare i documenti di trasparenza dell’associazione, con i
                  riferimenti ai bilanci annuali e alla rendicontazione del
                  5x1000.
                </p>
              </div>

              <div className="p-5 sm:p-6 md:p-10">
                <div className="grid gap-3 sm:grid-cols-2">
                  <TransparencyLink
                    href="/calico-bilancio-2021.pdf"
                    label="Bilancio 2021"
                  />
                  <TransparencyLink
                    href="/calico-bilancio-2022.pdf"
                    label="Bilancio 2022"
                  />
                  <TransparencyLink
                    href="/calico-bilancio-2023.pdf"
                    label="Bilancio 2023"
                  />
                  <TransparencyLink
                    href="/calico-bilancio-2024.pdf"
                    label="Bilancio 2024"
                  />
                  <TransparencyLink
                    href="/calico-bilancio-2025.pdf"
                    label="Bilancio 2025"
                  />
                  <TransparencyLink
                    href="/calico-5x1000.pdf"
                    label="Rendicontazione 5x1000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F3E6CC] py-12 sm:py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 max-w-4xl sm:mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#C96B3C]">
              Cosa facciamo
            </p>

            <h2 className="text-2xl font-black uppercase tracking-tight text-black sm:text-3xl md:text-5xl">
              I progetti che raccontano il nostro lavoro
            </h2>

            <div className="mt-4 h-2 w-28 bg-[#E4B15A]" />

            <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-700 md:text-[15px]">
              Ogni pagina del sito racconta una parte concreta del nostro
              impegno: gli animali accolti, gli spazi che curiamo, le attività
              che organizziamo e i modi in cui chi ci incontra può diventare
              parte di questo percorso.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            <ProjectCard
              title="Adozioni di gatti"
              text="Seguiamo gatti con storie diverse, dai più giovani ai più anziani, costruendo per ciascuno un percorso di adozione consapevole."
              href="/adozioni"
              icon={Cat}
              bgClass="bg-white"
            />

            <ProjectCard
              title="Adozioni di cani"
              text="Promuoviamo anche le adozioni dei cani ospitati nelle strutture che seguiamo, aiutando adottanti e animali a incontrarsi nel modo giusto."
              href="/cani"
              icon={Dog}
              bgClass="bg-[#E4B15A]"
            />

            <ProjectCard
              title="La Gatteria"
              text="A Nepi abbiamo creato un piccolo rifugio che accoglie gatti abbandonati o fragili, offrendo loro un luogo protetto in attesa di una famiglia."
              href="/gatteria"
              icon={Home}
              bgClass="bg-[#1F3B2D]"
              textClass="text-white"
            />

            <ProjectCard
              title="I conigli di Valle Grande"
              text="Ci prendiamo cura anche dei conigli accolti nella struttura di Valle Grande a Roma, garantendo alimentazione corretta, protezione e una routine sicura."
              href="/conigli"
              icon={Rabbit}
              bgClass="bg-white"
            />

            <ProjectCard
              title="Consigli e adozione consapevole"
              text="Abbiamo creato uno spazio informativo per accompagnare le persone nell’adozione, con indicazioni pratiche e approfondimenti utili."
              href="/consigli"
              icon={BookOpen}
              bgClass="bg-[#F3E6CC]"
            />

            <ProjectCard
              title="Sostegno all’associazione"
              text="Donazioni, 5x1000, raccolte di materiali e supporto concreto: tutto questo ci permette di continuare a prenderci cura degli animali ogni giorno."
              href="/sostienici"
              icon={HandCoins}
              bgClass="bg-[#C96B3C]"
              textClass="text-white"
            />

            <ProjectCard
              title="Volontariato"
              text="Cerchiamo persone che vogliano dedicare tempo, energie, competenze e presenza: ogni aiuto può davvero fare la differenza."
              href="/diventa-volontario"
              icon={Users}
              bgClass="bg-[#E4B15A]"
            />

            <ProjectCard
              title="Eventi e attività"
              text="Mercatini, raccolte fondi, sensibilizzazione e iniziative pubbliche: momenti importanti per sostenere gli animali e far conoscere il nostro lavoro."
              href="/attivita"
              icon={CalendarHeart}
              bgClass="bg-white"
            />

            <ProjectCard
              title="Adozioni riuscite"
              text="Le storie degli animali che hanno già trovato casa raccontano il senso più bello del nostro lavoro quotidiano."
              href="/adottati"
              icon={Camera}
              bgClass="bg-[#1F3B2D]"
              textClass="text-white"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#1F3B2D] py-12 text-white sm:py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-4xl">
                Un’associazione fatta di cura quotidiana
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-white/90 md:text-[15px]">
                Dietro ogni adozione, ogni recupero e ogni storia andata a buon
                fine c’è un lavoro costante fatto di presenza, attenzione e
                responsabilità. Se vuoi conoscerci meglio, sostenerci o unirti a
                noi, le porte sono aperte.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/sostienici"
                className="inline-flex bg-[#E4B15A] px-5 py-3 text-sm font-bold text-black transition hover:opacity-90"
              >
                Sostienici
              </Link>

              <Link
                href="/diventa-volontario"
                className="inline-flex border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black"
              >
                Diventa volontario
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}