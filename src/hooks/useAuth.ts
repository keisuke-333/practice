import { useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

import { useMessage } from './useMessage'
import { User } from '../types/api/user'
import { useLoginUser } from './useLoginUser'

export const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const { showMessage } = useMessage()
  const { setLoginUser } = useLoginUser()

  const login = useCallback(
    (id: string) => {
      setLoading(true)
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            setLoginUser(res.data)
            showMessage({ title: 'ログインしました', status: 'success' })
            history.push('/home')
          } else {
            showMessage({ title: 'ユーザーが見つかりません', status: 'error' })
            setLoading(false)
          }
        })
        .catch(() => {
          showMessage({ title: 'ログインできません', status: 'error' })
          setLoading(false)
        })
    },
    [setLoginUser, showMessage, history]
  )

  return { login, loading }
}
