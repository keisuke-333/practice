import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'libs/react-query/queryClient'
import { ReactQueryDevtools } from 'react-query/devtools'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
