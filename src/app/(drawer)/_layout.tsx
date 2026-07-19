import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: 'indigo',
        // headerShadowVisible: false,
        // sceneContainerStyle: {
        //   backgroundColor: 'white',
        // },
      }}
    >
      <Drawer.Screen
        name="home" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'overview',
        }}
      />
      {/*<Drawer.Screen
        name="user/[id]" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'User',
          title: 'overview',
        }}
      />*/}
    </Drawer>
  );
};

export default DrawerLayout;
