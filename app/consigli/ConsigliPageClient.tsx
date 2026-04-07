'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  AlertTriangle,
  Cat,
  DoorClosed,
  HeartHandshake,
  Home,
  ShoppingBag,
  ShieldAlert,
  PawPrint,
  Heart,
  Users,
  Smile,
  HeartPulse,
  Stethoscope,
  X,
} from 'lucide-react'

type AdviceCard = {
  id: string
  title: string
  subtitle: string
  icon: React.ElementType
  accent: string
  content: React.ReactNode
}

function TopicCard({
  title,
  subtitle,
  icon: Icon,
  accent,
  onClick,
}: {
  title: string
  subtitle: string
  icon: React.ElementType
  accent: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group flex h-full flex-col justify-between border border-black/10 bg-white p-5 text-left transition duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-6"
    >
      <div>
        <div
          className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full sm:mb-5 sm:h-12 sm:w-12"
          style={{ backgroundColor: accent }}
        >
          <Icon size={20} className="text-black sm:size-[22px]" />
        </div>

        <h3 className="text-xl font-black uppercase leading-tight text-black sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-700">{subtitle}</p>
      </div>

      <span className="mt-6 inline-flex text-sm font-bold uppercase tracking-wide text-[#1F3B2D] sm:mt-8">
        Apri la scheda
      </span>
    </button>
  )
}

function EmptyTopicCard({
  title,
  subtitle,
  icon: Icon,
  accent,
}: {
  title: string
  subtitle: string
  icon: React.ElementType
  accent: string
}) {
  return (
    <div className="flex h-full flex-col justify-between border border-dashed border-black/15 bg-white/70 p-5 text-left sm:p-6">
      <div>
        <div
          className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full sm:mb-5 sm:h-12 sm:w-12"
          style={{ backgroundColor: accent }}
        >
          <Icon size={20} className="text-black sm:size-[22px]" />
        </div>

        <h3 className="text-xl font-black uppercase leading-tight text-black sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-700">{subtitle}</p>
      </div>

      <span className="mt-6 inline-flex text-sm font-bold uppercase tracking-wide text-black/40 sm:mt-8">
        Schede in arrivo
      </span>
    </div>
  )
}

function AdviceBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="border border-black/10 bg-[#FCFBF8] p-4">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 shrink-0 text-[#C96B3C]">
          <Icon size={18} />
        </div>

        <div className="min-w-0">
          <h4 className="text-sm font-black uppercase tracking-wide text-black">
            {title}
          </h4>

          <div className="mt-2 space-y-2 text-xs leading-6 text-gray-700 md:text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

function BenefitItem({
  number,
  title,
  text,
  icon: Icon,
}: {
  number: string
  title: string
  text: string
  icon: React.ElementType
}) {
  return (
    <div className="border border-black/10 bg-[#FCFBF8] p-4">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E4B15A] text-black">
          <Icon size={16} />
        </div>

        <div>
          <h4 className="text-sm font-black text-black">
            {number}. {title}
          </h4>
          <p className="mt-2 text-xs leading-6 text-gray-700 md:text-sm">{text}</p>
        </div>
      </div>
    </div>
  )
}

function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 px-3 py-3 sm:items-center sm:px-4 sm:py-6">
      <div className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden border border-black/10 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-black/10 bg-[#FCFBF8] px-4 py-4 sm:px-5 md:px-6">
          <h3 className="pr-4 text-lg font-black uppercase leading-tight text-black sm:text-xl md:text-2xl">
            {title}
          </h3>

          <button
            onClick={onClose}
            aria-label="Chiudi"
            className="inline-flex h-10 w-10 items-center justify-center border border-black/10 bg-white text-black transition hover:bg-black hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[calc(92vh-72px)] overflow-y-auto px-4 py-5 sm:px-5 md:px-6 md:py-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ConsigliPageClient() {
  const [openCard, setOpenCard] = useState<string | null>(null)

  const adviceCards: AdviceCard[] = [
    {
      id: 'adozione',
      title: 'I nostri consigli per la tua adozione',
      subtitle:
        'Indicazioni pratiche per il viaggio, i primi giorni in casa, l’inserimento con altri gatti, i pericoli domestici e le cose da evitare.',
      icon: HeartHandshake,
      accent: '#E4B15A',
      content: (
        <div className="space-y-4">
          <p className="max-w-4xl text-xs leading-6 text-gray-700 md:text-sm">
            Questi consigli nascono dall’esperienza quotidiana dell’associazione:
            non vogliono essere una lezione, ma un aiuto concreto per rendere
            l’arrivo del gatto più sereno e sicuro. I primi giorni contano molto:
            anche un gatto dolce e tranquillo può essere spaventato dal cambio di
            ambiente.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <AdviceBlock icon={ShoppingBag} title="Prima di partire e durante il viaggio">
              <p>Acquista un trasportino resistente e rigido, non morbido di stoffa.</p>
              <p>Apri il trasportino solo quando sarai arrivato a casa, mai in auto o durante il viaggio.</p>
            </AdviceBlock>

            <AdviceBlock icon={Home} title="I primi giorni in casa">
              <p>
                All’inizio lascialo tranquillo in un bagno, in una stanza piccola
                o comunque in un luogo ristretto, chiudendo bene finestre e porte.
              </p>
              <p>
                Apri il trasportino ma non forzarlo a uscire: deve sentirsi libero
                di osservare e muoversi con i suoi tempi.
              </p>
              <p>
                Tieni a disposizione lettiera, acqua e croccantini; il cibo umido
                è meglio offrirlo mattina e sera.
              </p>
              <p>
                Lascialo in questo spazio per qualche giorno, finché non avrà preso
                sicurezza e confidenza.
              </p>
            </AdviceBlock>

            <AdviceBlock icon={DoorClosed} title="Inserimento con altri gatti">
              <p>
                Se in casa c’è già un gatto, evita di presentare subito il nuovo
                arrivato dal trasportino.
              </p>
              <p>
                L’inserimento va fatto gradualmente, iniziando dallo scambio di
                odori tramite copertine, cuscini o tessuti su cui hanno dormito.
              </p>
              <p>
                Quando possibile, usa una rete o una porta socchiusa per farli
                annusare e osservare in sicurezza.
              </p>
            </AdviceBlock>

            <AdviceBlock icon={ShieldAlert} title="Cosa non fare assolutamente">
              <p>Non mettere il collarino.</p>
              <p>Non fargli il bagno nei primi giorni.</p>
              <p>Non portarlo subito dal veterinario se non ci sono urgenze.</p>
              <p>Non tagliare le unghie appena arrivato.</p>
              <p>Non usare antiparassitari senza aver verificato eventuali trattamenti già fatti.</p>
            </AdviceBlock>

            <AdviceBlock icon={Cat} title="Cosa fare">
              <p>
                Se vuoi cambiare alimentazione, fai uno scalaggio graduale dei
                croccantini e non cambiare tutto di colpo.
              </p>
            </AdviceBlock>

            <AdviceBlock icon={AlertTriangle} title="Pericoli in casa">
              <p>Terrazzi non protetti.</p>
              <p>Finestre a vasistas.</p>
              <p>Elettrodomestici come lavatrici, asciugatrici e lavastoviglie.</p>
              <p>Fili, lacci, plastica e piccoli oggetti ingeribili.</p>
              <p>Divani letto e altri meccanismi richiudibili.</p>
              <p>Water aperto, soprattutto con gattini molto piccoli.</p>
              <p>Acqua stagnante con detersivi o sostanze nocive.</p>
              <p>Lettiere autopulenti.</p>
              <p>Collarini con campanello o anche “di sicurezza”.</p>
            </AdviceBlock>
          </div>
        </div>
      ),
    },
    {
      id: 'due-gatti',
      title: 'Perché adottare due gatti',
      subtitle:
        'Una scheda dedicata ai vantaggi dell’adozione in coppia: equilibrio, socialità, compagnia reciproca e una gestione spesso molto simile.',
      icon: PawPrint,
      accent: '#C96B3C',
      content: (
        <div className="space-y-4">
          <p className="max-w-4xl text-xs leading-6 text-gray-700 md:text-sm">
            Adottare due gatti, soprattutto se compatibili o già abituati alla
            compagnia, può essere una scelta molto positiva sia per loro sia per
            chi li accoglie.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <BenefitItem
              number="1"
              title="Più gioco, meno disastri"
              text="Si sfogano tra loro, quindi meno stress, meno disastri."
              icon={Cat}
            />
            <BenefitItem
              number="2"
              title="Meno solitudine"
              text="Si fanno compagnia e si sentono al sicuro anche quando non sei in casa."
              icon={Users}
            />
            <BenefitItem
              number="3"
              title="Miglior equilibrio emotivo"
              text="Si tranquillizzano a vicenda e sono più sereni ogni giorno."
              icon={Smile}
            />
            <BenefitItem
              number="4"
              title="Apprendimento sociale"
              text="Imparano a giocare senza farsi male e a rispettare i limiti."
              icon={HeartHandshake}
            />
            <BenefitItem
              number="5"
              title="Dose doppia di amore"
              text="Due personalità, il doppio delle coccole e dei momenti dolci."
              icon={Heart}
            />
            <BenefitItem
              number="6"
              title="Quasi lo stesso impegno"
              text="La differenza tra uno o due gatti è minima nella vita quotidiana."
              icon={PawPrint}
            />
          </div>
        </div>
      ),
    },
  ]

  const activeCard = adviceCards.find((card) => card.id === openCard)

  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="relative min-h-[460px] overflow-hidden sm:min-h-[520px] md:min-h-[560px]">
        <Image
          src="/gatto-6.jpg"
          alt="I nostri consigli per l’adozione e la cura dei gatti"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[460px] max-w-7xl items-center px-6 py-14 sm:min-h-[520px] md:min-h-[560px] md:py-16">
          <div className="max-w-5xl">
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-7xl">
              <span className="text-white">I nostri </span>
              <span className="text-[#E4B15A]">consigli</span>
            </h1>

            <div className="mt-6 max-w-3xl bg-white/10 px-4 py-4 backdrop-blur-sm sm:mt-8 sm:px-5">
              <p className="text-sm leading-6 text-white md:text-[15px]">
                In questa pagina trovi schede tematiche pensate per raccogliere i
                consigli più utili in modo chiaro e consultabile. L’idea è quella
                di aggiungere nel tempo sempre più argomenti, così da creare uno
                spazio pratico per chi si avvicina all’adozione o ha bisogno di
                orientarsi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F3E6CC] py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="border border-black/10 bg-[#FCFBF8] p-5 sm:p-6 md:p-8">
              <div className="mb-6 max-w-2xl sm:mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C96B3C]">
                  I nostri consigli
                </p>
                <h2 className="mt-3 text-2xl font-black uppercase leading-none text-black sm:text-3xl md:text-4xl">
                  Schede pratiche per l’adozione
                </h2>
                <p className="mt-4 text-sm leading-6 text-black/75 md:text-[15px]">
                  Qui trovi le schede dedicate alla gestione dell’adozione, ai
                  primi giorni in casa e alla convivenza quotidiana con i gatti.
                </p>
              </div>

              <div className="grid gap-5 xl:grid-cols-2">
                {adviceCards.map((card) => (
                  <TopicCard
                    key={card.id}
                    title={card.title}
                    subtitle={card.subtitle}
                    icon={card.icon}
                    accent={card.accent}
                    onClick={() => setOpenCard(card.id)}
                  />
                ))}
              </div>
            </div>

            <div className="border border-black/10 bg-white p-5 sm:p-6 md:p-8">
              <div className="mb-6 max-w-2xl sm:mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1F3B2D]">
                  Salute e approfondimenti
                </p>
                <h2 className="mt-3 text-2xl font-black uppercase leading-none text-black sm:text-3xl md:text-4xl">
                  Scopri di più sulle principali malattie dei gatti
                </h2>
                <p className="mt-4 text-sm leading-6 text-gray-700 md:text-[15px]">
                  In questa sezione raccoglieremo schede dedicate ai temi sanitari
                  più importanti, per aiutarti a comprendere meglio alcune
                  condizioni frequenti e adottare con maggiore consapevolezza.
                </p>
              </div>

              <div className="grid gap-5 xl:grid-cols-2">
                <EmptyTopicCard
                  title="Schede in arrivo"
                  subtitle="Presto troverai qui approfondimenti chiari e accessibili su FIV, FeLV e altre condizioni importanti da conoscere."
                  icon={HeartPulse}
                  accent="#E4B15A"
                />

                <EmptyTopicCard
                  title="Spazio dedicato alla salute"
                  subtitle="Questa area sarà ampliata progressivamente con contenuti pensati per orientare chi adotta senza creare allarmismi inutili."
                  icon={Stethoscope}
                  accent="#D8C3A5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#1F3B2D] py-10 text-white md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-4xl">
                Se hai qualsiasi dubbio, contattaci
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 md:text-[15px]">
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

      <Modal
        open={!!activeCard}
        onClose={() => setOpenCard(null)}
        title={activeCard?.title || ''}
      >
        {activeCard?.content}
      </Modal>
    </main>
  )
}