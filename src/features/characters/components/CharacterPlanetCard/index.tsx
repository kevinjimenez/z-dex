import LabelIcon from '@/shared/components/common/LabelIcon';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import { Text, View } from 'react-native';
import { CharacterPlanetCardProps } from './interfaces/character-planet-card.interface';
import PlanetPoster from './PlanetPoster';

const CharacterPlanetCard = ({
  image,
  name,
  isDestroyed,
}: CharacterPlanetCardProps) => {
  return (
    <View className="w-full h-28 rounded-xl overflow-hidden relative bg-black">
      <PlanetPoster image={image} contentFit="cover" />

      <View className="flex-col absolute bottom-3 left-3 gap-y-1">
        <LabelIcon
          customClassContainer="gap-x-1.5"
          prefixIcon="earth"
          text="Planeta de origen"
          color="text-white"
          customClassText="text-white text-xs font-dmsans-regular"
        />
        <View className="flex-row items-center gap-x-2">
          <Text className="text-white font-oswald-bold text-2xl">{name}</Text>
          <BaseBadge
            customClassBadge="bg-primary"
            customClassText="text-white font-dmsans-semibold"
            text={isDestroyed ? 'Destruido' : 'Activo'}
          />
        </View>
      </View>
    </View>
  );
};

export default CharacterPlanetCard;
