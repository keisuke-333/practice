import { useQuery } from 'react-query'
import { supabase } from 'libs/supabase/client'
import { Post } from 'types'

export const useQueryPosts = () => {
  const getPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: true })
    if (error) {
      throw new Error(error.message)
    }
    return data
  }
  return useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: getPosts,
    staleTime: Infinity,
  })
}
