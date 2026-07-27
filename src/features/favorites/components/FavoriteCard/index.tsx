import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import { FavoriteCardProps } from './interfaces/favorite-card.interface';

const FavoriteCard = ({
  name,
  image,
  onFavorited,
  onSelected,
}: FavoriteCardProps) => {
  return (
    <Pressable
      className="w-[48%] flex-col gap-y-2 relative"
      onPress={onSelected}
    >
      <View className="px-10 rounded-lg border">
        <Image
          contentPosition="top"
          source={{ uri: image }}
          style={{ width: '100%', height: 130 }}
        />
        <BaseButtonIcon
          className="absolute right-0"
          icon="heart"
          color="text-red-500"
          size={18}
          onPress={onFavorited}
        />
      </View>
      <Text className="font-oswald-semibold">{name}</Text>
    </Pressable>
  );
};

export default FavoriteCard;
