import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

import NextProgressBar from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgressBar color="#ffea00" startPosition={0.3} stopDelayMs={200} height={3} />

      <Component {...pageProps} />
    </>
  )
}
