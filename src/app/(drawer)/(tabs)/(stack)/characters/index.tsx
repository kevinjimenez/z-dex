import CharacterCard from '@/features/characters/components/CharacterCard';
import CharacterCardSkeleton from '@/features/characters/components/CharacterCardSkeleton';
import CharacterList from '@/features/characters/components/CharacterList';
import CharacterHeader from '@/features/characters/components/CharcaterHeader';
import { useCharacters } from '@/features/characters/hooks/useCharacters';
import ListSkeleton from '@/shared/components/ListSkeleton';
import ScreenContainer from '@/shared/components/ScreenContainer';
import { router } from 'expo-router';

const CharactersScreen = () => {
  const {
    dragonBallCharacters,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCharacters();
  const goToDetail = (id: number) => {
    router.push(`/detail/${id}`);
  };

  return (
    <ScreenContainer>
      <CharacterHeader />
      {isLoading ? (
        <ListSkeleton
          length={10}
          renderItem={() => <CharacterCardSkeleton />}
        />
      ) : (
        <CharacterList
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
          data={dragonBallCharacters}
          renderItem={({ item }) => (
            <CharacterCard
              key={String(item.id)}
              item={item}
              onPress={() => goToDetail(item.id)}
            />
          )}
        />
      )}
    </ScreenContainer>
  );
};

export default CharactersScreen;
