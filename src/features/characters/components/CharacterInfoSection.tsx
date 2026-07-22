import { OriginPlanet } from '@/core/interfaces/responses/character-response.interface';
import StatCard from '@/shared/components/StatCard';
import { View } from 'react-native';
import CharacterPlanetCard from './CharacterPlanetCard';

interface Props {
  ki: string;
  maxKi: string;
  gender: string;
  affiliation: string;
  planet: OriginPlanet;
}

const CharacterInfoSection = ({
  ki,
  maxKi,
  gender,
  affiliation,
  planet,
}: Props) => {
  return (
    <View className="flex-col gap-y-3 mb-8">
      <View className="mb-2 gap-y-3">
        <View className="flex-row flex-wrap gap-x-3">
          <StatCard classValueContainer="gap-y-2" title="Ki base" text={ki} />

          <StatCard
            classValueContainer="gap-y-2"
            title="Ki máximo"
            text={maxKi}
          />
        </View>

        <View className="flex-row flex-wrap gap-x-2">
          <StatCard
            title="Género"
            text={gender}
            suffixIcon="users"
            classContainer="flex-row items-center gap-x-3"
            classTitle="text-xs font-dmsans-regular capitalize"
            classText="font-dmsans-semibold text-lg text-black"
          />

          <StatCard
            title="Afiliación"
            text={affiliation}
            suffixIcon="hand-fist"
            classContainer="flex-row items-center gap-x-3"
            classTitle="text-xs font-dmsans-regular capitalize"
            classText="font-dmsans-semibold text-lg text-black"
          />
        </View>
      </View>

      <CharacterPlanetCard
        image={planet.image}
        name={planet.name}
        isDestroyed={planet.isDestroyed}
      />
    </View>
  );
};

export default CharacterInfoSection;
