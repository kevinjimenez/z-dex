import LabelIcon from '@/shared/components/common/LabelIcon';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import { Image } from 'expo-image';
import { Pressable, Text, useWindowDimensions, View } from 'react-native';
import { FavoriteCardProps } from './interfaces/favorite-card.interface';

const FavoriteCard = ({
  name,
  image,
  race,
  ki,
  onFavorited,
  onSelected,
}: FavoriteCardProps) => {
  const { width } = useWindowDimensions();
  const avartarSize = width * 0.3;

  return (
    <Pressable
      className="w-[48%] flex-col gap-y-2 relative"
      onPress={onSelected}
    >
      <View className="px-10 rounded-xl border border-surface-terceary bg-surface-terceary items-center">
        <View style={{ height: avartarSize, width: avartarSize }}>
          <Image
            contentFit="cover"
            contentPosition="top"
            source={{ uri: image }}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <BaseButtonIcon
          className="absolute right-2 top-3 items-center justify-center"
          icon="heart"
          filled
          color="text-red-500"
          size={25}
          onPress={onFavorited}
        />
      </View>
      <Text className="font-oswald-semibold text-lg">{name}</Text>
      <View className="flex-row gap-x-2 items-center">
        <BaseBadge text={race} />
        <LabelIcon
          prefixIcon="zap"
          color="text-primary"
          text={ki}
          customClassText="font-dmsans-semibold text-xs text-primary"
        />
      </View>
    </Pressable>
  );
};

export default FavoriteCard;
