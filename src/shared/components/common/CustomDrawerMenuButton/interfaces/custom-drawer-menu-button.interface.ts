import { LucideIconName } from '@react-native-vector-icons/lucide';
import { PressableProps } from 'react-native';

export interface CustomDrawerMenuButtonProps extends PressableProps {
  openIcon?: LucideIconName;
  size?: number;
  closeIcon?: LucideIconName;
}
