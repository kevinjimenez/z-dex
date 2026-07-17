import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';
import LabelIcon from '@/shared/components/LabelIcon';
import BaseBadge from '@/shared/ui/BaseBadge';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import * as Haptics from 'expo-haptics';

interface Props {
  item: CharacterResponse;
}

const CharacterCard = ({ item }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View className="rounded-xl border border-slate-200 flex-row gap-x-5 p-3 justify-center items-center bg-white elevation-xl">
      <View className="rounded-lg bg-slate-200">
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
          <LabelIcon text={item.ki} prefixIcon="leaf-outline" />
        </View>
      </View>
      <Pressable
        className=""
        onPress={() => {
          Haptics.selectionAsync();
          setIsFavorite(() => true);
        }}
        onLongPress={() => {
          Haptics.selectionAsync();
          setIsFavorite(() => false);
        }}
      >
        <Ionicons
          name="heart-outline"
          size={25}
          color={isFavorite ? 'red' : 'black'}
        />
      </Pressable>
    </View>
  );
};

export default CharacterCard;
