import { NextPage } from 'next'

import { Layout } from 'components/Layout'

const IndexPage: NextPage = () => {
  return (
    <Layout title='HOME'>
      <p className='text-3xl font-bold'>Next-TS-Hasura-GraphQL</p>
    </Layout>
  )
}

export default IndexPage