import { LucideIconName } from '@react-native-vector-icons/lucide';

export interface StatCardProps {
  title: string;
  text: string;
  suffixIcon?: LucideIconName;
  size?: number;
  color?: string;
  classContainer?: string;
  classValueContainer?: string;
  classTitle?: string;
  classText?: string;
}
