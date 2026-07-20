import BaseButton from '@/shared/ui/BaseButton';
import BaseButtonIcon from '@/shared/ui/BaseButtonIcon';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from 'expo-router/drawer';
import { Text, View } from 'react-native';

const CustomDrawer = (props: DrawerContentComponentProps) => {
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
          <Text className="font-bold text-xl">Guerrero Z</Text>
          <Text className="text-xs">Guerrero@gmail.com</Text>
        </View>
        <BaseButtonIcon
          icon="close"
          className="bg-[#EEE0CC] rounded-full size-10 items-center justify-center"
          color="brown"
        />
      </View>

      <View className="flex-1 mt-6 mb-4">
        <Text className="uppercase text-sm pb-2" style={{ letterSpacing: 0.5 }}>
          Navegación
        </Text>
        {/* Draweritems */}
        <DrawerItemList {...props} />
      </View>

      <BaseButton text="Cerrar sesión" prefixIcon="log-out-outline" />
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
