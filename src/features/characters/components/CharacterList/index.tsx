import BaseButton from '@/shared/components/ui/BaseButton';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { CharacterListProps } from './interfaces/character-list.interface';

const CharacterList = ({
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  renderItem,
}: CharacterListProps) => {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      ItemSeparatorComponent={() => <View className="h-4" />}
      renderItem={renderItem}
      ListFooterComponent={() => {
        if (isFetchingNextPage) {
          return <ActivityIndicator className="my-4" color="#FF6A1A" />;
        }
        if (!hasNextPage) return null;
        return (
          <BaseButton
            text="Cargar más"
            onPress={fetchNextPage}
            className="my-4"
            color="secondary"
          />
        );
      }}
    />
  );
};

export default CharacterList;
