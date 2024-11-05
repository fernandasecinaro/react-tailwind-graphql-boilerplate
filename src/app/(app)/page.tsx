'use client';

import { Input } from '@/components/ui/atoms/input';
import CharacterItem from '@/features/characters/components/CharacterItem';
import useCharacters from '@/features/characters/hooks/useCharacters';
import { useDeferredValue, useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const { ref, inView } = useInView();
  const [search, setSearch] = useState('');
  const deferredQuery = useDeferredValue(search);
  const { data, loading, error, fetchMore } = useCharacters(
    {
      name: deferredQuery,
    },
    1
  );

  useEffect(() => {
    if (inView && !loading) {
      console.log('Fire!');
      fetchMore({
        variables: { page: data?.characters?.info?.next },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult || !data?.characters?.info?.next) return prev;

          return {
            characters: {
              results: [
                ...(prev.characters?.results || []),
                ...(fetchMoreResult?.characters?.results || []),
              ],
              info: { ...fetchMoreResult.characters?.info },
            },
          };
        },
      });
    }
  }, [data?.characters?.info?.next, fetchMore, inView, loading]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Books Dashboard</h1>
      </div>

      <Input value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="grid gap-8">
        {data?.characters?.results?.map((character, index) => {
          if (data?.characters?.results?.length === index + 1) {
            return (
              <CharacterItem
                key={character?.id}
                character={character}
                ref={ref}
              />
            );
          }
          return <CharacterItem key={character?.id} character={character} />;
        })}
        {loading && <ClipLoader />}
      </div>
    </div>
  );
}
