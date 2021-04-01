/**
 * gtag
 * @package lib
 */
//medium.com/frontend-digest/using-nextjs-with-google-analytics-and-typescript-620ba2359dea

/**
 * interface
 */
interface GTagEvent {
  action: string
  category: string
  label: string
  value: number
}

/**
 * GA_TRACKING_ID
 */
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''

/**
 * pageview
 * @param url URL
 */
export const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

/**
 * event
 * @param param0 GTagEvent
 */
export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
