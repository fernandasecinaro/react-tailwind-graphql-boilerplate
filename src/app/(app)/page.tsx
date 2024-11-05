'use client';

import { Input } from '@/components/ui/atoms/input';
import CharacterItem from '@/features/characters/components/CharacterItem';
import useCharacters from '@/features/characters/hooks/useCharacters';
import { useDeferredValue, useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Home() {
  const [search, setSearch] = useState('');
  const deferredQuery = useDeferredValue(search);
  const { data, loading, error, fetchMore } = useCharacters(
    {
      name: deferredQuery,
    },
    1
  );

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        fetchMore({
          variables: { page: data?.characters?.info?.next },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult || !data?.characters?.info?.next) return prev;

            return {
              ...prev,
              characters: {
                ...prev.characters,
                results: [
                  ...(prev.characters?.results || []),
                  ...(fetchMoreResult.characters?.results || []),
                ],
                info: fetchMoreResult.characters?.info,
              },
            };
          },
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [
    fetchMore,
    data?.characters?.results?.length,
    data?.characters?.info?.next,
  ]);

  if (error) return <div>Error: {error.message}</div>;

  console.log(loading, 'loading');

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Books Dashboard</h1>
      </div>

      <Input value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="grid gap-8">
        {data?.characters?.results?.map((character) => {
          if (!character) return null;
          return <CharacterItem key={character?.id} character={character} />;
        })}
        {loading && <ClipLoader />}
      </div>
    </div>
  );
}
