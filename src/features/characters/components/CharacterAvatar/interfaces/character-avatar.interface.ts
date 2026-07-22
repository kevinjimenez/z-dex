import { ImageProps } from 'expo-image';
import { DimensionValue } from 'react-native';

export interface CharacterAvatarProps extends ImageProps {
  uri: string;
  customClassContainer?: string;
  width?: DimensionValue;
  height?: DimensionValue;
}
