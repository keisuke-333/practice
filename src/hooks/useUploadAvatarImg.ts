import { ChangeEvent } from 'react'
import { useMutation } from 'react-query'
import { supabase } from 'libs/supabase/client'
import useStore from 'libs/zustand/store'

export const useUploadAvatarImg = () => {
  const editedProfile = useStore((state) => state.editedProfile)
  const updateProfile = useStore((state) => state.updatedEditedProfile)
  const useMutateUploadAvatarImg = useMutation(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || e.target.files.length === 0) {
        throw new Error('Please select the image file')
      }
      const file = e.target.files[0]
      const fileEct = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileEct}`
      const filePath = `${fileName}`
      const { error } = await supabase.storage
        .from('avatars')
        .upload(filePath, file)
      if (error) throw new Error(error.message)
      updateProfile({ ...editedProfile, avatar_url: filePath })
    },
    {
      onError: (err: any) => {
        alert(err.message)
      },
    }
  )
  return { useMutateUploadAvatarImg }
}
