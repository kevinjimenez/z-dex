import CharacterDetailSkeleton from '@/features/characters/components/CharacterDetailSkeleton';
import CharacterHero from '@/features/characters/components/CharacterHero';
import CharacterInfoSection from '@/features/characters/components/CharacterInfoSection';
import CharacterTransformations from '@/features/characters/components/CharacterTransformations';
import { useCharacterById } from '@/features/characters/hooks/useCharacters';
import { useFavoriteStore } from '@/features/favorites/store/useFavorite';
import BaseButton from '@/shared/components/ui/BaseButton';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { StackActions } from 'expo-router/build/react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ComponentName = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { dragonBallCharacter, transformations, isLoading } =
    useCharacterById(+id);
  const { toggleFavorite } = useFavoriteStore();
  const isFavorite = useFavoriteStore((state) => state.isFavorite(+id));
  const navigation = useNavigation();

  const goToBack = () => {
    navigation.dispatch(StackActions.pop());
  };

  // const toggleFavorite = () => {};

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: top, paddingBottom: bottom }}
      className="bg-surface-page1 flex-1 px-8"
    >
      {isLoading || !dragonBallCharacter ? (
        <CharacterDetailSkeleton />
      ) : (
        <>
          <CharacterHero
            image={dragonBallCharacter.image}
            race={dragonBallCharacter.race}
            name={dragonBallCharacter.name}
            isFavorite={isFavorite}
            onBack={goToBack}
            onToggleFavorite={() => toggleFavorite(dragonBallCharacter)}
          />

          <CharacterInfoSection
            ki={dragonBallCharacter.ki}
            maxKi={dragonBallCharacter.maxKi}
            gender={dragonBallCharacter.gender}
            affiliation={dragonBallCharacter.affiliation}
            planet={dragonBallCharacter.originPlanet}
          />

          {transformations.length > 0 && (
            <CharacterTransformations transformations={transformations} />
          )}

          <View className="flex-1 gap-y-2">
            <Text className="uppercase text-lg font-oswald-bold">
              Biografía
            </Text>
            <Text className="text-base text-pretty font-dmsans-regular">
              {dragonBallCharacter.description}
            </Text>
          </View>

          <BaseButton
            text="AGREGAR A FAVORITOS"
            prefixIcon="heart"
            className="my-8"
          />
        </>
      )}
    </ScrollView>
  );
};

export default ComponentName;
