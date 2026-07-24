import { Image } from 'expo-image';
import { View } from 'react-native';
import { TransformationPosterProps } from './transformation-poster.interface';
import { twMerge } from 'tailwind-merge';

const TransformationPoster = ({
  image,
  customClassContainer,
  width,
  height,
  ...rest
}: TransformationPosterProps) => {
  return (
    <View className={twMerge('bg-primary-light', customClassContainer)}>
      <Image source={{ uri: image }} style={{ width, height }} {...rest} />
    </View>
  );
};

export default TransformationPoster;
