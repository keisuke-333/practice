import { useQuery } from 'react-query'
import { supabase } from 'libs/supabase/client'
import useStore from 'libs/zustand/store'
import { useMutateProfile } from './useMutateProfile'
import { Profile } from 'types'

export const useQueryProfile = () => {
  const session = useStore((state) => state.session)
  const editedProfile = useStore((state) => state.editedProfile)
  const update = useStore((state) => state.updatedEditedProfile)
  const { createProfileMutation } = useMutateProfile()
  const getProfile = async () => {
    const { data, error, status } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session?.user?.id)
      .single()
    if (error && status === 406) {
      createProfileMutation.mutate({
        id: session?.user?.id,
        username: session?.user?.email,
        favorites: '',
        avatar_url: '',
      })
      update({
        ...editedProfile,
        username: session?.user?.email,
      })
    }
    if (error && status !== 406) {
      throw new Error(error.message)
    }
    return data
  }
  return useQuery<Profile, Error>({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
    onSuccess: (data) => {
      if (data) {
        update({
          username: data.username,
          favorites: data.favorites,
          avatar_url: data.avatar_url,
        })
      }
    },
  })
}
