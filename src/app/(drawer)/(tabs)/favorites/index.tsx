import CustomDrawerMenuButton from '@/shared/components/common/CustomDrawerMenuButton';
import ScreenContainer from '@/shared/components/common/ScreenContainer';
import { Text, View } from 'react-native';

const FavoritesScreen = () => {
  return (
    <ScreenContainer>
      <View className="mb-6 flex-row gap-x-4 items-center">
        <CustomDrawerMenuButton />
        <View className="flex-col gap-y-2">
          <Text className="font-dmsans-medium text-sm text-ink-3">
            Tu colección Z
          </Text>
          <Text className="font-oswald-bold text-3xl">Tus favoritos</Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default FavoritesScreen;
