'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    silktideCookieBannerManager?: {
      updateCookieBannerConfig: (config: unknown) => void
    }
    __silktideScriptLoading?: boolean
    __silktideScriptLoaded?: boolean
    __silktideBannerConfigured?: boolean
  }
}

const THIRD_PARTY_KEY = 'calico_third_party_content_consent'

function setThirdPartyConsent(value: 'accepted' | 'rejected') {
  try {
    localStorage.setItem(THIRD_PARTY_KEY, value)
    window.dispatchEvent(
      new CustomEvent('calico-third-party-consent-changed', {
        detail: value,
      })
    )
  } catch {
    // ignore
  }
}

export default function CookieBannerLoader() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const configureBanner = () => {
      if (
        !window.silktideCookieBannerManager ||
        window.__silktideBannerConfigured
      ) {
        return
      }

      window.__silktideBannerConfigured = true

      window.silktideCookieBannerManager.updateCookieBannerConfig({
        background: {
          showBackground: true,
        },
        cookieIcon: {
          position: 'bottomLeft',
        },
        cookieTypes: [
          {
            id: 'cookies_necessari',
            name: 'Cookies necessari',
            description:
              'Questi cookie sono necessari per il corretto funzionamento del sito web e non possono essere disattivati. Aiutano, ad esempio, nella gestione dell’accesso e nell’impostazione delle preferenze sulla privacy. Per maggiori informazioni, consulta la nostra <a href="/privacy-policy" target="_blank">Informativa sulla Privacy e Cookie</a>.',
            required: true,
            onAccept: function () {
              console.log('Cookies necessari attivi')
            },
          },
          {
            id: 'contenuti_di_terze_parti',
            name: 'Contenuti di terze parti',
            description:
              'I contenuti incorporati da piattaforme esterne (ad esempio streaming o social media) possono utilizzare cookie propri e raccogliere dati sull’utente solo dopo l’interazione con tali contenuti (ad esempio avviando la riproduzione). Per maggiori informazioni, consulta la nostra <a href="/privacy-policy" target="_blank">Informativa sulla Privacy e Cookie</a>.',
            required: false,
            onAccept: function () {
              setThirdPartyConsent('accepted')
            },
            onReject: function () {
              setThirdPartyConsent('rejected')
            },
          },
        ],
        text: {
          banner: {
            description:
              'Utilizziamo i cookie sul nostro sito per migliorare la tua esperienza di navigazione. Per maggiori informazioni, consulta la nostra <a href="/privacy-policy" target="_blank">Informativa sulla Privacy e Cookie</a>.',
            acceptAllButtonText: 'Accetta tutto',
            acceptAllButtonAccessibleLabel: 'Accetta tutti i cookies',
            rejectNonEssentialButtonText: 'Rifiuta i cookie non essenziali',
            rejectNonEssentialButtonAccessibleLabel:
              'Rifiuta i cookie non essenziali',
            preferencesButtonText: 'Preferenze',
            preferencesButtonAccessibleLabel: 'Mostra/Nascondi preferenze',
          },
          preferences: {
            title: 'Impostazioni dei cookie',
            description:
              'Il sito può includere contenuti incorporati da piattaforme esterne (ad esempio CatLives per lo streaming video). Tali contenuti non vengono caricati automaticamente, ma solo a seguito dell’interazione dell’utente (ad esempio cliccando sul video). Queste piattaforme possono utilizzare cookie propri e raccogliere dati secondo le rispettive informative sulla privacy.',
            creditLinkText: 'Ottieni questo banner gratuitamente',
            creditLinkAccessibleLabel: 'Ottieni questo banner gratuitamente',
          },
        },
        position: {
          banner: 'bottomLeft',
        },
      })
    }

    if (window.__silktideScriptLoaded) {
      configureBanner()
      return
    }

    const existingScript = document.getElementById(
      'silktide-consent-manager-script'
    ) as HTMLScriptElement | null

    if (existingScript) {
      existingScript.addEventListener('load', configureBanner)
      return () => {
        existingScript.removeEventListener('load', configureBanner)
      }
    }

    if (window.__silktideScriptLoading) return

    window.__silktideScriptLoading = true

    const script = document.createElement('script')
    script.id = 'silktide-consent-manager-script'
    script.src = '/cookie-banner/silktide-consent-manager.js'
    script.async = true

    script.onload = () => {
      window.__silktideScriptLoaded = true
      window.__silktideScriptLoading = false
      configureBanner()
    }

    script.onerror = () => {
      window.__silktideScriptLoading = false
      console.error('Impossibile caricare silktide-consent-manager.js')
    }

    document.body.appendChild(script)

    return () => {
      script.onload = null
      script.onerror = null
    }
  }, [])

  return null
}