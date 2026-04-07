export type CookieConsent = {
  necessary: true
  thirdParty: boolean
  isSet: boolean
}

export const COOKIE_CONSENT_KEY = 'calico_cookie_consent'
export const THIRD_PARTY_KEY = 'calico_third_party_content_consent'

export function getDefaultConsent(): CookieConsent {
  return {
    necessary: true,
    thirdParty: false,
    isSet: false,
  }
}

export function getCookieConsent(): CookieConsent {
  if (typeof window === 'undefined') return getDefaultConsent()

  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!raw) return getDefaultConsent()

    const parsed = JSON.parse(raw) as Partial<CookieConsent>

    return {
      necessary: true,
      thirdParty: !!parsed.thirdParty,
      isSet: !!parsed.isSet,
    }
  } catch {
    return getDefaultConsent()
  }
}

export function saveCookieConsent(consent: CookieConsent) {
  if (typeof window === 'undefined') return

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent))
  localStorage.setItem(
    THIRD_PARTY_KEY,
    consent.thirdParty ? 'accepted' : 'rejected'
  )

  window.dispatchEvent(
    new CustomEvent('calico-cookie-consent-changed', {
      detail: consent,
    })
  )

  window.dispatchEvent(
    new CustomEvent('calico-third-party-consent-changed', {
      detail: consent.thirdParty ? 'accepted' : 'rejected',
    })
  )
}

export function acceptAllCookies() {
  saveCookieConsent({
    necessary: true,
    thirdParty: true,
    isSet: true,
  })
}

export function acceptNecessaryOnly() {
  saveCookieConsent({
    necessary: true,
    thirdParty: false,
    isSet: true,
  })
}

export function savePreferences(thirdParty: boolean) {
  saveCookieConsent({
    necessary: true,
    thirdParty,
    isSet: true,
  })
}