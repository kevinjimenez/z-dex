import CharacterCard from '@/features/characters/components/CharacterCard';
import CharacterHeader from '@/features/characters/components/CharcaterHeader';
import { useCharacters } from '@/features/characters/hooks/useCharacters';
import BaseButton from '@/shared/ui/BaseButton';
import { router } from 'expo-router';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CharactersScreen = () => {
  const { top } = useSafeAreaInsets();
  const {
    dragonBallCharacters,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCharacters();
  const goToCharacterDetail = (id: number) => {
    router.push(`/detail/${id}`);
  };

  return (
    <View className="bg-surface-page1 flex-1 px-6" style={{ paddingTop: top }}>
      <CharacterHeader />
      <FlatList
        data={dragonBallCharacters}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ItemSeparatorComponent={() => <View className="h-4" />}
        renderItem={({ item }) => (
          <CharacterCard
            key={String(item.id)}
            item={item}
            onPress={() => goToCharacterDetail(item.id)}
          />
        )}
        ListFooterComponent={() => {
          if (isFetchingNextPage) {
            return <ActivityIndicator className="my-4" color="#FF6A1A" />;
          }
          if (!hasNextPage) return null;
          return (
            <BaseButton
              text="Cargar más"
              onPress={() => fetchNextPage()}
              className="my-4"
              color="secondary"
            />
          );
        }}
      />
    </View>
  );
};

export default CharactersScreen;
