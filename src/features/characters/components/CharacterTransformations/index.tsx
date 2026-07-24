import { Transformation } from '@/core/interfaces/responses/character-response.interface';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import BaseModal from '@/shared/components/ui/BaseModal';
import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { CharacterTransformationsProps } from './interfaces/character-transformations.interface';
import TransformationAvatar from './TransformationAvatar';
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

      <BaseModal visible={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <>
            <TransformationAvatar
              contentFit="cover"
              contentPosition="top"
              customClassImage="rounded-xl"
              image={selected.image}
              width={160}
              height={180}
            />
            <Text className="font-oswald-bold text-lg text-center">
              {selected.name}
            </Text>
            <Text className="font-dmsans-bold text-primary">
              Ki: {selected.ki}
            </Text>
          </>
        )}
      </BaseModal>
    </View>
  );
};

export default CharacterTransformations;
