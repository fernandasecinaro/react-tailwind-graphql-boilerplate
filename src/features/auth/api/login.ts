import { gql } from '@/__generated__';

export const LOGIN_MUTATION = gql(`
 mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`);
