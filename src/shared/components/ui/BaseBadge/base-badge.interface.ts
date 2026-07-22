import { LucideIconName } from '@react-native-vector-icons/lucide';

export interface BaseBadgeProps {
  customClassBadge?: string;
  customClassText?: string;
  prefixIcon?: LucideIconName;
  suffixIcon?: LucideIconName;
  size?: number;
  color?: string;
  text: string;
}
