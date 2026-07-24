import { Transformation } from '@/core/interfaces/responses/character-response.interface';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import BaseModal from '@/shared/components/ui/BaseModal';
import Lucide from '@react-native-vector-icons/lucide';
import { Image } from 'expo-image';
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

      <BaseModal size="half" visible={!!selected}>
        {selected && (
          <View className="w-full flex-col gap-y-4 relative">
            <View className="bg-primary-light">
              <Image
                contentPosition="top"
                source={{ uri: selected.image }}
                style={{ width: '100%', height: 250 }}
              />
            </View>
            <View className="px-5 gap-y-5">
              <View className="flex-col gap-y-2">
                <Text
                  className="uppercase text-primary text-sm font-dmsans-bold"
                  style={{ letterSpacing: 1 }}
                >
                  Transformación
                </Text>

                <Text className="text-2xl font-oswald-bold">
                  {selected.name}
                </Text>
              </View>

              <View className="bg-gray-200 flex-row items-center rounded-xl p-3 gap-x-3">
                <Lucide name="zap" size={18} className="text-primary" />
                <View className="flex-col">
                  <Text className="text-ink-3 font-dmsans-medium text-xs">
                    Ki
                  </Text>
                  <Text className="font-oswald-bold text-lg">
                    {selected.ki}
                  </Text>
                </View>
              </View>
            </View>

            <BaseButtonIcon
              onPress={() => setSelected(null)}
              size={20}
              icon="x"
              color="text-white"
              className="absolute bg-black/50 top-4 right-4 size-10 items-center justify-center rounded-full"
            />
          </View>
        )}
      </BaseModal>
    </View>
  );
};

export default CharacterTransformations;
