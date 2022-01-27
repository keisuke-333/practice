import { NextPage } from 'next'
import Link from 'next/link'
import { useQuery } from '@apollo/client'

import { GET_USERS } from '../../queries/queries'
import { GetUsersQuery } from '../../types/generated/graphql'
import { Layout } from '../components/Layout'

const HasuraMainPage: NextPage = () => {
  const { data, loading, error } = useQuery<GetUsersQuery>(GET_USERS, { fetchPolicy: "network-only" })

  if (loading) {
    return (
      <Layout title="Hasura fetchPolicy">
        <p>Loading...</p>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout title="Hasura fetchPolicy">
        <p>Error: {error.message}</p>
      </Layout>
    )
  }

  return (
    <Layout title="Hasura fetchPolicy">
      <p className="mb-6 font-bold">Hasura main page</p>
      {data?.users.map((user) => (
        <p
          className="my-1"
          key={user.id}
        >
          {user.name}
        </p>
      ))}
      <Link href="/hasura-sub">
        <a className="mt-6">Next</a>
      </Link>
    </Layout>
  )
}

export default HasuraMainPage