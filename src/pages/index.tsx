import { Box } from '@chakra-ui/react'
import { CssModules } from '../components/CssModules'
import { InlineStyle } from '../components/InlineStyle'
import { StyledComponents } from '../components/StyledComponents'
import { StyledJsx } from '../components/StyledJsx'

const Home = () => {
  
  return (
    <Box textAlign={'center'}>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </Box>
  )
}

export default Home