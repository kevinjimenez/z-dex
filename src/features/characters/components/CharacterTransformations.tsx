import { Transformation } from '@/core/interfaces/responses/character-response.interface';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import { FlatList, Text, View } from 'react-native';
import CharacterTransformationCard from './CharacterTransformationCard';

interface Props {
  transformations: Transformation[];
}

const CharacterTransformations = ({ transformations }: Props) => {
  return (
    <View className="mb-10">
      <View className="flex-row items-center gap-x-2 mb-4">
        <Text className="uppercase text-lg font-oswald-bold text-secondary">
          Transformaciones
        </Text>

        <BaseBadge text={String(transformations.length)} />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={transformations}
        keyExtractor={(item) => String(item.id)}
        ItemSeparatorComponent={() => <View className="w-4" />}
        renderItem={({ item }) => (
          <CharacterTransformationCard transformation={item} />
        )}
      />
    </View>
  );
};

export default CharacterTransformations;
