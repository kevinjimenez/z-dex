import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';
import BaseButton from '@/shared/components/ui/BaseButton';
import { ActivityIndicator, FlatList, FlatListProps, View } from 'react-native';

interface Props extends FlatListProps<CharacterResponse> {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

const CharacterList = ({
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  renderItem,
}: Props) => {
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
