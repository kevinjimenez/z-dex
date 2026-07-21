import CharacterCard from '@/features/characters/components/CharacterCard';
import { useCharacters } from '@/features/characters/hooks/useCharacters';
import DrawerMenuButton from '@/shared/components/DrawerMenuButton';
import BaseButton from '@/shared/ui/BaseButton';
import { router } from 'expo-router';
import { FlatList, Text, View } from 'react-native';
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
      <View className="flex-row mb-2 items-center gap-x-4">
        <DrawerMenuButton />

        <View className="flex-col flex-1 gap-y-1">
          <Text className="text-sm font-medium text-ink-3">
            Bienvenido de nuevo
          </Text>
          <Text className="font-semibold text-2xl">Universo Z</Text>
        </View>

        <View className="size-12 rounded-xl bg-primary justify-center">
          <Text className="text-center text-white text-2xl font-bold">G</Text>
        </View>
      </View>
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
            // return <ActivityIndicator className="my-4" color="#FF6A1A" />;
            return (
              <BaseButton
                disabled
                text="Cargando..."
                className="my-4"
                color="secondary"
              />
            );
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
