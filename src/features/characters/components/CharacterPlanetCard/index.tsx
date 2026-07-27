import LabelIcon from '@/shared/components/common/LabelIcon';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import { Text, View } from 'react-native';
import { CharacterPlanetCardProps } from './interfaces/character-planet-card.interface';
import PlanetPoster from './PlanetPoster';

const CharacterPlanetCard = ({ planet }: CharacterPlanetCardProps) => {
  return (
    <View className="w-full h-32 rounded-xl overflow-hidden relative bg-black">
      <PlanetPoster image={planet.image} contentFit="cover" />

      <View className="flex-col absolute bottom-3 left-3 gap-y-1">
        <LabelIcon
          customClassContainer="gap-x-1.5"
          prefixIcon="earth"
          filled
          size={20}
          text="Planeta de origen"
          color="text-white"
          customClassText="text-white text-sm font-dmsans-regular"
        />
        <View className="flex-row items-center gap-x-2">
          <Text className="text-white font-oswald-medium text-3xl">
            {planet.name}
          </Text>
          <BaseBadge
            customClassBadge={planet.isDestroyed ? 'bg-error' : 'bg-success'}
            customClassText="text-white font-dmsans-semibold"
            text={planet.isDestroyed ? 'Destruido' : 'Activo'}
          />
        </View>
      </View>
    </View>
  );
};

export default CharacterPlanetCard;
