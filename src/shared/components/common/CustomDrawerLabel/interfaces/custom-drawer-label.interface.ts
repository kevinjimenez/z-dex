import { LucideIconName } from '@react-native-vector-icons/lucide';
import { ColorValue } from 'react-native';

export interface CustomDrawerLabelProps {
  color: ColorValue;
  icon: LucideIconName;
  label: string;
  focused?: boolean;
}
