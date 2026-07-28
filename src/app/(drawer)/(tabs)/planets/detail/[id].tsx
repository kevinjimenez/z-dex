import { usePlanetById } from '@/features/planets/hooks/usePlanets';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import BaseDivider from '@/shared/components/ui/BaseDivider';
import BasePingDot from '@/shared/components/ui/BasePingDot';
import BaseThumbnail from '@/shared/components/ui/BaseThumbnail';
import Lucide from '@react-native-vector-icons/lucide';
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
  const { top, bottom } = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const { dragonBallPlanet, isLoading } = usePlanetById(+id);

  const goToBack = () => {
    navigation.dispatch(StackActions.pop());
  };

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

          <View className="flex-col my-10 gap-y-2">
            <View className="flex-row justify-between">
              <Text className="text-3xl  font-oswald-medium">
                {dragonBallPlanet.name}
              </Text>
              <View className="flex-row items-center gap-x-2">
                <BasePingDot
                  color={
                    dragonBallPlanet.isDestroyed ? 'bg-error' : 'bg-success'
                  }
                />
                <Text className="uppercase text-xs font-dmsans-medium text-ink-secondary">
                  {dragonBallPlanet.isDestroyed ? 'Destruido' : 'Activo'}
                </Text>
              </View>
            </View>

            <BaseDivider customClass="w-10 bg-ink-primary" />

            <Text className="text-ink-terceary font-dmsans-regular text-base">
              {dragonBallPlanet.description}
            </Text>
          </View>

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
              <View className="flex-col">
                <View className="flex-row justify-between items-center">
                  <View className="flex-row gap-x-4">
                    <BaseThumbnail
                      image={item.image}
                      customClassContainer="rounded-full overflow-hidden"
                      width={70}
                      height={70}
                      contentFit="cover"
                      contentPosition="top"
                    />
                    <View className="justify-center gap-y-2">
                      <View className="flex-col">
                        <Text className="font-oswald-semibold text-lg text-ink-primary">
                          {item.name}
                        </Text>
                        <Text className="font-dmsans-medium text-xs text-ink-terceary">
                          {item.race}
                        </Text>
                      </View>
                      <View className="flex-row gap-x-2 flex-wrap">
                        <BaseBadge text={item.gender} />
                        <BaseBadge text={item.affiliation} />
                      </View>
                    </View>
                  </View>
                  <View className="flex-col items-end justify-center">
                    <Text className="font-dmsans-semibold text-base text-ink-primary">
                      {item.ki}
                    </Text>
                    <Text className="font-dmsans-medium text-xs text-ink-secondary">
                      de {item.maxKi}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </>
      )}
    </ScrollView>
  );
};

export default PlanetDetailScreen;
