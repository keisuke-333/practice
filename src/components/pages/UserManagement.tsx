import { memo, useCallback, useEffect, VFC } from 'react'
import {
  Wrap,
  WrapItem,
  Center,
  Spinner,
  useDisclosure
} from '@chakra-ui/react'

import { UserCard } from '../organisms/user/UserCard'
import { useAllUsers } from '../../hooks/useAllUsers'
import { UserDetailModal } from '../organisms/user/UserDetailModal'

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onClickUser = useCallback(() => onOpen(), [])

  useEffect(() => getUsers(), [])

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap
          p={{ base: 4, md: 10 }}
          justify={{
            base: 'center',
            lg: 'space-between',
            xl: 'normal'
          }}
        >
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
})