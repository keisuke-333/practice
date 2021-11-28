import { memo } from 'react'
import { Box, Text } from '@chakra-ui/react'

const ChildArea = (props) => {
  const { open } = props
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
        </Box>
      ) : null}
    </>
  )
}

export default memo(ChildArea)