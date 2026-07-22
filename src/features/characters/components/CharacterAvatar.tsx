import { Image, ImageProps } from 'expo-image';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props extends ImageProps {
  uri: string;
  customClassContainer?: string;
  width?: number;
  height?: number;
}

const CharacterAvatar = ({
  uri,
  customClassContainer,
  contentFit = 'cover',
  transition = 1000,
  width = 60,
  height = 60,
  ...rest
}: Props) => {
  return (
    <View className={twMerge('rounded-lg bg-frame', customClassContainer)}>
      <Image
        contentFit={contentFit}
        transition={transition}
        source={{ uri }}
        style={{ width, height }}
        {...rest}
      />
    </View>
  );
};

export default CharacterAvatar;
