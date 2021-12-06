import { Button, ChakraProvider } from "@chakra-ui/react"

const App = () => {
  return (
    <ChakraProvider>
      <Button colorScheme="teal">ボタン</Button>
    </ChakraProvider>
  )
}

export default App
