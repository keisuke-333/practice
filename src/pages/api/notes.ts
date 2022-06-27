import { NextApiHandler } from 'next'
import { supabase } from '../../utils/supabase'

const fetchNotes: NextApiHandler = async (_, res) => {
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .order('created_at', { ascending: true })
  if (error) return res.status(401).json(`${error.message}: ${error.details}`)
  return res.status(200).json(data)
}

export default fetchNotes
