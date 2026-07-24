import { ActivityIndicator, View } from 'react-native';
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';
import { usePlanets } from '../../hooks/usePlanets';

const PlanetPaginationLoader = () => {
  const { isFetchingNextPage } = usePlanets(); // mismo queryKey → mismo cache, no refetch
  if (!isFetchingNextPage) return null;

  return (
    <Animated.View
      entering={SlideInDown.duration(250)}
      exiting={SlideOutDown.duration(200)}
      className="absolute bottom-4 left-0 right-0 items-center"
    >
      <View className="bg-frame p-2 rounded-full">
        <ActivityIndicator className="text-ink-3" size={30} />
      </View>
    </Animated.View>
  );
};

export default PlanetPaginationLoader;
