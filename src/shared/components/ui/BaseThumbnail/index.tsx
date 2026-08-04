import { Image } from 'expo-image';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { BaseThumbnailProps } from './base-thumbnail.interface';

const BaseThumbnail = ({
  image,
  customClassContainer,
  width,
  height,
  ...rest
}: BaseThumbnailProps) => {
  return (
    <View
      className={twMerge(
        'rounded-lg bg-surface-terceary',
        customClassContainer,
      )}
      style={{ width, height }}
    >
      <Image
        source={{ uri: image }}
        style={{ width: '100%', height: '100%' }}
        {...rest}
      />
    </View>
  );
};

export default BaseThumbnail;
