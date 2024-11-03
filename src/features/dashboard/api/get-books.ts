import { gql } from '@/__generated__';

export const GET_BOOKS = gql(`
  query GetBooks {
    books {
      id
      title
      author
      year
    }
  }
`);
