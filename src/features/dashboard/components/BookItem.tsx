import Button from '@/components/ui/atoms/button';
import useDeleteBook from '../hooks/useDeleteBook';
import { Book } from '@/__generated__/graphql';

const BookItem = ({ book }: { book: Book }) => {
  const [mutateFunction] = useDeleteBook();

  const handleRemoveBook = async () => {
    mutateFunction({
      variables: { deleteBookId: book.id },
      onCompleted: () => {
        console.log('Book removed successfully');
      },
    });
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">{book.title}</h2>
          <p className="text-sm text-gray-500">{book.author}</p>
          <p className="text-sm text-gray-500">{book.year}</p>
        </div>

        <Button onClick={handleRemoveBook}>Remove</Button>
      </div>
    </div>
  );
};

export default BookItem;
