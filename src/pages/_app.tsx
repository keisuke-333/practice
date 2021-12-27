import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

import Layout from '../components/Layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default App
