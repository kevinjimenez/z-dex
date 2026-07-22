import BaseButton from '@/shared/components/ui/BaseButton';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from 'expo-router/drawer';
import { Text, View } from 'react-native';
import CustomDrawerHeader from './CustomDrawerHeader';

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
      <CustomDrawerHeader onPress={closeDrawer} />

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
