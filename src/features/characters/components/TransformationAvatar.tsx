import { Image, ImageProps } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { DimensionValue, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props extends ImageProps {
  image: string;
  customClassContainer?: string;
  customClassImage?: string;
  width?: DimensionValue;
  height?: DimensionValue;
}

const TransformationAvatar = ({
  image,
  customClassContainer,
  width = 100,
  height = 120,
  customClassImage,
  ...rest
}: Props) => {
  return (
    <View
      className={twMerge(
        'rounded-xl bg-primary overflow-hidden relative',
        customClassContainer,
      )}
    >
      <Image
        // contentFit="cover"
        // contentPosition="top"
        // transition={1000}
        className={customClassImage}
        source={{ uri: image }}
        style={{ width, height }}
        {...rest}
      />
      {/*Abajo hacia arriba*/}
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.4)']}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 50,
        }}
      />
    </View>
  );
};

export default TransformationAvatar;
