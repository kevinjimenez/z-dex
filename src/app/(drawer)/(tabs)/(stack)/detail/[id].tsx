import CharacterHero from '@/features/characters/components/CharacterHero';
import CharacterPlanetCard from '@/features/characters/components/CharacterPlanetCard';
import CharacterTransformations from '@/features/characters/components/CharacterTransformations';
import { useCharacter } from '@/features/characters/hooks/useCharacters';
import StatCard from '@/shared/components/StatCard';
import BaseButton from '@/shared/ui/BaseButton';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { StackActions } from 'expo-router/build/react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ComponentName = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { dragonBallCharacter } = useCharacter(+id);

  const goToBack = () => {
    navigation.dispatch(StackActions.pop());
  };

  const toggleFavorite = () => {};

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ paddingTop: top }}
      className="bg-surface-page1 flex-1 px-8"
    >
      <CharacterHero
        image={dragonBallCharacter.data?.image ?? ''}
        race={dragonBallCharacter.data?.race ?? ''}
        name={dragonBallCharacter.data?.name ?? ''}
        onBack={goToBack}
        onToggleFavorite={toggleFavorite}
      />

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

        <CharacterPlanetCard
          image={dragonBallCharacter.data?.originPlanet.image ?? ''}
          name={dragonBallCharacter.data?.originPlanet.name ?? ''}
          isDestroyed={
            dragonBallCharacter.data?.originPlanet.isDestroyed ?? false
          }
        />
      </View>

      {(dragonBallCharacter.data?.transformations ?? []).length > 0 && (
        <CharacterTransformations
          transformations={dragonBallCharacter.data?.transformations ?? []}
        />
      )}

      <View className="flex-1 gap-y-2">
        <Text className="uppercase text-lg font-oswald-bold">Biografía</Text>
        <Text className="text-base text-pretty font-dmsans-regular">
          {dragonBallCharacter.data?.description}
        </Text>
      </View>

      <BaseButton
        text="AGREGAR A FAVORITOS"
        prefixIcon="heart"
        // className="my-8"
      />
    </ScrollView>
  );
};

export default ComponentName;
