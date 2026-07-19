import { useCharacters } from '@/hooks/useCharacters';
import { FlatList, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CharacterCard from '../features/characters/components/CharacterCard';
import BaseButton from '@/shared/ui/BaseButton';

const AppScreen = () => {
  const { top } = useSafeAreaInsets();
  const { dragonBallCharacters, fetchNextPage, hasNextPage } = useCharacters();

  return (
    <View className="bg-yellow-100 flex-1" style={{ paddingTop: top }}>
      <Text className="font-bold">Universo Z</Text>
      <View className="px-5 pt-5 pb-10">
        <FlatList
          data={dragonBallCharacters}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={() => <View className="h-4" />}
          renderItem={({ item }) => (
            <CharacterCard key={String(item.id)} item={item} />
          )}
          ListFooterComponent={() => {
            if (!hasNextPage) return null;
            return (
              <BaseButton text="Cargar más" onPress={() => fetchNextPage()} />
            );
          }}
        />
      </View>
    </View>
  );
};

export default AppScreen;
