import { FlatList, View } from 'react-native';
import { ListSkeletonProps } from './interfaces/list-skeleton.interface';

const ListSkeleton = ({
  length,
  showScrollIndicator = false,
  renderItem,
}: ListSkeletonProps) => {
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
