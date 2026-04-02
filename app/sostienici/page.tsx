'use client'

import Image from 'next/image'
import { FaPaypal, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import StatsStrip from '@/components/home/StatsStrip'

export default function SostieniciPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF8]">
      <section className="relative min-h-[560px] overflow-hidden">
        <Image
          src="/home-hero.jpg"
          alt="Sostieni Associazione Calico ODV"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
              <span className="text-white">Scopri come </span>
              <span className="text-[#E4B15A]">aiutarci</span>
            </h1>

            <div className="mt-6 max-w-3xl bg-white/90 px-5 py-4 text-sm leading-6 text-black shadow-sm backdrop-blur-sm">
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
        <div className="mx-auto grid min-h-[260px] max-w-7xl gap-8 px-6 text-white md:grid-cols-[1fr_260px_1fr] md:items-stretch">
          <div className="flex flex-col justify-center py-10">
            <p className="text-3xl font-black uppercase leading-tight md:text-4xl">
              Dona il 5x1000
            </p>

            <p className="mt-2 text-lg font-bold uppercase tracking-wide text-[#E4B15A]">
              all&apos;Associazione Calico
            </p>
          </div>

          <div className="relative flex h-full min-h-[260px] items-center justify-center">
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

          <div className="flex flex-col justify-center space-y-4 py-10 text-left md:text-right">
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
              <p className="mt-1 text-sm font-semibold md:text-base">
                IT04Z0200873190000105487575
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="w-full bg-[#FCFBF8]">
        <div className="space-y-0">
          <div className="grid min-h-[360px] grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center bg-[#E4B15A] p-8 text-black md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Dona con Teaming
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/85">
                Puoi sostenere l&apos;Associazione Calico anche con una piccola
                donazione mensile tramite Teaming. Con solo 1€ al mese ci aiuti
                a garantire cure, cibo e assistenza ai gatti, cani e altri
                animali che seguiamo ogni giorno.
              </p>

              <div className="mt-5">
                <a
                  href="https://www.teaming.net/calico?lang=it_IT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-[#1F3B2D] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  Vai al progetto Teaming
                </a>
              </div>
            </div>

            <div className="relative min-h-[260px]">
              <Image
                src="/gatto-1.jpg"
                alt="Sostieni i nostri gatti"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid min-h-[360px] grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[260px]">
              <Image
                src="/gatto-5.jpg"
                alt="Dona con PayPal"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center bg-white p-8 text-black md:p-12">
              <div className="flex items-center gap-3">
                <FaPaypal size={28} className="text-[#003087]" />
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                  Dona con PayPal
                </h2>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/75">
                Puoi sostenerci anche tramite PayPal. Ogni donazione, anche
                piccola, ci aiuta a coprire spese veterinarie, cibo, medicinali
                e tutto ciò che serve per prenderci cura degli animali che
                seguiamo.
              </p>

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
            </div>
          </div>

          <div className="grid min-h-[360px] grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center bg-[#C96B3C] p-8 text-white md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Dona generi alimentari per animali
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/90">
                Puoi aiutarci anche donando cibo e prodotti utili per i nostri
                animali. Abbiamo preparato una lista Amazon con le necessità più
                urgenti, così puoi scegliere facilmente cosa inviarci.
              </p>

              <div className="mt-5">
                <a
                  href="https://www.amazon.it/hz/wishlist/ls/25HSRLBZAAV4S?ref_=wl_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-white px-5 py-3 text-sm font-bold text-[#C96B3C] transition hover:opacity-90"
                >
                  Vai alla lista Amazon
                </a>
              </div>
            </div>

            <div className="relative min-h-[260px]">
              <Image
                src="/gatto-4.jpg"
                alt="Dona cibo per animali"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid min-h-[360px] grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[260px]">
              <Image
                src="/gatto-6.jpg"
                alt="Dona coperte e oggetti utili"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center bg-[#F3E6CC] p-8 text-black md:p-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Dona anche coperte, vestiti e mobili vecchi
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-black/80">
                Accettiamo anche coperte, asciugamani, vestiti e mobili che
                possano essere utili per i nostri spazi o per raccogliere fondi
                a sostegno dell&apos;associazione.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-black/80">
                Non esitare a contattarci sui nostri social, su WhatsApp o via
                mail per accordarti con noi e consegnarci queste cose.
              </p>

              <div className="mt-6 flex items-center gap-5">
                <a
                  href="https://wa.me/393393501334"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-[#25D366] transition hover:opacity-80"
                >
                  <FaWhatsapp size={26} />
                </a>

                <a
                  href="https://www.instagram.com/associazionecalico"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#E4405F] transition hover:opacity-80"
                >
                  <FaInstagram size={24} />
                </a>

                <a
                  href="https://www.facebook.com/associazionecalico/?locale=it_IT"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-[#1877F2] transition hover:opacity-80"
                >
                  <FaFacebookF size={22} />
                </a>

                <a
                  href="mailto:calicoassociazione@gmail.com"
                  aria-label="Email"
                  className="text-black transition hover:opacity-80"
                >
                  <MdEmail size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}