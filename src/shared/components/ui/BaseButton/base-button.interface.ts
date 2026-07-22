import { LucideIconName } from '@react-native-vector-icons/lucide';
import { PressableProps } from 'react-native';

export interface BaseButtonProps extends PressableProps {
  text: string;
  prefixIcon?: LucideIconName;
  suffixIcon?: LucideIconName;
  size?: number;
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'soft' | 'outline';
}
