'use client'

import Link from 'next/link'
import { Cookie, ShieldCheck, MonitorPlay, X } from 'lucide-react'

export default function CookiePreferencesModal({
  isOpen,
  thirdPartyEnabled,
  onClose,
  onToggleThirdParty,
  onSave,
}: {
  isOpen: boolean
  thirdPartyEnabled: boolean
  onClose: () => void
  onToggleThirdParty: () => void
  onSave: () => void
}) {
  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-[120] bg-black/40 backdrop-blur-[3px]"
        onClick={onClose}
      />

      <div className="fixed left-1/2 top-1/2 z-[130] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 border border-[#e8dcc7] bg-[#FCFBF8] shadow-[0_25px_80px_rgba(0,0,0,0.18)]">
        <div className="flex items-center justify-between border-b border-[#e8dcc7] px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#E4B15A]/20 text-black">
              <Cookie size={20} />
            </span>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C96B3C]">
                Cookie
              </p>
              <h2 className="text-2xl font-black leading-tight text-black">
                Impostazioni dei cookie
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e8dcc7] bg-white text-black transition hover:bg-black hover:text-white"
            aria-label="Chiudi preferenze cookie"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-6 px-6 py-6">
          <p className="text-sm leading-6 text-gray-700 md:text-[15px]">
            Il sito utilizza cookie tecnici necessari al funzionamento. Alcune
            pagine possono includere contenuti esterni, come la diretta video
            della Gatteria tramite CatLives. Questi contenuti vengono caricati
            solo dopo il consenso e possono comportare la raccolta di dati
            tecnici da parte delle piattaforme esterne, secondo le rispettive
            informative sulla privacy. Per maggiori dettagli puoi consultare la
            nostra{' '}
            <Link
              href="/privacy-policy"
              className="font-semibold text-black underline underline-offset-2"
            >
              Informativa sulla Privacy e Cookie
            </Link>
            .
          </p>

          <div className="border border-[#e8dcc7] bg-white p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#C96B3C]" />
                  <h3 className="text-lg font-bold text-black">
                    Cookie necessari
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-700">
                  Questi cookie sono necessari per il corretto funzionamento del
                  sito web e non possono essere disattivati. Servono, ad esempio,
                  a memorizzare le preferenze privacy e a garantire le funzioni
                  tecniche essenziali del sito.
                </p>
              </div>

              <span className="inline-flex shrink-0 border border-[#E4B15A]/40 bg-[#FDF6E8] px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-black">
                Sempre attivi
              </span>
            </div>
          </div>

          <div className="border border-[#e8dcc7] bg-white p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="max-w-xl">
                <div className="flex items-center gap-2">
                  <MonitorPlay size={18} className="text-[#C96B3C]" />
                  <h3 className="text-lg font-bold text-black">
                    Contenuti di terze parti
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-700">
                  Questo sito può includere contenuti incorporati da piattaforme
                  esterne, come la diretta video della Gatteria tramite
                  CatLives. Questi contenuti non vengono caricati automaticamente,
                  ma solo dopo il tuo consenso. Tali servizi possono raccogliere
                  dati tecnici, come indirizzo IP, informazioni sul dispositivo e
                  dati di utilizzo, secondo le proprie informative sulla privacy.
                </p>
              </div>

              <button
                type="button"
                onClick={onToggleThirdParty}
                className={`relative mt-1 inline-flex h-8 w-14 shrink-0 items-center rounded-full transition ${
                  thirdPartyEnabled ? 'bg-[#1F3B2D]' : 'bg-gray-300'
                }`}
                aria-pressed={thirdPartyEnabled}
                aria-label="Attiva o disattiva contenuti di terze parti"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition ${
                    thirdPartyEnabled ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-[#e8dcc7] pt-6 sm:flex-row sm:justify-between sm:items-center">
            <Link
              href="/privacy-policy"
              className="text-sm font-semibold text-black underline underline-offset-2"
            >
              Leggi l’informativa completa
            </Link>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex justify-center border border-black/10 bg-white px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#F3E6CC]"
              >
                Annulla
              </button>

              <button
                type="button"
                onClick={onSave}
                className="inline-flex justify-center bg-[#1F3B2D] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:opacity-90"
              >
                Salva preferenze
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}