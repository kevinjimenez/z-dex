import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';
import { useFavoriteStore } from '@/features/favorites/store/useFavorite';
import LabelIcon from '@/shared/components/common/LabelIcon';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import CharacterAvatar from '../CharacterAvatar';
import { CharacterCardProps } from './interfaces/character-card.interface';

const CharacterCard = ({ item, ...rest }: CharacterCardProps) => {
  const { addFavorite, removeFavorite } = useFavoriteStore();
  const isFavorite = useFavoriteStore((state) => state.isFavorite(item.id));

  const goToDetail = (id: number) => {
    router.push(`/detail/${id}`);
  };

  const handleFavoriteCharacter = async (item: CharacterResponse) => {
    Haptics.selectionAsync();
    // setIsFavorite(() => true);
    addFavorite(item);
  };

  const handleNotFavoriteCharacter = (id: number) => {
    Haptics.selectionAsync();
    // setIsFavorite(() => false);
    removeFavorite(id);
  };

  return (
    <Pressable
      className="rounded-xl border border-slate-200 flex-row gap-x-5 p-3 justify-center items-center bg-white elevation-sm"
      {...rest}
      onPress={() => goToDetail(item.id)}
    >
      <CharacterAvatar
        uri={item.image}
        transition={1000}
        contentPosition="top"
        contentFit="cover"
      />
      <View className="flex-col justify-center flex-1 gap-y-1">
        <Text className="text-[1.3rem] font-oswald-bold">{item.name}</Text>
        <View className="flex-row items-center gap-x-4">
          <BaseBadge text={item.race} />
          <LabelIcon
            text={item.ki}
            prefixIcon="zap"
            color="text-primary"
            customClassText="text-primary font-dmsans-bold"
          />
        </View>
      </View>
      <BaseButtonIcon
        onPress={() => handleFavoriteCharacter(item)}
        onLongPress={() => handleNotFavoriteCharacter(item.id)}
        icon="heart"
        color={isFavorite ? 'text-red-500' : 'text-secondary'}
      />
    </Pressable>
  );
};

export default CharacterCard;
