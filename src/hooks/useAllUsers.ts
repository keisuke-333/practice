import { useState } from 'react'
import { userProfile } from '../types/userProfile'
import { user } from '../types/api/user'
import axios from 'axios'

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<userProfile>>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getUsers = () => {
    setLoading(true)
    axios
      .get<Array<user>>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }))
        setUserProfiles(data)
      })
      .catch((e) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { getUsers, userProfiles, loading, error }
}
