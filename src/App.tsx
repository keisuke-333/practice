import axios from "axios"
import { useState } from "react"
import { UserCard } from "./components/UserCard"
import { user } from "./types/api/user"
import { userProfile } from "./types/userProfile"

const App = () => {
  const [userProfiles, setUserProfiles] = useState<Array<userProfile>>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const onClickFetchUser = () => {
    setLoading(true)
    axios.get<Array<user>>('https://jsonplaceholder.typicode.com/users').then((res) => {
      const data = res.data.map((user) => ({
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        address: `${user.address.city}${user.address.suite}${user.address.street}`
      }))
      setUserProfiles(data)
    }).catch((e) => {
      setError(true)
    }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <>
      <button onClick={onClickFetchUser}>データ取得</button>
      {error ? (
        <p style={{ color: 'red' }}>データ取得に失敗しました。</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user}/>
          ))}
        </>
      )}
    </>
  )
}

export default App
