import { NextApiHandler } from 'next'

type Data = {
  revalidated: boolean
}

const handler: NextApiHandler<Data> = async (req, res) => {
  console.log('Revalidating detail page...')
  const {
    query: { id },
  } = req
  let revalidated = false
  try {
    await res.unstable_revalidate(`/note/${id}`)
    revalidated = true
  } catch (err) {
    console.log(err)
  }
  res.json({ revalidated })
}

export default handler
