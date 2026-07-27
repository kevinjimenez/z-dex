import { IoniconsIconName } from '@react-native-vector-icons/ionicons';
import { LucideIconName } from '@react-native-vector-icons/lucide';
import { PressableProps } from 'react-native';

export interface BaseButtonIconProps extends PressableProps {
  icon: LucideIconName;
  filledIcon?: IoniconsIconName;
  filled?: boolean;
  size?: number;
  color?: string;
}
