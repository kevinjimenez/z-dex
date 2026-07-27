import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import { Image } from 'expo-image';
import { Pressable, Text, useWindowDimensions, View } from 'react-native';
import { FavoriteCardProps } from './interfaces/favorite-card.interface';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import LabelIcon from '@/shared/components/common/LabelIcon';

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
      <View className="px-10 rounded-xl border border-ink-dark-3 bg-ink-2/50">
        <View style={{ height: avartarSize }}>
          <Image
            contentFit="cover"
            contentPosition="top"
            source={{ uri: image }}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <BaseButtonIcon
          className="absolute right-2 top-2 bg-red-300 size-8 items-center justify-center rounded-full"
          icon="heart"
          color="text-red-500"
          size={15}
          onPress={onFavorited}
        />
      </View>
      <Text className="font-oswald-semibold">{name}</Text>
      <View className="flex-row gap-x-2 items-center">
        <BaseBadge text={race} color="text-ink-3" />
        <LabelIcon
          prefixIcon="zap"
          text={ki}
          customClassText="font-dmsans-semibold text-xs text-ink-3"
        />
      </View>
    </Pressable>
  );
};

export default FavoriteCard;
