import { gql } from '@apollo/client';

export const GET_COUNTRIES_LIST = gql`
  query GetCountries {
    countries {
      code
      name
      continent {
        name
      }
      languages {
        name
      }
      capital
    }
  }
`;
