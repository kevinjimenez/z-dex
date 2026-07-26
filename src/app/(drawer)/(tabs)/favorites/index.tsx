import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';
import { useFavoriteStore } from '@/features/favorites/store/useFavorite';
import CustomDrawerMenuButton from '@/shared/components/common/CustomDrawerMenuButton';
import ScreenContainer from '@/shared/components/common/ScreenContainer';
import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import BaseModal from '@/shared/components/ui/BaseModal';
import { Image } from 'expo-image';
import { useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FavoritesScreen = () => {
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const { removeFavorite } = useFavoriteStore();
  const favorites = useFavoriteStore((state) => state.favorites);

  const [selected, setSelected] = useState<CharacterResponse | null>(null);

  const avatarSize = width * 0.5;

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
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Pressable
            style={{
              width: '48%',
              flexDirection: 'column',
              rowGap: 8,
              position: 'relative',
            }}
            onPress={() => setSelected(item)}
          >
            <View style={styles.card}>
              <Image
                contentPosition="top"
                source={{ uri: item.image }}
                style={{ width: '100%', height: 130 }}
              />
              <BaseButtonIcon
                icon="heart"
                style={styles.favoriteButton}
                color="text-ink-3"
                size={18}
                onPress={() => removeFavorite(item.id)}
              />
            </View>
            <Text style={{ fontFamily: 'Oswald-SemiBold' }}>{item.name}</Text>
          </Pressable>
        )}
      />

      <BaseModal size="full" visible={!!selected}>
        {selected && (
          <View
            style={{
              paddingTop: top,
              width: '100%',
              backgroundColor: '#FAF7F1',
              flex: 1,
            }}
          >
            <View style={{ position: 'relative' }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View
                  style={{
                    width: avatarSize,
                    height: avatarSize,
                    borderRadius: avatarSize / 2,
                    borderWidth: 2,
                    borderColor: '#FF9477',
                    overflow: 'hidden',
                    backgroundColor: '#FFA23E',
                  }}
                >
                  <Image
                    source={{ uri: selected.image }}
                    contentFit="contain"
                    style={{ width: '100%', height: '100%' }}
                  />
                </View>
                <Text>{selected.name}</Text>
              </View>

              <BaseButtonIcon
                icon="x"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 25,
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  padding: 8,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                color="text-ink-3"
                onPress={() => setSelected(null)}
              />
            </View>
          </View>
        )}
      </BaseModal>
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
    borderWidth: 1,
    borderColor: '#8C8377',
    backgroundColor: '#E8DECF',
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  favoriteButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
