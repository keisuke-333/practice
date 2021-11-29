import { ChakraProvider } from "@chakra-ui/react"
import '../styles/globals.scss'

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} /> 
    </ChakraProvider>
  )
}

export default App
