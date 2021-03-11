import { AppProps } from 'next/app'
/* contexts */
import { RootContextProvider } from '@/contexts'
/* styles */
import '@/styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <RootContextProvider>
      <Component {...pageProps} />
    </RootContextProvider>
  )
}

export default MyApp
