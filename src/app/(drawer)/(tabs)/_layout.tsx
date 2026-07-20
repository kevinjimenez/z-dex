import Ionicons from '@react-native-vector-icons/ionicons';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={
        {
          // title: 'tabs',
          // tabBarActiveTintColor: 'indigo',
          // headerShown: false,
          // tabBarStyle: {
          //   backgroundColor: 'black',
          // },
          // tabBarActiveBackgroundColor: 'red',
        }
      }
    >
      <Tabs.Screen
        name="characters"
        options={{
          title: 'Personajes',
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="game-controller-outline" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="heart-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
