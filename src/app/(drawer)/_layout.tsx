import CustomDrawer from '@/shared/components/common/CustomDrawer';
import CustomDrawerLabel from '@/shared/components/common/CustomDrawerLabel';
import Lucide from '@react-native-vector-icons/lucide';

import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#E77B49',
        overlayColor: 'rgba(0,0,0,0.4)',
        drawerActiveBackgroundColor: 'transparent', // Quitamos el fondo activo
        // Estilo base para cada elemento del menú
        drawerItemStyle: {
          // 1. Añadimos el separador (línea inferior) a todos los ítems
          borderBottomWidth: 1,
          borderBottomColor: '#E0E0E0', // Color gris claro para la línea
          // borderRadius: 0,
        },
      }}
      // screenOptions={({ route, navigation }) => {
      //   // 1. Detectamos cuál es la pestaña actualmente seleccionada
      //   // const state = navigation.getState();
      //   // const activeRouteName = state.routes[state.index].name;
      //   // const isActive = route.name === activeRouteName;
      //   return {
      //     drawerActiveBackgroundColor: 'transparent', // Quitamos el fondo activo
      //     // Estilo base para cada elemento del menú
      //     drawerItemStyle: {
      //       // 1. Añadimos el separador (línea inferior) a todos los ítems
      //       borderBottomWidth: 1,
      //       borderBottomColor: '#E0E0E0', // Color gris claro para la línea
      //     },
      //   };
      // }}
    >
      {/*
        "(tabs)" ya existe como ruta por convención de carpetas (src/app/(drawer)/(tabs)),
        no porque la declaremos aquí. La declaramos solo para ocultarla de DrawerItemList
        (display: 'none'): "Inicio" ahora se navega con un <DrawerTabItem path="/characters" />
        en CustomDrawer/index.tsx, vía router.navigate — no por este Drawer.Screen.
      */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />

      <Drawer.Screen
        name="profile/index"
        options={{
          drawerLabel: ({ color }) => (
            <CustomDrawerLabel
              color={color}
              icon="chevron-right"
              label="Perfil"
            />
          ),
          title: 'Usuario',
          drawerIcon: ({ color }) => (
            <Lucide name="user" size={20} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="settings/index"
        options={{
          drawerLabel: ({ color }) => (
            <CustomDrawerLabel
              color={color}
              icon="chevron-right"
              label="Configuraciones"
            />
          ),
          title: 'Config',
          drawerIcon: ({ color }) => (
            <Lucide name="settings" size={20} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
