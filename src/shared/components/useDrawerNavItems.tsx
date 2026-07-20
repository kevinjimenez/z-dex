import Ionicons from '@react-native-vector-icons/ionicons';
import { router, usePathname } from 'expo-router';
import { DrawerContentComponentProps } from 'expo-router/drawer';

type RouteOptions =
  DrawerContentComponentProps['descriptors'][string]['options'];

export interface DrawerNavItem {
  key: string;
  label: string;
  focused: boolean;
  icon?: (props: {
    focused: boolean;
    size: number;
    color: string;
  }) => React.ReactNode;
  onPress: () => void;
}

// drawerLabel puede ser una función (color/focused dinámicos); acá solo
// soportamos el caso string y caemos a title/route.name, como hace
// DrawerItemList por defecto.
const getRouteLabel = (options: RouteOptions, routeName: string) => {
  const { title, drawerLabel } = options;
  return typeof drawerLabel === 'string' ? drawerLabel : (title ?? routeName);
};

// Unifica los items reales del Drawer (state.routes) con "Favoritos", que no
// es un Drawer.Screen propio (vive dentro de (tabs)) y por eso no aparece ahí.
export const useDrawerNavItems = ({
  state,
  navigation,
  descriptors,
}: DrawerContentComponentProps): DrawerNavItem[] => {
  const pathname = usePathname();

  const routeItems: DrawerNavItem[] = state.routes.map((route, index) => ({
    key: route.key,
    label: getRouteLabel(descriptors[route.key].options, route.name),
    icon: descriptors[route.key].options.drawerIcon,
    // "(tabs)" puede seguir "focused" con Favoritos activa adentro,
    // así que se excluye explícitamente para que no queden dos items pintados
    focused: index === state.index && pathname !== '/favorites',
    onPress: () => {
      // navigate('(tabs)') no cambia el tab interno si ya está enfocado ahí,
      // así que se fuerza el path para volver siempre a Inicio
      if (route.name === '(tabs)') {
        router.push('/characters');
      } else {
        navigation.navigate(route.name);
      }
    },
  }));

  const favoritesItem: DrawerNavItem = {
    key: 'favorites',
    label: 'Favoritos',
    icon: ({ size, color }) => (
      <Ionicons name="heart-outline" size={size} color={color} />
    ),
    focused: pathname === '/favorites',
    onPress: () => router.push('/favorites'),
  };

  return [...routeItems, favoritesItem];
};
