import Lucide from '@react-native-vector-icons/lucide';
import { Tabs } from 'expo-router';
import { getFocusedRouteNameFromRoute } from 'expo-router/build/react-navigation';
import { Platform } from 'react-native';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        // title: 'tabs',
        tabBarActiveTintColor: '#FF6A1A',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FBF3E9',
          borderTopWidth: 1,
          // elevation: 8, // sombra en Android
          // shadowColor: '#000', // sombra en iOS
          // shadowOpacity: 0.1,
          // shadowRadius: 4,
        },
        // tabBarActiveBackgroundColor: 'red',
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={({ route }) => {
          const focusedRouteName =
            getFocusedRouteNameFromRoute(route) ?? 'characters/index';
          // en iOS el modal ya tapa el tab bar solo; esto es únicamente
          // para Android, donde el modal es solo una animación y no lo oculta
          const isDetail =
            Platform.OS === 'android' && focusedRouteName.startsWith('detail');

          return {
            title: 'Personajes',
            tabBarIcon: ({ color }) => (
              <Lucide size={28} name="drama" color={color} />
            ),
            tabBarStyle: isDetail ? { display: 'none' } : undefined,
          };
        }}
      />

      <Tabs.Screen
        name="planets/index"
        options={{
          title: 'Planetas',
          tabBarIcon: ({ color }) => (
            <Lucide size={28} name="earth" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => (
            <Lucide size={28} name="heart" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
