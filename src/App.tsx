import { useState, useEffect } from 'react'
import gql from 'graphql-tag'

import client from './client'

const ME = gql`
  query me {
    user(login: "keisuke-333") {
      name
      avatarUrl
    }
  }
`

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
