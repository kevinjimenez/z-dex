import { IoniconsIconName } from '@react-native-vector-icons/ionicons';
import { LucideIconName } from '@react-native-vector-icons/lucide';

export interface BaseBadgeProps {
  customClassBadge?: string;
  customClassText?: string;
  prefixIcon?: LucideIconName | IoniconsIconName;
  suffixIcon?: LucideIconName | IoniconsIconName;
  filled?: boolean;
  size?: number;
  color?: string;
  text: string;
}
