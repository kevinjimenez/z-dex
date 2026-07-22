import { ImageProps } from 'expo-image';
import { DimensionValue } from 'react-native';

export interface TransformationAvatarProps extends ImageProps {
  image: string;
  customClassContainer?: string;
  customClassImage?: string;
  width?: DimensionValue;
  height?: DimensionValue;
}
