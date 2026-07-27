import { IoniconsIconName } from '@react-native-vector-icons/ionicons';
import { LucideIconName } from '@react-native-vector-icons/lucide';

export interface StatCardProps {
  title: string;
  text: string;
  filled?: boolean;
  suffixIcon?: LucideIconName | IoniconsIconName;
  size?: number;
  color?: string;
  classContainer?: string;
  classValueContainer?: string;
  classTitle?: string;
  classText?: string;
}
