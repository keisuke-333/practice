import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import 'tailwindcss/tailwind.css'

import apolloClient from '../libs/apolloClient'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
