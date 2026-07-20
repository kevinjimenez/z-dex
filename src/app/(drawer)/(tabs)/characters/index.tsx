import CharacterCard from '@/features/characters/components/CharacterCard';
import { useCharacters } from '@/hooks/useCharacters';
import BaseButton from '@/shared/ui/BaseButton';
import { router } from 'expo-router';
import { FlatList, View } from 'react-native';

const CharactersScreen = () => {
  const { dragonBallCharacters, fetchNextPage, hasNextPage } = useCharacters();
  const goToCharacterDetail = (id: number) => {
    router.push(`/characters/${id}`);
  };

  return (
    <View className="bg-red-500 flex-1">
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
          if (!hasNextPage) return null;
          return (
            <BaseButton text="Cargar más" onPress={() => fetchNextPage()} />
          );
        }}
      />
    </View>
  );
};

export default CharactersScreen;
