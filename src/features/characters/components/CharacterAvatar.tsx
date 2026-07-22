import { Image, ImageProps } from 'expo-image';
import { DimensionValue, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props extends ImageProps {
  uri: string;
  customClassContainer?: string;
  width?: DimensionValue;
  height?: DimensionValue;
}

const CharacterAvatar = ({
  uri,
  customClassContainer,
  width = 60,
  height = 60,
  ...rest
}: Props) => {
  return (
    <View className={twMerge('rounded-lg bg-frame', customClassContainer)}>
      <Image source={{ uri }} style={{ width, height }} {...rest} />
    </View>
  );
};

export default CharacterAvatar;
