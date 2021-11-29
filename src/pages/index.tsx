import { Box } from '@chakra-ui/react'
import { CssModules } from '../components/CssModules'
import { InlineStyle } from '../components/InlineStyle'

const Home = () => {
  
  return (
    <Box textAlign={'center'}>
      <InlineStyle />
      <CssModules />
    </Box>
  )
}

export default Home