import { Image } from 'expo-image';
import { Text, useWindowDimensions, View } from 'react-native';
import { FavoritePosterProps } from './interfaces/favorite-poster.interface';

const FavoritePoster = ({ image }: FavoritePosterProps) => {
  const { width } = useWindowDimensions();

  const avatarSize = width * 0.4;

  return (
    <View
      className="rounded-full border border-primary overflow-hidden"
      style={{
        width: avatarSize,
        height: avatarSize,
      }}
    >
      <Image
        source={{ uri: image }}
        contentFit="contain"
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
};

export default FavoritePoster;
