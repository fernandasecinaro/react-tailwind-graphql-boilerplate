import { gql } from '@apollo/client';

export const GET_COUNTRIES_CHART = gql`
  query GetCountries {
    countries {
      code
      name
      continent {
        name
      }
    }
  }
`;
