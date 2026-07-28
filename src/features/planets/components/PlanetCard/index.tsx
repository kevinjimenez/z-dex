import LabelIcon from '@/shared/components/common/LabelIcon';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { PlanetCardProps } from './interfaces/planet-card.interface';

const PlanetCard = ({ planet }: PlanetCardProps) => {
  const goToDetail = () => {
    router.push(`/planets/detail/${planet.id}`);
  };

  const statusPlanet = planet.isDestroyed ? 'Destruido' : 'Activo';

  return (
    <Pressable
      className="bg-surface-secondary rounded-xl overflow-hidden border border-surface-terceary"
      onPress={goToDetail}
    >
      <Image
        source={{ uri: planet.image }}
        contentPosition="center"
        style={{ width: '100%', height: 140 }}
      />
      <View className="flex-col px-5 py-4 gap-y-4">
        <View className="flex-row justify-between items-center">
          <LabelIcon
            text={planet.name}
            filled
            prefixIcon="earth"
            customClassText="text-2xl font-oswald-semibold"
            customClassContainer="gap-x-3"
            size={28}
            color="text-primary"
          />
          <BaseBadge
            text={statusPlanet}
            customClassText="text-xs text-white font-dmsans-bold"
            customClassBadge={planet.isDestroyed ? 'bg-error' : 'bg-success'}
          />
        </View>

        <Text className="text-pretty font-dmsans-medium text-ink-terceary">
          {planet.description}
        </Text>
      </View>
    </Pressable>
  );
};

export default PlanetCard;
