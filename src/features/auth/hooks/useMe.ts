import { useQuery } from '@apollo/client';
import { ME_QUERY } from '../api/me';

export const useMe = () => {
  return useQuery(ME_QUERY);
};
