import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../api/get-books';

const useBooks = () => {
  return useQuery(GET_BOOKS);
};

export default useBooks;
