import { LucideIconName } from '@react-native-vector-icons/lucide';
import { Href } from 'expo-router';

export interface TabDrawerItemProps {
  path: Href; // ej: "/planets"
  icon: LucideIconName; // ej: "earth"
  label: string; // ej: "Planetas"
  onNavigate?: () => void; // para cerrar el drawer
}
