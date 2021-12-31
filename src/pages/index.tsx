import type { NextPage } from 'next'
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'

import { AwesomeLink } from '../components/AwesomeLink'

const AllLinksQuery = gql`
  query {
    links {
      id
      title
      url
      description
      imageUrl
      category
    }
  }
`

const IndexPage: NextPage = () => {
   const { data, loading, error } = useQuery(AllLinksQuery)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.links.map((link) => (
            <AwesomeLink
              key={link.id}
              id={link.id}
              title={link.title}
              description={link.description}
              url={link.url}
              imageUrl={link.imageUrl}
              category={link.category}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default IndexPage
