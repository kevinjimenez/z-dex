import { usePlanets } from '@/features/planets/hooks/usePlanets';
import CustomDrawerMenuButton from '@/shared/components/common/CustomDrawerMenuButton';
import LabelIcon from '@/shared/components/common/LabelIcon';
import ScreenContainer from '@/shared/components/common/ScreenContainer';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import { Image } from 'expo-image';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';

const PlanetsScreen = () => {
  const { dragonBallPlanets, fetchNextPage, isLoading, isFetchingNextPage } =
    usePlanets();

  return (
    <ScreenContainer className="pb-10">
      <View className="mb-6 flex-row gap-x-4 items-center">
        <CustomDrawerMenuButton />
        <View className="flex-col gap-y-2">
          <Text className="font-oswald-bold text-3xl">Planetas</Text>
          <Text className="font-dmsans-medium text-sm text-ink-3">
            Explorá los planetas del universo Z
          </Text>
        </View>
      </View>
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <View className="flex-col items-center justify-center gap-y-4">
            <ActivityIndicator size={65} className="text-ink-3" />
            <Text className="font-dmsans-semibold text-ink-3">Cargando...</Text>
          </View>
        </View>
      ) : (
        <View className="flex-1">
          <FlatList
            data={dragonBallPlanets}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.6}
            onEndReached={() => fetchNextPage()}
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
                  <View className="flex-row justify-between items-center">
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

          {isFetchingNextPage && (
            <Animated.View
              entering={SlideInDown.duration(250)}
              exiting={SlideOutDown.duration(200)}
              className="absolute bottom-4 left-0 right-0 items-center"
            >
              <View className="bg-frame p-2 rounded-full">
                <ActivityIndicator className="text-ink-3" size={30} />
              </View>
            </Animated.View>
          )}
        </View>
      )}
    </ScreenContainer>
  );
};

export default PlanetsScreen;
