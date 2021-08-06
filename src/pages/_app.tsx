/**
 * _app.tsx
 * @package pages
 */
import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
/* contexts */
import { RootContextProvider } from '@/contexts'
/* libs */
import * as gtag from '@/lib/gtag'
/* styles */
import '@/styles/globals.scss'

/**
 * MyApp
 * @param {AppProps} { Component, pageProps }
 * @returns
 */
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter()

  React.useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <RootContextProvider>
        <Component {...pageProps} />
      </RootContextProvider>
    </>
  )
}

export default MyApp
