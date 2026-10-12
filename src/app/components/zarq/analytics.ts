// Google Analytics (GA4), loaded only after the visitor agrees (POPIA).
// Until then nothing is sent to Google and no analytics cookies are set.

const GA_ID = 'G-ML4HXH48R0';
const CONSENT_KEY = 'zarq_analytics_consent';

type Consent = 'granted' | 'denied';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

export function getConsent(): Consent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent) {
  try { localStorage.setItem(CONSENT_KEY, value); } catch {}
  if (value === 'granted') {
    window[`ga-disable-${GA_ID}`] = false;
    loadAnalytics();
  } else {
    // Stops any further hits if analytics was already running on this page.
    window[`ga-disable-${GA_ID}`] = true;
  }
}

let loaded = false;

export function loadAnalytics() {
  if (loaded || typeof document === 'undefined') return;
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

/** Records a key action (enquiry, sign-up, WhatsApp click, download). Does nothing without consent. */
export function track(event: string, params: Record<string, string> = {}) {
  if (loaded && window.gtag) window.gtag('event', event, params);
}
