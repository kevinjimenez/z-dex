import BaseButton from '@/shared/components/ui/BaseButton';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from 'expo-router/drawer';
import { Text, View } from 'react-native';
import DrawerHeader from './DrawerHeader';
import DrawerTabItem from './DrawerTabItem';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { navigation } = props;

  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <DrawerHeader onPress={closeDrawer} />

      <View className="flex-1 mt-6">
        <Text
          className="text-ink-2 uppercase text-sm pb-2"
          style={{ letterSpacing: 0.5 }}
        >
          Navegación
        </Text>
        {/* Draweritems */}
        {/*
          DrawerItemList solo renderiza las rutas registradas como Drawer.Screen
          en (drawer)/_layout.tsx (Perfil, Configuraciones — "(tabs)" está oculta
          ahí con drawerItemStyle: display none). Para enlazar a una tab específica
          (que vive dentro de "(tabs)" y no es un Drawer.Screen propio), usamos
          DrawerTabItem con el path público de esa ruta ("/characters", "/planets"),
          no el nombre interno del navigator. Agrega uno nuevo por cada tab que
          quieras poder abrir directo desde el drawer.
        */}
        <DrawerTabItem
          path="/characters"
          icon="drama"
          label="Personajes"
          onNavigate={closeDrawer}
        />
        <DrawerTabItem
          path="/planets"
          icon="earth"
          label="Planetas"
          onNavigate={closeDrawer}
        />
        <DrawerTabItem
          path="/favorites"
          icon="heart"
          label="Favoritos"
          onNavigate={closeDrawer}
        />
        <DrawerItemList {...props} />

        <View className="flex-col gap-y-1 mt-8">
          <View className="flex-1">
            <Text
              className="text-ink-2 uppercase text-sm pb-2"
              style={{ letterSpacing: 0.5 }}
            >
              Apariencia
            </Text>
          </View>

          <View className="flex-row gap-x-3">
            <BaseButton
              text="Claro"
              prefixIcon="sun"
              variant="contained"
              color="primary"
              className="flex-1 w-auto"
            />
            <BaseButton
              text="Oscuro"
              prefixIcon="moon"
              variant="outline"
              color="secondary"
              className="flex-1 w-auto"
            />
          </View>
        </View>
      </View>

      <BaseButton text="Cerrar sesión" prefixIcon="log-out" variant="soft" />
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
