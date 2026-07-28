import { usePlanetById } from '@/features/planets/hooks/usePlanets';
import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import { Image } from 'expo-image';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { StackActions } from 'expo-router/build/react-navigation';
import {
  FlatList,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PlanetDetailScreen = () => {
  const { top } = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const { dragonBallPlanet, isLoading } = usePlanetById(+id);

  const goToBack = () => {
    navigation.dispatch(StackActions.pop());
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      className="flex-1 w-full bg-surface-secondary"
      contentContainerStyle={{
        paddingTop: top,
        paddingHorizontal: 25,
      }}
    >
      {isLoading || !dragonBallPlanet ? (
        <View>
          <Text>Carganding...</Text>
        </View>
      ) : (
        <>
          <View className="relative">
            <View
              style={{ height: height * 0.22 }}
              className="overflow-hidden rounded-3xl mt-[4.5rem]"
            >
              <Image
                source={{
                  uri: dragonBallPlanet.image,
                }}
                style={{ width: '100%', height: '100%' }}
                transition={1000}
              />
            </View>
            <BaseButtonIcon
              onPress={goToBack}
              icon="arrow-left"
              size={22}
              className="absolute p-2.5 bg-surface-terceary border border-surface-terceary rounded-full"
            />
          </View>
          <View>
            <Text>{dragonBallPlanet.name}</Text>
            <Text>{dragonBallPlanet.isDestroyed ? 'Si' : 'No'}</Text>
          </View>

          <FlatList
            scrollEnabled={false}
            data={dragonBallPlanet.characters}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <View>
                <Text>{item.name}</Text>
              </View>
            )}
          />
        </>
      )}
    </ScrollView>
  );
};

export default PlanetDetailScreen;
