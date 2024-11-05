import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../api/get-characters';
import { FilterCharacter } from '@/__generated__/graphql';

const useCharacters = (filter?: FilterCharacter, page?: number) => {
  return useQuery(GET_CHARACTERS, {
    variables: { filter, page },
    notifyOnNetworkStatusChange: true,
  });
};

export default useCharacters;
