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
          const focused = index === state.index;
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
              // navigation.navigate en vez de dispatch: alcanza para cambiar
              // de pantalla dentro del Drawer, sin manejar acciones a mano
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </View>
      <BaseButton text="Cerrar sesión" prefixIcon="log-out-outline" />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
