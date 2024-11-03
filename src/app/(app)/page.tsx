'use client';

import Button from '@/components/ui/atoms/button';
import BookItem from '@/features/dashboard/components/BookItem';
import useBooks from '@/features/dashboard/hooks/useBooks';

export default function Home() {
  const { loading, error, data } = useBooks();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold ">Books Dashboard</h1>
        <Button>Add Book</Button>
      </div>
      <div className="grid gap-8">
        {data?.books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
