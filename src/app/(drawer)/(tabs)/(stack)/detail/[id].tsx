import { useCharacter } from '@/features/characters/hooks/useCharacters';
import LabelIcon from '@/shared/components/LabelIcon';
import BaseBadge from '@/shared/ui/BaseBadge';
import BaseButton from '@/shared/ui/BaseButton';
import BaseButtonIcon from '@/shared/ui/BaseButtonIcon';
import Lucide from '@react-native-vector-icons/lucide';
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
      <View className="relative mb-10">
        <View className="rounded-lg bg-white w-full justify-center items-center">
          <Image
            contentFit="contain"
            transition={1000}
            source={{ uri: dragonBallCharacter.data?.image }}
            style={{ width: '100%', height: 360 }}
          />
        </View>
        <BaseButtonIcon
          icon="arrow-left"
          size={20}
          className="size-11 justify-center items-center bg-white rounded-full border border-gray-300 absolute top-2 left-0 z-10"
          onPress={goto}
        />
        <BaseButtonIcon
          icon="heart"
          size={20}
          className="size-11 justify-center items-center bg-white rounded-full border border-gray-300 absolute top-2 right-0 z-10"
        />

        <View className="flex-col gap-y-1 absolute bottom-0 z-10">
          <Text className="text-primary uppercase font-dmsans-bold text-xs">
            {dragonBallCharacter.data?.race}
          </Text>
          <Text
            className="font-oswald-bold text-5xl"
            style={{ lineHeight: 56 }}
          >
            {dragonBallCharacter.data?.name}
          </Text>
        </View>

        <LinearGradient
          colors={['rgba(251,243,233,0)', 'rgba(251,243,233,0.6)', '#FBF3E9']}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 128,
          }}
        />

        <LinearGradient
          colors={['#FBF3E9', 'rgba(251,243,233,0.6)', 'rgba(251,243,233,0)']}
          style={{
            position: 'absolute',
            // bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            height: 12,
          }}
        />

        <LinearGradient
          colors={['#FBF3E9', 'rgba(251,243,233,0.6)', 'rgba(251,243,233,0)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: 128,
          }}
        />

        <LinearGradient
          colors={['#FBF3E9', 'rgba(251,243,233,0.6)', 'rgba(251,243,233,0)']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: 128,
          }}
        />
      </View>

      <View className="flex-col gap-y-3">
        <View className="flex-row flex-wrap gap-x-3">
          <View className="flex-1 bg-white rounded-xl border border-gray-200 p-4">
            <Text className="uppercase text-xs font-dmsans-regular">
              Ki base
            </Text>
            <Text className="text-primary text-2xl font-oswald-bold">
              {dragonBallCharacter.data?.ki}
            </Text>
          </View>
          <View className="flex-1 bg-white rounded-xl border border-gray-200 p-4">
            <Text className="uppercase text-xs font-dmsans-regular">
              Ki máximo
            </Text>
            <Text
              className="text-primary text-2xl font-oswald-bold"
              numberOfLines={2}
            >
              {dragonBallCharacter.data?.maxKi}
            </Text>
          </View>
        </View>

        <View className="flex-row flex-wrap gap-2">
          <View className="flex-1 bg-white rounded-xl border border-gray-200 p-4 flex-row items-center gap-x-3">
            <Lucide name="users" size={16} />
            <View className="flex-col">
              <Text className="text-xs font-dmsans-regular">Género</Text>
              <Text className="font-dmsans-semibold">
                {dragonBallCharacter.data?.gender}
              </Text>
            </View>
          </View>
          <View className="flex-1 bg-white rounded-xl border border-gray-200 p-4 flex-row items-center gap-x-3">
            <Lucide name="hand-fist" size={16} />
            <View className="flex-col">
              <Text className="text-xs font-dmsans-regular">Afiliación</Text>
              <Text className="font-dmsans-semibold">
                {dragonBallCharacter.data?.affiliation}
              </Text>
            </View>
          </View>
        </View>

        <View className="w-full h-28 rounded-xl overflow-hidden relative bg-black">
          <Image
            contentFit="cover"
            source={{ uri: dragonBallCharacter.data?.originPlanet.image }}
            style={{ width: '100%', height: '100%' }}
          />

          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.75)']}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 70,
            }}
          />

          <View className="flex-col absolute bottom-3 left-3 gap-y-1">
            <LabelIcon
              customClassContainer="gap-x-1.5"
              prefixIcon="earth"
              text="Planeta de origen"
              color="text-white"
              customClassText="text-white text-xs font-dmsans-regular"
            />
            <View className="flex-row items-center gap-x-2">
              <Text className="text-white font-oswald-bold text-2xl">
                {dragonBallCharacter.data?.originPlanet.name}
              </Text>
              <BaseBadge
                customClassBadge="bg-primary"
                customClassText="text-white font-dmsans-semibold"
                text={
                  dragonBallCharacter.data?.originPlanet.isDestroyed
                    ? 'Destruido'
                    : 'Activo'
                }
              />
            </View>
          </View>
        </View>
      </View>

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
