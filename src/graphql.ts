import gql from 'graphql-tag'

export const ME = gql`
  query me {
    user(login: "keisuke-333") {
      name
      avatarUrl
    }
  }
`
