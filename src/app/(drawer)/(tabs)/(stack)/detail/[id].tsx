import CharacterPoster from '@/features/characters/components/CharacterPoster';
import OriginPlanetCard from '@/features/characters/components/OriginPlanetCard';
import { useCharacter } from '@/features/characters/hooks/useCharacters';
import LabelIcon from '@/shared/components/LabelIcon';
import StatCard from '@/shared/components/StatCard';
import BaseBadge from '@/shared/ui/BaseBadge';
import BaseButton from '@/shared/ui/BaseButton';
import BaseButtonIcon from '@/shared/ui/BaseButtonIcon';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { StackActions } from 'expo-router/build/react-navigation';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ComponentName = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { dragonBallCharacter } = useCharacter(+id);

  const goto = () => {
    navigation.dispatch(StackActions.pop());
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ paddingTop: top }}
      className="bg-surface-page1 flex-1 px-8"
    >
      <View className="relative">
        <CharacterPoster
          image={dragonBallCharacter.data?.image ?? ''}
          race={dragonBallCharacter.data?.race ?? ''}
          name={dragonBallCharacter.data?.name ?? ''}
        />
        <BaseButtonIcon
          className="size-11 justify-center items-center bg-white rounded-full border border-gray-300 absolute top-2 left-0 z-10"
          icon="arrow-left"
          size={20}
          onPress={goto}
        />
        <BaseButtonIcon
          className="size-11 justify-center items-center bg-white rounded-full border border-gray-300 absolute top-2 right-0 z-10"
          icon="heart"
          size={20}
        />
      </View>

      <View className="flex-col gap-y-3">
        <View className="flex-row flex-wrap gap-x-3">
          <StatCard
            classValueContainer="gap-y-2"
            title="Ki base"
            text={dragonBallCharacter.data?.ki ?? ''}
          />

          <StatCard
            classValueContainer="gap-y-2"
            title="Ki máximo"
            text={dragonBallCharacter.data?.maxKi ?? ''}
          />
        </View>

        <View className="flex-row flex-wrap gap-2">
          <StatCard
            title="Género"
            text={dragonBallCharacter.data?.gender ?? ''}
            suffixIcon="users"
            classContainer="flex-row items-center gap-x-3"
            classTitle="text-xs font-dmsans-regular capitalize"
            classText="font-dmsans-semibold text-lg text-black"
          />

          <StatCard
            title="Afiliación"
            text={dragonBallCharacter.data?.affiliation ?? ''}
            suffixIcon="hand-fist"
            classContainer="flex-row items-center gap-x-3"
            classTitle="text-xs font-dmsans-regular capitalize"
            classText="font-dmsans-semibold text-lg text-black"
          />
        </View>

        <OriginPlanetCard
          image={dragonBallCharacter.data?.originPlanet.image ?? ''}
          name={dragonBallCharacter.data?.originPlanet.name ?? ''}
          isDestroyed={
            dragonBallCharacter.data?.originPlanet.isDestroyed ?? false
          }
        />
      </View>

      {/*otro componente*/}
      {(dragonBallCharacter.data?.transformations ?? []).length > 0 && (
        <View>
          <View className="flex-row items-center gap-x-2 my-2">
            <Text className="uppercase text-lg font-oswald-bold text-secondary">
              Transformaciones
            </Text>

            <BaseBadge
              text={String(dragonBallCharacter.data?.transformations.length)}
            />
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dragonBallCharacter.data?.transformations}
            keyExtractor={(item) => String(item.id)}
            ItemSeparatorComponent={() => <View className="w-4" />}
            renderItem={({ item }) => (
              <View className="flex-col gap-y-2">
                <View className="rounded-xl bg-primary overflow-hidden relative">
                  <Image
                    contentFit="cover"
                    contentPosition="top"
                    transition={1000}
                    className="rounded-xl"
                    source={{ uri: item.image }}
                    style={{ width: 100, height: 120 }}
                  />
                  <LinearGradient
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.4)']}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 50,
                    }}
                  />
                </View>
                <View className="flex-col w-28">
                  <Text className="font-dmsans-bold text-xs" numberOfLines={1}>
                    {item.name}
                  </Text>
                  <LabelIcon
                    text={item.ki}
                    customClassText="text-xs font-dmsans-bold text-primary"
                    prefixIcon="zap"
                    color="text-primary"
                  />
                </View>
              </View>
            )}
          />
        </View>
      )}

      <View className="flex-1 gap-y-2 mt-8">
        <Text className="uppercase text-lg font-oswald-bold">Biografía</Text>
        <Text className="text-base text-pretty font-dmsans-regular">
          {dragonBallCharacter.data?.description}
        </Text>
      </View>

      <BaseButton
        text="AGREGAR A FAVORITOS"
        prefixIcon="heart"
        className="my-8"
      />
    </ScrollView>
  );
};

export default ComponentName;
