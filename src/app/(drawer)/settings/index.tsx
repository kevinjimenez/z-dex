import DrawerMenuButton from '@/shared/components/common/CustomDrawerMenuButton';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SettingScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: top }}>
      <Text>SettingScreen</Text>
      <DrawerMenuButton />
    </View>
  );
};

export default SettingScreen;
