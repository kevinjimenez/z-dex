import { ImageProps } from 'expo-image';
import { DimensionValue } from 'react-native';

export interface TransformationPosterProps extends ImageProps {
  image: string;
  customClassContainer?: string;
  width?: DimensionValue;
  height?: DimensionValue;
}
