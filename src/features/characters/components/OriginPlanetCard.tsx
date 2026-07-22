import { Text, View } from 'react-native';
import OriginPlanetPoster from './OriginPlanetPoster';
import LabelIcon from '@/shared/components/LabelIcon';
import BaseBadge from '@/shared/ui/BaseBadge';

interface Props {
  image: string;
  name: string;
  isDestroyed: boolean;
}

const OriginPlanetCard = ({ image, name, isDestroyed }: Props) => {
  return (
    <View className="w-full h-28 rounded-xl overflow-hidden relative bg-black">
      <OriginPlanetPoster image={image} contentFit="cover" />

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

export default OriginPlanetCard;
