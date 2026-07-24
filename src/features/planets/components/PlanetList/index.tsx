import { FlatList, View } from 'react-native';
import { PlanetListProps } from './interfaces/planet-list.interface';

const PlanetList = ({
  data,
  fetchNextPage,
  renderItem,
  ...rest
}: PlanetListProps) => {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.6}
      onEndReached={() => fetchNextPage()}
      keyExtractor={(item) => String(item.id)}
      ItemSeparatorComponent={() => <View className="h-4" />}
      renderItem={renderItem}
      {...rest}
    />
  );
};

export default PlanetList;
