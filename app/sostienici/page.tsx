'use client'

import Image from 'next/image'
import { FaPaypal, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Check, X } from 'lucide-react'
import StatsStrip from '@/components/home/StatsStrip'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sostienici',
  description:
    'Scopri come sostenere Associazione Calico ODV con donazioni, 5x1000 e aiuti concreti per gli animali in difficoltà.',
  alternates: {
    canonical: '/sostienici',
  },
}

function SupportBlock({
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
    <div className="grid grid-cols-1 overflow-hidden md:min-h-[360px] md:grid-cols-2">
      <div
        className={`relative min-h-[220px] sm:min-h-[260px] md:min-h-[360px] ${
          imageFirstMobile ? 'order-1' : 'order-2'
        } ${reverseDesktop ? 'md:order-2' : 'md:order-1'}`}
      >
        <Image src={image} alt={imageAlt} fill className="object-cover" />
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

        <div className="mt-5">{children}</div>
      </div>
    </div>
  )
}

export default function SostieniciPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="relative min-h-[460px] overflow-hidden sm:min-h-[520px] md:min-h-[560px]">
        <Image
          src="/home-hero.jpg"
          alt="Sostieni Associazione Calico ODV"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[460px] max-w-7xl items-center px-6 py-14 sm:min-h-[520px] md:min-h-[560px] md:py-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-7xl">
              <span className="text-white">Scopri come </span>
              <span className="text-[#E4B15A]">aiutarci</span>
            </h1>

            <div className="mt-6 max-w-3xl bg-white/90 px-4 py-4 text-sm leading-6 text-black shadow-sm backdrop-blur-sm sm:px-5 md:text-[15px]">
              L’Associazione Calico ODV è un ente del Terzo Settore. Le donazioni
              effettuate a suo favore, tramite bonifico bancario, strumenti di
              pagamento tracciabili o altri mezzi previsti dalla normativa,
              possono beneficiare delle agevolazioni fiscali vigenti.
              <br />
              <br />
              In base alla legislazione italiana, le erogazioni liberali a favore
              delle organizzazioni di volontariato consentono, a seconda dei
              casi, di ottenere detrazioni d’imposta oppure deduzioni dal reddito
              imponibile. I benefici fiscali possono essere applicati in sede di
              dichiarazione dei redditi (Modello 730 o Modello Redditi).
              <br />
              <br />
              Per poter usufruire delle agevolazioni è necessario conservare la
              ricevuta del versamento effettuato.
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#1F3B2D]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 text-white md:min-h-[260px] md:grid-cols-[1fr_260px_1fr] md:items-stretch md:gap-8">
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-2xl font-black uppercase leading-tight sm:text-3xl md:text-4xl">
              Dona il 5x1000
            </p>

            <p className="mt-2 text-base font-bold uppercase tracking-wide text-[#E4B15A] sm:text-lg">
              all&apos;Associazione Calico
            </p>
          </div>

          <div className="relative mx-auto h-[150px] w-[150px] md:flex md:h-full md:min-h-[260px] md:w-full md:items-center md:justify-center">
            <div className="relative h-full w-full">
              <Image
                src="/logo-calico.png"
                alt="Logo Associazione Calico ODV"
                fill
                className="object-contain object-center"
                sizes="260px"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-4 text-center md:text-right">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E4B15A]">
                Codice fiscale
              </p>
              <p className="mt-1 text-xl font-black md:text-2xl">90129990561</p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E4B15A]">
                IBAN
              </p>
              <p className="mt-1 text-sm font-semibold break-words md:text-base">
                IT04Z0200873190000105487575
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="w-full bg-[#FCFBF8] py-6 md:py-0">
        <div className="space-y-6 md:space-y-0">
          <SupportBlock
            title="Dona con Teaming"
            text="Puoi sostenere l’Associazione Calico anche con una piccola donazione mensile tramite Teaming. Con solo 1€ al mese ci aiuti a garantire cure, cibo e assistenza ai gatti, cani e altri animali che seguiamo ogni giorno."
            image="/gatto-1.jpg"
            imageAlt="Sostieni i nostri gatti"
            bgClass="bg-[#E4B15A]"
            textClass="text-black"
            imageFirstMobile={true}
          >
            <a
              href="https://www.teaming.net/calico?lang=it_IT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#1F3B2D] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              Vai al progetto Teaming
            </a>
          </SupportBlock>

          <SupportBlock
            title="Dona con PayPal"
            text="Puoi sostenerci anche tramite PayPal. Ogni donazione, anche piccola, ci aiuta a coprire spese veterinarie, cibo, medicinali e tutto ciò che serve per prenderci cura degli animali che seguiamo."
            image="/gatto-5.jpg"
            imageAlt="Dona con PayPal"
            bgClass="bg-white"
            textClass="text-black"
            reverseDesktop={true}
          >
            <div className="flex items-center gap-3">
              <FaPaypal size={26} className="text-[#003087]" />
              <span className="text-sm font-semibold text-black/75">Donazione rapida online</span>
            </div>

            <div className="mt-5">
              <a
                href="https://www.paypal.com/paypalme/associazionecalico"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[#E4B15A] px-5 py-3 text-sm font-bold text-black transition hover:opacity-90"
              >
                Dona con PayPal
              </a>
            </div>
          </SupportBlock>

          <SupportBlock
            title="Dona generi alimentari per animali"
            text="Puoi aiutarci anche donando cibo e prodotti utili per i nostri animali. Abbiamo preparato una lista Amazon con le necessità più urgenti, così puoi scegliere facilmente cosa inviarci."
            image="/gatto-4.jpg"
            imageAlt="Dona cibo per animali"
            bgClass="bg-[#C96B3C]"
            textClass="text-white"
            imageFirstMobile={true}
          >
            <a
              href="https://www.amazon.it/hz/wishlist/ls/25HSRLBZAAV4S?ref_=wl_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-white px-5 py-3 text-sm font-bold text-[#C96B3C] transition hover:opacity-90"
            >
              Vai alla lista Amazon
            </a>
          </SupportBlock>

          <div className="grid grid-cols-1 overflow-hidden md:min-h-[360px] md:grid-cols-2">
            <div className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[360px]">
              <Image
                src="/gatto-6.jpg"
                alt="Dona coperte e materiali utili"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center bg-[#F3E6CC] p-6 text-black sm:p-8 md:p-12">
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                Dona coperte e materiali utili
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/80 md:text-[15px]">
                Puoi aiutarci anche donando materiali utili per i nostri spazi e
                per il benessere degli animali che seguiamo ogni giorno.
              </p>

              <div className="mt-6 grid gap-4">
                <div className="border border-black/10 bg-white/70 p-4">
                  <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#1F3B2D]">
                    Cosa accettiamo
                  </p>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="flex items-start gap-2 text-sm leading-6 text-black/80">
                      <Check size={16} className="mt-1 shrink-0 text-[#1F3B2D]" />
                      <span>Coperte</span>
                    </div>

                    <div className="flex items-start gap-2 text-sm leading-6 text-black/80">
                      <Check size={16} className="mt-1 shrink-0 text-[#1F3B2D]" />
                      <span>Lenzuola</span>
                    </div>

                    <div className="flex items-start gap-2 text-sm leading-6 text-black/80">
                      <Check size={16} className="mt-1 shrink-0 text-[#1F3B2D]" />
                      <span>Asciugamani</span>
                    </div>

                    <div className="flex items-start gap-2 text-sm leading-6 text-black/80">
                      <Check size={16} className="mt-1 shrink-0 text-[#1F3B2D]" />
                      <span>Maglioni</span>
                    </div>

                    <div className="flex items-start gap-2 text-sm leading-6 text-black/80 sm:col-span-2">
                      <Check size={16} className="mt-1 shrink-0 text-[#1F3B2D]" />
                      <span>Cuscini da sedia</span>
                    </div>
                  </div>
                </div>

                <div className="border border-black/10 bg-white/70 p-4">
                  <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#C96B3C]">
                    Cosa non accettiamo
                  </p>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="flex items-start gap-2 text-sm leading-6 text-black/80">
                      <X size={16} className="mt-1 shrink-0 text-[#C96B3C]" />
                      <span>Materassi</span>
                    </div>

                    <div className="flex items-start gap-2 text-sm leading-6 text-black/80">
                      <X size={16} className="mt-1 shrink-0 text-[#C96B3C]" />
                      <span>Cuscini da letto</span>
                    </div>

                    <div className="flex items-start gap-2 text-sm leading-6 text-black/80">
                      <X size={16} className="mt-1 shrink-0 text-[#C96B3C]" />
                      <span>Tappeti</span>
                    </div>

                    <div className="flex items-start gap-2 text-sm leading-6 text-black/80">
                      <X size={16} className="mt-1 shrink-0 text-[#C96B3C]" />
                      <span>Vestiti</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-6 text-black/80 md:text-[15px]">
                Per accordarti con noi sulla consegna, contattaci sui nostri
                social, su WhatsApp o via mail.
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/5 text-black transition hover:scale-105"
                >
                  <MdEmail size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}