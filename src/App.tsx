import { useState, useEffect } from 'react'

import client from './client'
import { ME } from './graphql'

type FetchData = {
  name: string
  avatarUrl: string
}

const App = () => {
  const [userData, setUserData] = useState<FetchData>()

  const fetch = async () => {
    const { data } = await client.query({
      query: ME
    })
    setUserData(data.user)
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <>
      <p>{userData?.name}</p>
      <a
        href={userData?.avatarUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        アイコン画像
      </a>
    </>
  )
}

export default App
