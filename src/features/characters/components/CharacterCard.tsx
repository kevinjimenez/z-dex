import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';
import LabelIcon from '@/shared/components/LabelIcon';
import BaseBadge from '@/shared/ui/BaseBadge';
import BaseButtonIcon from '@/shared/ui/BaseButtonIcon';
import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

interface Props extends PressableProps {
  item: CharacterResponse;
}

const CharacterCard = ({ item, onPress, ...rest }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteCharacter = () => {
    Haptics.selectionAsync();
    setIsFavorite(() => true);
  };

  const handleNotFavoriteCharacter = () => {
    Haptics.selectionAsync();
    setIsFavorite(() => false);
  };

  return (
    <Pressable
      className="rounded-xl border border-slate-200 flex-row gap-x-5 p-3 justify-center items-center bg-white elevation-xl"
      {...rest}
      onPress={onPress}
    >
      <View className="rounded-lg bg-frame">
        <Image
          contentFit="cover"
          // ancla el recorte de "cover" arriba, para mostrar la cara y no el cuerpo completo
          contentPosition="top"
          transition={1000}
          source={{ uri: item.image }}
          style={{ width: 60, height: 60 }}
        />
      </View>
      <View className="flex-col justify-center flex-1 gap-y-2">
        <Text className="text-[1.3rem] font-bold">{item.name}</Text>
        <View className="flex-row items-center gap-x-4">
          <BaseBadge text={item.race} customClassBadge="rounded-md" />
          <LabelIcon
            text={item.ki}
            prefixIcon="zap"
            color="text-primary"
            customClassText="text-primary font-semibold"
          />
        </View>
      </View>
      <BaseButtonIcon
        onPress={handleFavoriteCharacter}
        onLongPress={handleNotFavoriteCharacter}
        icon="heart"
        color={isFavorite ? 'text-red-500' : 'text-secondary'}
      />
    </Pressable>
  );
};

export default CharacterCard;
