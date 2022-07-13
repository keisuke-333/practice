import { FC, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useQueryClient } from 'react-query'
import { LogoutIcon, ExclamationCircleIcon } from '@heroicons/react/solid'
import { supabase } from 'libs/supabase/client'
import useStore from 'libs/zustand/store'
import { Spinner } from './Spinner'
import { UserProfile } from './UserProfile'
import { Notification } from './Notification'

export const DashBoard: FC = () => {
  const queryClient = useQueryClient()
  const resetProfile = useStore((state) => state.resetEditedProfile)
  const resetNotice = useStore((state) => state.resetEditedNotice)
  const signOut = () => {
    resetProfile()
    resetNotice()
    queryClient.removeQueries(['profile'])
    queryClient.removeQueries(['notices'])
    supabase.auth.signOut()
  }
  return (
    <>
      <LogoutIcon
        className="my-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={signOut}
      />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <ErrorBoundary
            fallback={
              <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
            }
          >
            <Suspense fallback={<Spinner />}>
              <UserProfile />
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className="flex flex-col items-center">
          <ErrorBoundary
            fallback={
              <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
            }
          >
            <Suspense fallback={<Spinner />}>
              <Notification />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </>
  )
}
