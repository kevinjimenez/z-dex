import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import { View } from 'react-native';
import CharacterPoster from '../CharacterPoster';
import { CharacterHeroProps } from './interfaces/character-hero.interface';

const CharacterHero = ({
  character,
  isFavorite,
  onBack,
  onToggleFavorite,
}: CharacterHeroProps) => {
  return (
    <View className="relative mb-4">
      <CharacterPoster character={character} />
      <BaseButtonIcon
        className="size-12 justify-center items-center bg-white rounded-full border-2 border-surface-terceary absolute top-2 left-0 z-10"
        icon="arrow-left"
        size={20}
        onPress={onBack}
      />
      <BaseButtonIcon
        className="size-12 justify-center items-center bg-white rounded-full border-2 border-surface-terceary absolute top-2 right-0 z-10"
        icon="heart"
        size={20}
        filled={isFavorite}
        color={isFavorite ? 'text-error' : 'text-surface-terceary'}
        onPress={onToggleFavorite}
      />
    </View>
  );
};

export default CharacterHero;
