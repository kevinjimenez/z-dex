import { Transformation } from '@/core/interfaces/responses/character-response.interface';
import TransformationDetailModal from '@/features/transformation/modals/TransformationDetailModal';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { CharacterTransformationsProps } from './interfaces/character-transformations.interface';
import TransformationCard from './TransformationCard';

const CharacterTransformations = ({
  transformations,
}: CharacterTransformationsProps) => {
  const [selected, setSelected] = useState<Transformation | null>(null);

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
          <TransformationCard
            transformation={item}
            onPress={() => setSelected(item)}
          />
        )}
      />

      <TransformationDetailModal
        selected={selected}
        onPress={() => setSelected(null)}
      />
    </View>
  );
};

export default CharacterTransformations;
