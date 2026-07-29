import { PlanetResponse } from '@/core/interfaces/responses/planet-response.interface';
import BaseDivider from '@/shared/components/ui/BaseDivider';
import BasePingDot from '@/shared/components/ui/BasePingDot';
import { Text, View } from 'react-native';

interface Props {
  planet: PlanetResponse;
}

const PlanetDetailInfo = ({ planet }: Props) => {
  const planetStatus = planet.isDestroyed ? 'Destruido' : 'Activo';
  const colorDot = planet.isDestroyed ? 'bg-error' : 'bg-success';

  return (
    <View className="flex-col my-10 gap-y-2">
      <View className="flex-row justify-between">
        <Text className="text-3xl  font-oswald-medium">{planet.name}</Text>
        <View className="flex-row items-center gap-x-2">
          <BasePingDot color={colorDot} />
          <Text className="uppercase text-xs font-dmsans-medium text-ink-secondary">
            {planetStatus}
          </Text>
        </View>
      </View>

      <BaseDivider customClass="w-10 bg-ink-primary" />

      <Text className="text-ink-terceary font-dmsans-regular text-base">
        {planet.description}
      </Text>
    </View>
  );
};

export default PlanetDetailInfo;
