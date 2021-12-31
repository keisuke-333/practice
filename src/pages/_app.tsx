import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import 'tailwindcss/tailwind.css'

import apolloClient from '../libs/apollo'
import Layout from '../components/Layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
     <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
     </ApolloProvider>
  )
}
export default App
