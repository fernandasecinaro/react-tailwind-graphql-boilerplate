import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 10) {
      id
      mission_name
      launch_date_utc
      rocket {
        rocket_name
        rocket_type
      }
      launch_site {
        site_name_long
      }
      links {
        mission_patch
        article_link
        video_link
      }
      details
    }
  }
`;
