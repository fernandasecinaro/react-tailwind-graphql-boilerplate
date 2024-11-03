'use client';

import { useState } from 'react';
import { Book } from '@/__generated__/graphql';
import Button from '@/components/ui/atoms/button';
import AddBookModal from '@/features/dashboard/components/AddBookModal';
import BookItem from '@/features/dashboard/components/BookItem';
import BookModal from '@/features/dashboard/components/BookModal';
import useBooks from '@/features/dashboard/hooks/useBooks';

export default function Home() {
  const { loading, error, data } = useBooks();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleOpenModal = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold ">Books Dashboard</h1>
        <Button onClick={() => setIsAddBookModalOpen(true)}>Add Book</Button>
      </div>
      <div className="grid gap-8">
        {data?.books.map((book) => (
          <BookItem key={book.id} book={book} onOpenModal={handleOpenModal} />
        ))}
      </div>

      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      <AddBookModal
        isOpen={isAddBookModalOpen}
        onClose={() => setIsAddBookModalOpen(false)}
        onSuccess={() => setIsAddBookModalOpen(false)}
      />
    </div>
  );
}
