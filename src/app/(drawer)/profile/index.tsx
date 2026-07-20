import BaseButton from '@/shared/ui/BaseButton';
import { Text, View } from 'react-native';

const ProfileScreen = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <BaseButton text="Cerrar sesión" prefixIcon="log-out-outline" />
    </View>
  );
};

export default ProfileScreen;
