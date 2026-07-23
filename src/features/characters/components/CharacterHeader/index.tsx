import Avartar from '@/shared/components/common/Avatar';
import DrawerMenuButton from '@/shared/components/common/CustomDrawerMenuButton';
import { Text, View } from 'react-native';

const CharacterHeader = () => {
  return (
    <View className="flex-row mb-2 items-center gap-x-4">
      <DrawerMenuButton />

      <View className="flex-col flex-1 gap-y-1">
        <Text className="text-sm text-ink-3 font-dmsans-regular">
          Bienvenido de nuevo
        </Text>
        <Text className="font-oswald-semibold text-3xl">Universo Z</Text>
      </View>

      <Avartar text="G" />
    </View>
  );
};

export default CharacterHeader;
