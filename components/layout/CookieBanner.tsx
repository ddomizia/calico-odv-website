'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Cookie } from 'lucide-react'
import CookiePreferencesModal from '@/components/layout/CookiePreferencesModal'
import {
  acceptAllCookies,
  acceptNecessaryOnly,
  getCookieConsent,
  savePreferences,
  type CookieConsent,
} from '@/lib/cookie-consent'

export default function CookieBanner() {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [showPreferences, setShowPreferences] = useState(false)
  const [thirdPartyEnabled, setThirdPartyEnabled] = useState(false)

  useEffect(() => {
    const current = getCookieConsent()
    setConsent(current)
    setThirdPartyEnabled(current.thirdParty)

    const handleConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent<CookieConsent>
      setConsent(customEvent.detail)
      setThirdPartyEnabled(customEvent.detail.thirdParty)
    }

    window.addEventListener(
      'calico-cookie-consent-changed',
      handleConsentChange as EventListener
    )

    return () => {
      window.removeEventListener(
        'calico-cookie-consent-changed',
        handleConsentChange as EventListener
      )
    }
  }, [])

  if (!consent) return null

  const isBannerVisible = !consent.isSet

  return (
    <>
      {isBannerVisible && (
        <div className="fixed inset-x-0 bottom-0 z-[110] border-t border-[#e8dcc7] bg-[#FCFBF8]/95 shadow-[0_-10px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:gap-6 md:px-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4B15A]/20 text-black">
                <Cookie size={18} />
              </span>

              <p className="max-w-3xl text-sm leading-6 text-gray-700 md:text-[15px]">
                Questo sito utilizza esclusivamente cookie tecnici necessari al
                funzionamento. Alcune pagine possono includere contenuti di terze
                parti, come la diretta video della Gatteria tramite CatLives,
                attivati solo previo consenso. Per maggiori informazioni,
                consulta la nostra{' '}
                <Link
                  href="/privacy-policy"
                  className="font-semibold text-black underline underline-offset-2"
                >
                  Informativa sulla Privacy e Cookie
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap md:shrink-0">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="inline-flex justify-center border border-black/10 bg-white px-4 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#F3E6CC]"
              >
                Preferenze
              </button>

              <button
                type="button"
                onClick={() => acceptNecessaryOnly()}
                className="inline-flex justify-center border border-[#E4B15A] bg-transparent px-4 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#F3E6CC]"
              >
                Rifiuta contenuti esterni
              </button>

              <button
                type="button"
                onClick={() => acceptAllCookies()}
                className="inline-flex justify-center bg-[#1F3B2D] px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:opacity-90"
              >
                Accetta tutto
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setShowPreferences(true)}
        className="fixed bottom-4 left-4 z-[100] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1F3B2D] text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition hover:scale-105 hover:opacity-95"
        aria-label="Apri preferenze cookie"
      >
        <Cookie size={22} className="text-[#E4B15A]" />
      </button>

      <CookiePreferencesModal
        isOpen={showPreferences}
        thirdPartyEnabled={thirdPartyEnabled}
        onClose={() => setShowPreferences(false)}
        onToggleThirdParty={() => setThirdPartyEnabled((prev) => !prev)}
        onSave={() => {
          savePreferences(thirdPartyEnabled)
          setShowPreferences(false)
        }}
      />
    </>
  )
}