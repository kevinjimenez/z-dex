import CustomDrawer from '@/shared/components/CustomDrawer';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <Drawer drawerContent={CustomDrawer}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Inicio',
          title: 'Inicio',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          // headerStyle: { backgroundColor: 'indigo' },
          // headerTintColor: 'white',
          // headerShown: false,
        }}
      />
      <Drawer.Screen
        name="profile/index"
        options={{
          drawerLabel: 'Perfil',
          title: 'Usuario',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          // headerStyle: { backgroundColor: 'indigo' },
          // headerTintColor: 'white',
          // headerShown: false,
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
