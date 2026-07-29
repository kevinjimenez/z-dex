import PlanetDetailCharacter from '@/features/planets/components/PlanetDetailCharacter';
import PlanetDetailInfo from '@/features/planets/components/PlanetDetailInfo';
import PlanetDetailPoster from '@/features/planets/components/PlanetDetailPoster';
import { usePlanetById } from '@/features/planets/hooks/usePlanets';
import LoadingState from '@/shared/components/common/LoadingState';
import BaseDivider from '@/shared/components/ui/BaseDivider';
import Lucide from '@react-native-vector-icons/lucide';
import { useLocalSearchParams } from 'expo-router';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PlanetDetailScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { dragonBallPlanet, isLoading } = usePlanetById(+id);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 w-full bg-surface-secondary"
      contentContainerStyle={{
        paddingTop: top,
        paddingHorizontal: 25,
        paddingBottom: bottom + 40,
      }}
    >
      {isLoading || !dragonBallPlanet ? (
        <LoadingState text="Cargando..." />
      ) : (
        <>
          <PlanetDetailPoster image={dragonBallPlanet.image} />

          <PlanetDetailInfo planet={dragonBallPlanet} />

          <Text
            className="uppercase text-ink-terceary font-oswald-semibold text-lg mb-5"
            style={{ letterSpacing: 1 }}
          >
            Personajes
          </Text>

          <FlatList
            scrollEnabled={false}
            data={dragonBallPlanet.characters}
            keyExtractor={(item) => String(item.id)}
            ItemSeparatorComponent={() => (
              <View className="h-8 items-center justify-center">
                <BaseDivider customClass="bg-muted-primary/30" />
              </View>
            )}
            ListEmptyComponent={() => (
              <View className="justify-center items-center flex-col gap-y-4 mt-8">
                <Lucide
                  name="zap-off"
                  size={30}
                  className="text-ink-secondary"
                />
                <Text className="font-dmsans-regular text-sm text-ink-secondary">
                  Sin personajes registrados en este planeta
                </Text>
              </View>
            )}
            renderItem={({ item }) => (
              <PlanetDetailCharacter character={item} />
            )}
          />
        </>
      )}
    </ScrollView>
  );
};

export default PlanetDetailScreen;
