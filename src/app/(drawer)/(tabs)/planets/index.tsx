import { usePlanets } from '@/features/planets/hooks/usePlanets';
import CustomDrawerMenuButton from '@/shared/components/common/CustomDrawerMenuButton';
import LabelIcon from '@/shared/components/common/LabelIcon';
import ScreenContainer from '@/shared/components/common/ScreenContainer';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import { Image } from 'expo-image';
import { DrawerToggleButton } from 'expo-router/drawer';
import { FlatList, Text, View } from 'react-native';

const PlanetsScreen = () => {
  const { dragonBallPlanets } = usePlanets();

  return (
    <ScreenContainer>
      <View className="mb-6 flex-row gap-x-4 items-center">
        <CustomDrawerMenuButton />
        <View className="flex-col gap-y-2">
          <Text className="font-oswald-bold text-3xl">Planetas</Text>
          <Text className="font-dmsans-medium text-sm text-ink-3">
            Explorá los planetas del universo Z
          </Text>
        </View>
      </View>
      <FlatList
        data={dragonBallPlanets}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ItemSeparatorComponent={() => <View className="h-4" />}
        renderItem={({ item }) => (
          <View className="bg-white rounded-xl overflow-hidden border border-secondary/20">
            <Image
              source={{ uri: item.image }}
              contentPosition="center"
              style={{ width: '100%', height: 140 }}
            />
            <View className="flex-col px-5 py-4 gap-y-4">
              <View className="flex-row flex-1 justify-between items-center">
                <LabelIcon
                  text={item.name}
                  prefixIcon="earth"
                  customClassText="text-xl font-oswald-bold"
                  customClassContainer="gap-x-3"
                  size={20}
                  color="text-primary"
                />
                <BaseBadge
                  text={item.isDestroyed ? 'Destruido' : 'Activo'}
                  customClassText="text-xs text-white font-dmsans-bold"
                  customClassBadge="bg-primary"
                />
              </View>

              <Text className="text-pretty font-dmsans-medium text-ink-3">
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
    </ScreenContainer>
  );
};

export default PlanetsScreen;
