import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import { View } from 'react-native';
import CharacterPoster from './CharacterPoster';

interface Props {
  image: string;
  race: string;
  name: string;
  onBack: () => void;
  onToggleFavorite: () => void;
}

const CharacterHero = ({
  image,
  race,
  name,
  onBack,
  onToggleFavorite,
}: Props) => {
  return (
    <View className="relative mb-4">
      <CharacterPoster image={image} race={race} name={name} />
      <BaseButtonIcon
        className="size-11 justify-center items-center bg-white rounded-full border border-gray-300 absolute top-2 left-0 z-10 shadow-lg shadow-primary/50"
        icon="arrow-left"
        size={20}
        onPress={onBack}
      />
      <BaseButtonIcon
        className="size-11 justify-center items-center bg-white rounded-full border border-gray-300 absolute top-2 right-0 z-10 shadow-lg shadow-primary/50"
        icon="heart"
        size={20}
        onPress={onToggleFavorite}
      />
    </View>
  );
};

export default CharacterHero;
