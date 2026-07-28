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

const CharacterDetailScreen = () => {
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
      className="bg-surface-secondary flex-1 px-8"
    >
      {isLoading || !dragonBallCharacter ? (
        <CharacterDetailSkeleton />
      ) : (
        <>
          <CharacterHero
            character={dragonBallCharacter}
            isFavorite={isFavorite}
            onBack={goToBack}
            onToggleFavorite={() => toggleFavorite(dragonBallCharacter)}
          />

          <CharacterInfoSection character={dragonBallCharacter} />

          {transformations.length > 0 && (
            <CharacterTransformations transformations={transformations} />
          )}

          <View className="flex-1 gap-y-2">
            <Text className="uppercase text-xl font-oswald-medium text-ink-terceary">
              Biografía
            </Text>
            <Text className="text-base text-pretty font-dmsans-regular text-ink-terceary">
              {dragonBallCharacter.description}
            </Text>
          </View>

          <BaseButton
            text={isFavorite ? 'EN FAVORITOS' : 'AGREGAR A FAVORITOS'}
            prefixIcon="heart"
            className="my-8"
            onPress={() => toggleFavorite(dragonBallCharacter)}
          />
        </>
      )}
    </ScrollView>
  );
};

export default CharacterDetailScreen;
