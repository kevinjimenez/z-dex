import BaseButton from '@/shared/ui/BaseButton';
import BaseButtonIcon from '@/shared/ui/BaseButtonIcon';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from 'expo-router/drawer';
import { Text, View } from 'react-native';

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
      <View className="flex-row items-center gap-x-5">
        <View className="size-20 rounded-2xl bg-primary justify-center">
          <Text className="text-center text-white text-3xl font-bold">G</Text>
        </View>
        <View className="flex-col flex-1">
          <Text className="font-bold text-xl">Guerrero Z</Text>
          <Text className="text-xs text-ink-2 font-medium">
            guerrero@gmail.com
          </Text>
        </View>
        <BaseButtonIcon
          icon="x"
          className="bg-secondary-light rounded-full size-10 items-center justify-center"
          color="text-secondary"
          size={18}
          onPress={closeDrawer}
        />
      </View>

      <View className="flex-1 mt-6 mb-4">
        <Text
          className="text-ink-2 uppercase text-sm pb-2"
          style={{ letterSpacing: 0.5 }}
        >
          Navegación
        </Text>
        {/* Draweritems */}
        <DrawerItemList {...props} />
      </View>

      <BaseButton text="Cerrar sesión" prefixIcon="log-out" variant="soft" />
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
