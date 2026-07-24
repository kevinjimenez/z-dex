import CustomDrawerMenuButton from '@/shared/components/common/CustomDrawerMenuButton';
import { Text, View } from 'react-native';

const PlanetHeader = () => {
  return (
    <View className="mb-6 flex-row gap-x-4 items-center">
      <CustomDrawerMenuButton />
      <View className="flex-col gap-y-2">
        <Text className="font-oswald-bold text-3xl">Planetas</Text>
        <Text className="font-dmsans-medium text-sm text-ink-3">
          Explorá los planetas del universo Z
        </Text>
      </View>
    </View>
  );
};

export default PlanetHeader;
