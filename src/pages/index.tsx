import type { NextPage } from 'next'
import Head from 'next/head'
import { linkDatas } from '../../prisma/data/linkDatas'
import { AwesomeLink } from '../components/AwesomeLink'

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {linkDatas.map((data) => (
            <AwesomeLink
              key={data.id}
              id={data.id}
              title={data.title}
              description={data.description}
              url={data.url}
              imageUrl={data.imageUrl}
              category={data.category}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default IndexPage
