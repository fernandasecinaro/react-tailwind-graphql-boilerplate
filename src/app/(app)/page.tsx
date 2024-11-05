'use client';

import Button from '@/components/ui/atoms/button';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Books Dashboard</h1>
        <Button>Add Book</Button>
      </div>
      <div className="grid gap-8">
        <div className="p-4 border border-gray-200 rounded-lg cursor-pointer">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">Prueba</h2>
              <p className="text-sm text-gray-500">Fernanda</p>
              <p className="text-sm text-gray-500">2024</p>
            </div>

            <div className="flex items-center gap-2">
              <Button>See details</Button>
              <Button>Edit</Button>
              <Button>Remove</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
