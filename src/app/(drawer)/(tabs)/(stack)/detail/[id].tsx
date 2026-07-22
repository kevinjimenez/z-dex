import CharacterHero from '@/features/characters/components/CharacterHero';
import CharacterInfoSection from '@/features/characters/components/CharacterInfoSection';
import CharacterTransformations from '@/features/characters/components/CharacterTransformations';
import { useCharacter } from '@/features/characters/hooks/useCharacters';
import BaseButton from '@/shared/ui/BaseButton';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { StackActions } from 'expo-router/build/react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ComponentName = () => {
  const { top, bottom } = useSafeAreaInsets();
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
      contentContainerStyle={{ paddingTop: top, paddingBottom: bottom }}
      className="bg-surface-page1 flex-1 px-8"
    >
      <CharacterHero
        image={dragonBallCharacter.data?.image ?? ''}
        race={dragonBallCharacter.data?.race ?? ''}
        name={dragonBallCharacter.data?.name ?? ''}
        onBack={goToBack}
        onToggleFavorite={toggleFavorite}
      />

      <CharacterInfoSection
        ki={dragonBallCharacter.data?.ki ?? ''}
        maxKi={dragonBallCharacter.data?.maxKi ?? ''}
        gender={dragonBallCharacter.data?.gender ?? ''}
        affiliation={dragonBallCharacter.data?.affiliation ?? ''}
        planet={
          dragonBallCharacter.data?.originPlanet ?? {
            deletedAt: null,
            description: '',
            id: 1,
            image: '',
            isDestroyed: false,
            name: '',
          }
        }
      />

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
        className="my-8"
      />
    </ScrollView>
  );
};

export default ComponentName;
