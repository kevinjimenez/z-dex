import Lucide from '@react-native-vector-icons/lucide';
import { router, usePathname } from 'expo-router';
import { DrawerItem } from 'expo-router/drawer';
import CustomDrawerLabel from '../CustomDrawerLabel';
import { TabDrawerItemProps } from './interfaces/drawer-tab-item.interface';

const ACTIVE_COLOR = '#d9662b';

// Item de drawer que apunta a una tab (o cualquier ruta) por URL, no por nombre
// de Drawer.Screen. Útil porque el Drawer no sabe en qué tab interna estás:
// para él, "(tabs)" siempre está enfocado sin importar si navegaste a /planets
// o /favorites. Por eso el estado "activo" se calcula acá con usePathname(),
// comparando contra la URL real, en vez de depender del focus del navigator.
const DrawerTabItem = ({
  path,
  icon,
  label,
  onNavigate,
}: TabDrawerItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  const color = isActive ? ACTIVE_COLOR : '#b0ada6';

  return (
    <DrawerItem
      style={{
        borderBottomWidth: 1,
        borderBottomColor: '#e4e2de',
      }}
      label={() => (
        <CustomDrawerLabel color={color} icon="chevron-right" label={label} />
      )}
      icon={() => <Lucide name={icon} size={20} color={color} />}
      onPress={() => {
        onNavigate?.();
        router.navigate(path);
      }}
    />
  );
};

export default DrawerTabItem;
