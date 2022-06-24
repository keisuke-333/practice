import { NextApiHandler } from 'next'

type Data = {
  revalidated: boolean
}

const handler: NextApiHandler<Data> = async (req, res) => {
  console.log('Revalidating notes page...')
  let revalidated = false
  try {
    await res.unstable_revalidate('/notes')
    revalidated = true
  } catch (err) {
    console.log(err)
  }
  res.json({ revalidated })
}

export default handler
