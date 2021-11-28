import { useState } from 'react'
import { Box, Heading, Text, Button } from '@chakra-ui/react'

export const getServerSideProps = () => {
  return { props: { initialCount: 100 } }
}

const Home = ({ initialCount }) => {
  console.log('Home')
  const [count, setCount] = useState(initialCount)

  const onClickCountUp = () => {
    setCount(cnt => cnt + 1)
  }
  
  return (
    <Box textAlign={'center'}>
      <Heading>カウントアップ</Heading>
      <Text>{count}</Text>
      <Button onClick={onClickCountUp}>カウントアップ</Button>
    </Box>
  )
}

export default Home