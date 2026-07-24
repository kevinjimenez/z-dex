import CharacterCard from '@/features/characters/components/CharacterCard';
import CharacterHeader from '@/features/characters/components/CharacterHeader';
import CharacterList from '@/features/characters/components/CharacterList';
import CharacterListSkeleton from '@/features/characters/components/CharacterListSkeleton';
import { useCharacters } from '@/features/characters/hooks/useCharacters';
import ScreenContainer from '@/shared/components/common/ScreenContainer';

const CharactersScreen = () => {
  const {
    dragonBallCharacters,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCharacters();

  return (
    <ScreenContainer>
      <CharacterHeader />
      {isLoading ? (
        <CharacterListSkeleton />
      ) : (
        <CharacterList
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
          data={dragonBallCharacters}
          contentContainerClassName="pb-5"
          renderItem={({ item }) => (
            <CharacterCard key={String(item.id)} item={item} />
          )}
        />
      )}
    </ScreenContainer>
  );
};

export default CharactersScreen;
