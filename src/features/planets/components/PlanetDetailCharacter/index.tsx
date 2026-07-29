import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import BaseThumbnail from '@/shared/components/ui/BaseThumbnail';
import { Text, View } from 'react-native';

interface Props {
  character: Omit<CharacterResponse, 'originPlanet' | 'transformations'>;
}

const PlanetDetailCharacter = ({ character }: Props) => {
  return (
    <View className="flex-col">
      <View className="flex-row justify-between items-center">
        <View className="flex-row gap-x-4">
          <BaseThumbnail
            image={character.image}
            customClassContainer="rounded-full overflow-hidden"
            width={70}
            height={70}
            contentFit="cover"
            contentPosition="top"
          />
          <View className="justify-center gap-y-2">
            <View className="flex-col">
              <Text className="font-oswald-semibold text-lg text-ink-primary">
                {character.name}
              </Text>
              <Text className="font-dmsans-medium text-xs text-ink-terceary">
                {character.race}
              </Text>
            </View>
            <View className="flex-row gap-x-2 flex-wrap">
              <BaseBadge text={character.gender} />
              <BaseBadge text={character.affiliation} />
            </View>
          </View>
        </View>
        <View className="flex-col items-end justify-center">
          <Text className="font-dmsans-semibold text-base text-ink-primary">
            {character.ki}
          </Text>
          <Text className="font-dmsans-medium text-xs text-ink-secondary">
            de {character.maxKi}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PlanetDetailCharacter;
