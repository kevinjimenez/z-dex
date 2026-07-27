import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';
import FavoriteCard from '@/features/favorites/components/FavoriteCard';
import FavoriteDetailModal from '@/features/favorites/components/FavoriteDetailModal';
import FavoriteHeader from '@/features/favorites/components/FavoriteHeader';
import { FavoriteList } from '@/features/favorites/components/FavoriteList';
import { useFavoriteStore } from '@/features/favorites/store/useFavorite';
import ScreenContainer from '@/shared/components/common/ScreenContainer';
import { useState } from 'react';

const FavoritesScreen = () => {
  const { removeFavorite } = useFavoriteStore();
  const favorites = useFavoriteStore((state) => state.favorites);

  const [selected, setSelected] = useState<CharacterResponse | null>(null);

  return (
    <ScreenContainer>
      <FavoriteHeader />

      <FavoriteList
        data={favorites}
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
