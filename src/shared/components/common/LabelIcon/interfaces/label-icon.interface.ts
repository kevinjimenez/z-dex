import { LucideIconName } from '@react-native-vector-icons/lucide';

export interface LabelIconProps {
  text: string;
  prefixIcon?: LucideIconName;
  suffixIcon?: LucideIconName;
  customClassContainer?: string;
  customClassText?: string;
  size?: number;
  color?: string;
}
