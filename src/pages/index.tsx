import type { NextPage } from 'next'
import { useEffect } from 'react'
import useStore from 'libs/zustand/store'
import { supabase } from 'libs/supabase/client'
import { Layout } from 'components/Layout'
import { Auth } from 'components/Auth'
import { DashBoard } from 'components/DashBoard'

const HomePage: NextPage = () => {
  const session = useStore((state) => state.session)
  const setSession = useStore((state) => state.setSession)
  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [setSession])
  return (
    <Layout title="DashBoard">{!session ? <Auth /> : <DashBoard />}</Layout>
  )
}

export default HomePage
