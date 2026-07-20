import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'tab',
          title: 'tab',
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
          // headerStyle: { backgroundColor: 'indigo' },
          // headerTintColor: 'white',
          // headerShown: false,
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
