import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from 'expo-router/drawer';
import { Text, View } from 'react-native';
import BaseButton from '../ui/BaseButton';
import BaseButtonIcon from '../ui/BaseButtonIcon';
import CustomDrawerItem from './CustomDrawerItem';
import { useDrawerNavItems } from './useDrawerNavItems';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const items = useDrawerNavItems(props);

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
        {items.map(({ key, ...item }) => (
          <CustomDrawerItem key={key} {...item} />
        ))}
      </View>
      <BaseButton text="Cerrar sesión" prefixIcon="log-out-outline" />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
