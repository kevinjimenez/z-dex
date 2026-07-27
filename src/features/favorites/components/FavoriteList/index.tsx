import { FlatList, View } from 'react-native';
import { FavoriteListProps } from './interfaces/favorite-list.interface';

export const FavoriteList = ({
  data,
  renderItem,
  ...rest
}: FavoriteListProps) => {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        paddingHorizontal: 16,
      }}
      ItemSeparatorComponent={() => <View className="h-4" />}
      {...rest}
      renderItem={renderItem}
    />
  );
};
