import { useFavoriteStore } from '@/features/favorites/store/useFavorite';
import LabelIcon from '@/shared/components/common/LabelIcon';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import BaseThumbnail from '@/shared/components/ui/BaseThumbnail';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { useCharacterById } from '../../hooks/useCharacters';
import { CharacterCardProps } from './interfaces/character-card.interface';

const CharacterCard = ({ item, ...rest }: CharacterCardProps) => {
  const { addFavorite, removeFavorite } = useFavoriteStore();
  const { refetch } = useCharacterById(item.id, { enabled: false });
  const isFavorite = useFavoriteStore((state) => state.isFavorite(item.id));

  const [isAddingFavorite, setIsAddingFavorite] = useState(false);

  const goToDetail = (id: number) => {
    router.push(`/character/detail/${id}`);
  };

  const handleFavoriteCharacter = async () => {
    Haptics.selectionAsync();

    if (isFavorite) return;

    setIsAddingFavorite(true);
    const { data } = await refetch();
    if (data) {
      addFavorite(data);
    }
    setIsAddingFavorite(false);
  };

  const handleNotFavoriteCharacter = (id: number) => {
    Haptics.selectionAsync();
    removeFavorite(id);
  };

  return (
    <Pressable
      className="rounded-xl border border-surface-terceary flex-row gap-x-5 p-3 justify-center items-center bg-white"
      {...rest}
      onPress={() => goToDetail(item.id)}
    >
      <BaseThumbnail
        image={item.image}
        width={60}
        height={60}
        transition={1000}
        contentPosition="top"
        contentFit="cover"
      />
      <View className="flex-col justify-center flex-1 gap-y-1">
        <Text className="text-2xl font-oswald-semibold text-ink-primary">
          {item.name}
        </Text>
        <View className="flex-row items-center gap-x-4">
          <BaseBadge text={item.race} />
          <LabelIcon
            text={item.ki}
            prefixIcon="zap"
            color="text-ink-primary"
            customClassText="text-ink-primary font-dmsans-semibold"
          />
        </View>
      </View>
      {isAddingFavorite ? (
        <ActivityIndicator size="small" color="red" className="pr-2" />
      ) : (
        <BaseButtonIcon
          className="pr-2"
          onPress={handleFavoriteCharacter}
          onLongPress={() => handleNotFavoriteCharacter(item.id)}
          icon={isFavorite ? 'heart' : 'heart'}
          filled={isFavorite}
          color="text-red-500"
        />
      )}
      {/*{isFavorite && (
        <BaseButtonIcon
          className="pr-2"
          onPress={() => handleFavoriteCharacter(item.id)}
          onLongPress={() => handleNotFavoriteCharacter(item.id)}
          icon="heart"
          filled
          color="text-red-500"
        />
      )}*/}
    </Pressable>
  );
};

export default CharacterCard;
