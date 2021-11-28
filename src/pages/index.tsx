import { useCallback, useState, } from 'react'
import { Box, Button, Input } from '@chakra-ui/react'
import ChildArea from '../components/ChildArea'

const Home = () => {
  console.log('Home')

  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  const onChangeText = (e) => setText(e.target.value)

  const onClickOpen = () => setOpen(bool => !bool)

  const onClickClose = useCallback(() => setOpen(false), [setOpen])
  
  return (
    <Box textAlign={'center'}>
      <Input
        value={text}
        onChange={onChangeText}
        w={100}
        mr={1}
      ></Input>
      <Button onClick={onClickOpen}>表示</Button>
      <ChildArea open={open} onClickClose={onClickClose}></ChildArea>
    </Box>
  )
}

export default Home