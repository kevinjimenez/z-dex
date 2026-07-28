import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';
import FavoriteCard from '@/features/favorites/components/FavoriteCard';
import FavoriteDetailModal from '@/features/favorites/components/FavoriteDetailModal';
import FavoriteHeader from '@/features/favorites/components/FavoriteHeader';
import { FavoriteList } from '@/features/favorites/components/FavoriteList';
import { useFavoriteStore } from '@/features/favorites/store/useFavorite';
import ScreenContainer from '@/shared/components/common/ScreenContainer';
import Lucide from '@react-native-vector-icons/lucide';
import { useState } from 'react';
import { Text, View } from 'react-native';

const FavoritesScreen = () => {
  const { removeFavorite } = useFavoriteStore();
  const favorites = useFavoriteStore((state) => state.favorites);

  const [selected, setSelected] = useState<CharacterResponse | null>(null);

  return (
    <ScreenContainer>
      <FavoriteHeader />

      <FavoriteList
        data={favorites}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center my-10">
            <View className="flex-col items-center justify-center gap-y-4">
              <Lucide
                name="search-x"
                size={40}
                className="text-ink-secondary"
              />
              <Text className="text-base text-ink-secondary font-dmsans-regular">
                Todavía no marcaste favoritos
              </Text>
            </View>
          </View>
        )}
        contentContainerClassName="pb-5"
        renderItem={({ item }) => (
          <FavoriteCard
            image={item.image}
            name={item.name}
            race={item.race}
            ki={item.ki}
            onSelected={() => setSelected(item)}
            onFavorited={() => removeFavorite(item.id)}
          />
        )}
      />

      <FavoriteDetailModal
        selected={selected}
        onClose={() => setSelected(null)}
      />
    </ScreenContainer>
  );
};

export default FavoritesScreen;
