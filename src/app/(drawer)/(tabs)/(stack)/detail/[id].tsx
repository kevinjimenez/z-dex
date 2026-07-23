import CharacterHero from '@/features/characters/components/CharacterHero';
import CharacterInfoSection from '@/features/characters/components/CharacterInfoSection';
import CharacterInfoSectionSkeleton from '@/features/characters/components/CharacterInfoSectionSkeleton';
import CharacterTransformations from '@/features/characters/components/CharacterTransformations';
import CharacterTransformationsSkeleton from '@/features/characters/components/CharacterTransformationsSkeleton';
import { useCharacter } from '@/features/characters/hooks/useCharacters';
import BaseButton from '@/shared/components/ui/BaseButton';
import BaseSkeleton from '@/shared/components/ui/BaseSkeleton';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { StackActions } from 'expo-router/build/react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ComponentName = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { dragonBallCharacter, isLoading } = useCharacter(+id);
  const navigation = useNavigation();

  const showSkeleton = isLoading || !dragonBallCharacter;

  const goToBack = () => {
    navigation.dispatch(StackActions.pop());
  };

  const toggleFavorite = () => {};

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: top, paddingBottom: bottom }}
      className="bg-surface-page1 flex-1 px-8"
    >
      {showSkeleton ? (
        <View className="mb-4">
          <BaseSkeleton width="100%" height={360} />
        </View>
      ) : (
        <CharacterHero
          image={dragonBallCharacter.image}
          race={dragonBallCharacter.race}
          name={dragonBallCharacter.name}
          onBack={goToBack}
          onToggleFavorite={toggleFavorite}
        />
      )}

      {showSkeleton ? (
        <CharacterInfoSectionSkeleton />
      ) : (
        <CharacterInfoSection
          ki={dragonBallCharacter?.ki ?? ''}
          maxKi={dragonBallCharacter?.maxKi ?? ''}
          gender={dragonBallCharacter?.gender ?? ''}
          affiliation={dragonBallCharacter?.affiliation ?? ''}
          planet={
            dragonBallCharacter?.originPlanet ?? {
              deletedAt: null,
              description: '',
              id: 1,
              image: '',
              isDestroyed: false,
              name: '',
            }
          }
        />
      )}

      {showSkeleton ? (
        <CharacterTransformationsSkeleton />
      ) : (
        dragonBallCharacter.transformations.length > 0 && (
          <CharacterTransformations
            transformations={dragonBallCharacter.transformations}
          />
        )
      )}

      <View className="flex-1 gap-y-2">
        <Text className="uppercase text-lg font-oswald-bold">Biografía</Text>
        {showSkeleton ? (
          <BaseSkeleton width="100%" height={100} />
        ) : (
          <Text className="text-base text-pretty font-dmsans-regular">
            {dragonBallCharacter.description}
          </Text>
        )}
      </View>

      {!isLoading && (
        <BaseButton
          text="AGREGAR A FAVORITOS"
          prefixIcon="heart"
          className="my-8"
        />
      )}
    </ScrollView>
  );
};

export default ComponentName;
