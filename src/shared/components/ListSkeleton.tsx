import { FlatList, ListRenderItem, View } from 'react-native';

interface Props {
  length: number;
  showScrollIndicator?: boolean;
  renderItem: ListRenderItem<unknown>;
}

const ListSkeleton = ({
  length,
  showScrollIndicator = false,
  renderItem,
}: Props) => {
  const array = Array.from({ length });

  return (
    <FlatList
      data={array}
      showsVerticalScrollIndicator={showScrollIndicator}
      keyExtractor={(_, index) => String(index)}
      ItemSeparatorComponent={() => <View className="h-4" />}
      renderItem={renderItem}
    />
  );
};

export default ListSkeleton;
