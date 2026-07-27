import { IoniconsIconName } from '@react-native-vector-icons/ionicons';
import { LucideIconName } from '@react-native-vector-icons/lucide';

export interface LabelIconProps {
  text: string;
  prefixIcon?: LucideIconName | IoniconsIconName;
  suffixIcon?: LucideIconName | IoniconsIconName;
  filled?: boolean;
  customClassContainer?: string;
  customClassText?: string;
  size?: number;
  color?: string;
}
