import { VFC, memo, Dispatch, SetStateAction } from 'react'
import { Users, DeleteUserMutationFn } from '../../types/generated/graphql'

type Props = {
  user: {
    __typename?: 'users'
  } & Pick<Users, 'id' | 'name' | 'created_at'>
  delete_users_by_pk: DeleteUserMutationFn
  setEditedUser: Dispatch<
    SetStateAction<{
      id: string
      name: string
    }>
  >
}