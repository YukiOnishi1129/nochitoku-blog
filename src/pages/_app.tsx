import { AppProps } from 'next/app'
import Head from 'next/head'
/* contexts */
import { RootContextProvider } from '@/contexts'
/* styles */
import '@/styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>NOCHITOKU</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <RootContextProvider>
        <Component {...pageProps} />
      </RootContextProvider>
    </>
  )
}

export default MyApp
