import { memo } from 'react'
import { Box, Text, Button } from '@chakra-ui/react'

const ChildArea = (props) => {
  const { open, onClickClose } = props
  console.log('ChildArea')

  const data = [...Array(2000).keys()]
  data.forEach(() => {
    console.log('...')
  })

  return (
    <>
      {open ? (
        <Box w="100%" h={200} bg="khaki">
          <Text>子コンポーネント</Text>
          <Button onClick={onClickClose}>閉じる</Button>
        </Box>
      ) : null}
    </>
  )
}

export default memo(ChildArea)