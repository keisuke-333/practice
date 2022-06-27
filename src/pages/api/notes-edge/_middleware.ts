import { NextApiHandler } from 'next'
import { supabase } from '../../../utils/supabase'

const fetchNotes: NextApiHandler = async (_, res) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/notes?select=*`,
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_API_KEY!,
      },
    }
  )
  const notes = await response.json()
  return res.status(200).json(notes)
}

export default fetchNotes
