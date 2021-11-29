import { Box } from '@chakra-ui/react'
import { CssModules } from '../components/CssModules'
import { InlineStyle } from '../components/InlineStyle'
import { StyledJsx } from '../components/StyledJsx'

const Home = () => {
  
  return (
    <Box textAlign={'center'}>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </Box>
  )
}

export default Home