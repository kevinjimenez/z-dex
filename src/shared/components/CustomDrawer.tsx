import Ionicons from '@react-native-vector-icons/ionicons';
import { router, usePathname } from 'expo-router';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from 'expo-router/drawer';
import { Text, View } from 'react-native';
import BaseButton from '../ui/BaseButton';
import BaseButtonIcon from '../ui/BaseButtonIcon';
import CustomDrawerItem from './CustomDrawerItem';

type RouteOptions =
  DrawerContentComponentProps['descriptors'][string]['options'];

// drawerLabel puede ser una función (color/focused dinámicos); acá solo
// soportamos el caso string y caemos a title/route.name, como hace
// DrawerItemList por defecto.
const getRouteLabel = (options: RouteOptions, routeName: string) => {
  const { title, drawerLabel } = options;
  return typeof drawerLabel === 'string' ? drawerLabel : (title ?? routeName);
};

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { state, navigation, descriptors } = props;
  const pathname = usePathname();

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="flex-row items-center gap-x-5">
        <View className="size-20 rounded-2xl bg-orange-500 justify-center">
          <Text className="text-center text-white text-3xl font-bold">G</Text>
        </View>
        <View className="flex-col flex-1">
          <Text>Guerrero Z</Text>
          <Text>Guerrero@gmail.com</Text>
        </View>
        <BaseButtonIcon
          icon="close"
          className="bg-[#EEE0CC] rounded-full size-10 items-center justify-center"
          color="#9D6638"
        />
      </View>

      <View className="flex-1 my-4">
        <View className="pb-2">
          <Text className="uppercase" style={{ letterSpacing: 0.8 }}>
            Navegación
          </Text>
        </View>
        {state.routes.map((route, index) => {
          // state.index es la ruta actualmente enfocada del Drawer
          // const focused = index === state.index;
          const focused = index === state.index && pathname !== '/favorites';

          // options de este route en particular (drawerLabel, drawerIcon, etc,
          // definidas en cada <Drawer.Screen> del _layout)
          const { drawerIcon } = descriptors[route.key].options;
          const label = getRouteLabel(
            descriptors[route.key].options,
            route.name,
          );

          return (
            <CustomDrawerItem
              key={route.key}
              label={label}
              focused={focused}
              icon={drawerIcon}
              onPress={() => {
                // "(tabs)" ya puede estar focused con Favoritos activa
                // adentro; navigate(route.name) ahí no cambia el tab
                // interno, así que se fuerza el path para volver a Inicio
                if (route.name === '(tabs)') {
                  router.push('/characters');
                } else {
                  navigation.navigate(route.name);
                }
              }}
            />
          );
        })}

        {/* Favoritos vive dentro de (tabs), no es un Drawer.Screen propio,
        así que no aparece en state.routes: se arma este item a mano y se
        navega por path en vez de por nombre de route del Drawer. */}
        <CustomDrawerItem
          label="Favoritos"
          focused={pathname === '/favorites'}
          icon={({ size, color }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          )}
          onPress={() => router.push('/favorites')}
        />
      </View>
      <BaseButton text="Cerrar sesión" prefixIcon="log-out-outline" />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
