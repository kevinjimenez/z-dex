import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import { View } from 'react-native';
import CharacterPoster from '../CharacterPoster';
import { CharacterHeroProps } from './interfaces/character-hero.interface';

const CharacterHero = ({
  image,
  race,
  name,
  isFavorite,
  onBack,
  onToggleFavorite,
}: CharacterHeroProps) => {
  return (
    <View className="relative mb-4">
      <CharacterPoster image={image} race={race} name={name} />
      <BaseButtonIcon
        className="size-11 justify-center items-center bg-white rounded-full border border-gray-300 absolute top-2 left-0 z-10 shadow-lg shadow-primary/50 elevation-lg"
        icon="arrow-left"
        size={20}
        onPress={onBack}
        // style={{ elevation: 8, shadowColor: '#FF6A1A' }}
      />
      <BaseButtonIcon
        className="size-11 justify-center items-center bg-white rounded-full border border-gray-300 absolute top-2 right-0 z-10 shadow-lg shadow-primary/50 elevation-lg"
        icon="heart"
        size={20}
        color={isFavorite ? 'text-red-500' : 'text-secondary'}
        onPress={onToggleFavorite}
        // style={{ elevation: 100, shadowColor: '#FF6A1A' }}
      />
    </View>
  );
};

export default CharacterHero;
