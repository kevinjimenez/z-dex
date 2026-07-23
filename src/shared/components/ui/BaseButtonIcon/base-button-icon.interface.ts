import { LucideIconName } from '@react-native-vector-icons/lucide';
import { PressableProps } from 'react-native';

export interface BaseButtonIconProps extends PressableProps {
  icon: LucideIconName;
  size?: number;
  color?: string;
}
