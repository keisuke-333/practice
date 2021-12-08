import { memo, VFC } from 'react'
import {
  Box,
  Stack,
  Image,
  Text
} from '@chakra-ui/react'

type Props = {
  imageUrl: string
  userName: string
  fullName: string
  onClick: () => void
}

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName, onClick } = props

  return (
    <Box
      w="260px"
      h="260px"
      p={4}
      bg="white"
      borderRadius="10px"
      shadow="md"
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={onClick}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          m="auto"
          src={imageUrl}
          alt={userName}
        />
        <Text
          fontSize="lg"
          fontWeight="bold"
        >
          {userName}
        </Text>
        <Text
          fontSize="sm"
          color="gray"
        >
          {fullName}
        </Text>
      </Stack>
    </Box>
  )
})