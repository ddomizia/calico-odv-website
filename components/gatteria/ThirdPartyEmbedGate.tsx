'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Cookie, ShieldCheck, PlayCircle } from 'lucide-react'
import {
  getCookieConsent,
  savePreferences,
  type CookieConsent,
} from '@/lib/cookie-consent'

export default function ThirdPartyEmbedGate({
  children,
  title = 'Diretta CatLives',
}: {
  children: React.ReactNode
  title?: string
}) {
  const [consent, setConsent] = useState<CookieConsent | null>(null)

  useEffect(() => {
    setConsent(getCookieConsent())

    const handleConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent<CookieConsent>
      setConsent(customEvent.detail)
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

  const canShowEmbed = useMemo(() => {
    return !!consent?.isSet && !!consent?.thirdParty
  }, [consent])

  if (canShowEmbed) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-[260px] items-center bg-[#FCFBF8] p-6 sm:min-h-[320px] sm:p-8 md:min-h-[340px] md:p-10">
      <div className="w-full">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E4B15A]/20 text-black">
          <Cookie size={22} />
        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C96B3C]">
          {title}
        </p>

        <h3 className="mt-3 text-2xl font-black leading-tight text-black sm:text-3xl">
          Per visualizzare la diretta è necessario abilitare i contenuti di terze parti
        </h3>

        <div className="mt-4 h-2 w-24 bg-[#E4B15A]" />

        <p className="mt-6 text-sm leading-6 text-gray-700 md:text-[15px]">
          Questo contenuto è fornito da una piattaforma esterna e può utilizzare
          cookie propri solo dopo la tua scelta.
        </p>

        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[#E4B15A]/40 bg-[#FDF6E8] p-4">
          <div className="mt-0.5 shrink-0 text-[#C96B3C]">
            <ShieldCheck size={18} />
          </div>

          <p className="text-sm leading-6 text-gray-700">
            Puoi accettare i contenuti di terze parti direttamente qui oppure
            aprire in qualsiasi momento le preferenze dal pulsante con il{' '}
            <span className="inline-flex translate-y-[2px] text-[#C96B3C]">
              <Cookie size={15} />
            </span>{' '}
            biscotto in basso a sinistra.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              savePreferences(true)
            }}
            className="inline-flex items-center gap-2 bg-[#1F3B2D] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:opacity-90"
          >
            <PlayCircle size={16} className="text-[#E4B15A]" />
            Accetta e visualizza la diretta
          </button>

          <Link
            href="/privacy-policy"
            className="inline-flex items-center border border-black/10 bg-white px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#F3E6CC]"
          >
            Leggi Privacy e Cookie
          </Link>
        </div>
      </div>
    </div>
  )
}