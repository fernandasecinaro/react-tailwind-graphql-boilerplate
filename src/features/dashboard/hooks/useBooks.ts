import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../api/get-books';
import { Book } from '../types/book';

const useBooks = () => {
  return useQuery<{ books: Book[] }>(GET_BOOKS);
};

export default useBooks;
