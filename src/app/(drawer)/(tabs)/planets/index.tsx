import PlanetCard from '@/features/planets/components/PlanetCard';
import PlanetHeader from '@/features/planets/components/PlanetHeader';
import PlanetList from '@/features/planets/components/PlanetList';
import PlanetPaginationLoader from '@/features/planets/components/PlanetPaginationLoader';
import { usePlanets } from '@/features/planets/hooks/usePlanets';
import LoadingState from '@/shared/components/common/LoadingState';
import ScreenContainer from '@/shared/components/common/ScreenContainer';
import { View } from 'react-native';

const PlanetsScreen = () => {
  const { dragonBallPlanets, fetchNextPage, isLoading } = usePlanets();

  return (
    <ScreenContainer>
      <PlanetHeader />
      {isLoading ? (
        <LoadingState text="Cargando..." />
      ) : (
        <View className="flex-1">
          <PlanetList
            data={dragonBallPlanets}
            contentContainerClassName="pb-5"
            fetchNextPage={fetchNextPage}
            renderItem={({ item }) => (
              <PlanetCard
                image={item.image}
                name={item.name}
                isDestroyed={item.isDestroyed}
                description={item.description}
              />
            )}
          />

          <PlanetPaginationLoader />

          {/*{isFetchingNextPage && (
            <Animated.View
              entering={SlideInDown.duration(250)}
              exiting={SlideOutDown.duration(200)}
              className="absolute bottom-4 left-0 right-0 items-center"
            >
              <View className="bg-frame p-2 rounded-full">
                <ActivityIndicator className="text-ink-3" size={30} />
              </View>
            </Animated.View>
          )}*/}
        </View>
      )}
    </ScreenContainer>
  );
};

export default PlanetsScreen;
