import { useFavoriteStore } from '@/features/favorites/store/useFavorite';
import CustomDrawerMenuButton from '@/shared/components/common/CustomDrawerMenuButton';
import ScreenContainer from '@/shared/components/common/ScreenContainer';
import { Image } from 'expo-image';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const FavoritesScreen = () => {
  const favorites = useFavoriteStore((state) => state.favorites);

  return (
    <ScreenContainer>
      <View className="mb-6 flex-row gap-x-4 items-center">
        <CustomDrawerMenuButton />
        <View className="flex-col gap-y-2">
          <Text className="font-dmsans-medium text-sm text-ink-3">
            Tu colección Z
          </Text>
          <Text className="font-oswald-bold text-3xl">Tus favoritos</Text>
        </View>
      </View>

      <FlatList
        data={favorites}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <View style={{ width: '48%' }}>
            <View style={styles.card}>
              <Image
                contentPosition="top"
                source={{ uri: item.image }}
                style={{ width: '100%', height: 125 }}
              />
            </View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  separator: {
    height: 16,
  },
  card: {
    // width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
  },
});

export default FavoritesScreen;
