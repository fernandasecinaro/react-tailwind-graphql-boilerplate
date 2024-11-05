import { CharactersQuery } from '@/__generated__/graphql';
import Image from 'next/image';
import { formatDate } from '@/features/date/utils';

type CharacterQueryCharacter = NonNullable<
  NonNullable<CharactersQuery['characters']>['results']
>[number];

const CharacterItem = ({
  character,
}: {
  character: CharacterQueryCharacter | null;
}) => {
  if (!character) return null;
  return (
    <div className="p-4 border border-gray-200 rounded-lg cursor-pointer">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">{character.name}</h2>
          <p className="text-sm text-gray-500">{character.status}</p>
          <p className="text-sm text-gray-500">{character.location?.name}</p>
          <p className="text-sm text-gray-500">
            {formatDate(character.episode[0]?.air_date || '')}
          </p>
        </div>

        <Image
          src={character.image || ''}
          alt={character.name || ''}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default CharacterItem;
