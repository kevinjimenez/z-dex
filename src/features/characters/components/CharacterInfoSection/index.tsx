import StatCard from '@/shared/components/common/StatCard';
import { View } from 'react-native';
import CharacterPlanetCard from '../CharacterPlanetCard';
import { CharacterInfoSectionProps } from './interfaces/character-info-section.interface';

const CharacterInfoSection = ({ character }: CharacterInfoSectionProps) => {
  return (
    <View className="flex-col gap-y-3 mb-8">
      <View className="mb-2 gap-y-3">
        <View className="flex-row flex-wrap gap-x-3">
          <StatCard
            classValueContainer="gap-y-2"
            title="Ki base"
            text={character.ki}
          />

          <StatCard
            classValueContainer="gap-y-2"
            title="Ki máximo"
            text={character.maxKi}
          />
        </View>

        <View className="flex-row flex-wrap gap-x-2">
          <StatCard
            title="Género"
            text={character.gender}
            suffixIcon="people"
            size={20}
            color="text-ink-secondary"
            filled
            classContainer="flex-row items-center gap-x-3"
            classTitle="text-sm font-dmsans-regular capitalize"
            classText="font-dmsans-semibold text-lg text-ink-primary"
          />

          <StatCard
            title="Afiliación"
            text={character.affiliation}
            suffixIcon="hand-fist"
            size={20}
            color="text-ink-secondary"
            classContainer="flex-row items-center gap-x-3"
            classTitle="text-sm font-dmsans-regular capitalize"
            classText="font-dmsans-semibold text-lg text-ink-primary"
          />
        </View>
      </View>

      <CharacterPlanetCard planet={character.originPlanet} />
    </View>
  );
};

export default CharacterInfoSection;
