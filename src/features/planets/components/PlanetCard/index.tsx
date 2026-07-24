import LabelIcon from '@/shared/components/common/LabelIcon';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import { PlanetCardProps } from './interfaces/planet-card.interface';

const PlanetCard = ({
  image,
  name,
  description,
  isDestroyed,
}: PlanetCardProps) => {
  const statusPlanet = isDestroyed ? 'Destruido' : 'Activo';

  return (
    <View className="bg-white rounded-xl overflow-hidden border border-secondary/20">
      <Image
        source={{ uri: image }}
        contentPosition="center"
        style={{ width: '100%', height: 140 }}
      />
      <View className="flex-col px-5 py-4 gap-y-4">
        <View className="flex-row justify-between items-center">
          <LabelIcon
            text={name}
            prefixIcon="earth"
            customClassText="text-xl font-oswald-bold"
            customClassContainer="gap-x-3"
            size={20}
            color="text-primary"
          />
          <BaseBadge
            text={statusPlanet}
            customClassText="text-xs text-white font-dmsans-bold"
            customClassBadge="bg-primary"
          />
        </View>

        <Text className="text-pretty font-dmsans-medium text-ink-3">
          {description}
        </Text>
      </View>
    </View>
  );
};

export default PlanetCard;
