import { gql } from '@/__generated__';

export const GET_CHARACTERS = gql(`
query Characters($filter: FilterCharacter, $page: Int) {
  characters(filter: $filter, page: $page) {
    results {
      id
      name
      status
      image
      location {
        name
      }
      episode {
        air_date
        characters {
          id
        }
      }
    }
    info {
      next
      count
    }
  }
}
`);
