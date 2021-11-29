import { Box } from '@chakra-ui/react'
import { CssModules } from '../components/CssModules'
import { Emotion } from '../components/Emotion'
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
      <Emotion />
    </Box>
  )
}

export default Home