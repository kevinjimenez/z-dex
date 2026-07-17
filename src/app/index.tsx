import { useCharacters } from '@/hooks/useCharacters';
import LabelIcon from '@/shared/components/LabelIcon';
import BaseBadge from '@/shared/ui/BaseBadge';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Image } from 'expo-image';
import { useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CharacterCard from './CharacterCard';

const AppScreen = () => {
  const { top } = useSafeAreaInsets();
  const { dragonBallCharacters } = useCharacters();

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View className="bg-yellow-100 flex-1" style={{ paddingTop: top }}>
      <Text className="font-bold">Universo Z</Text>
      <View className="p-5">
        <FlatList
          data={dragonBallCharacters.data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={() => <View className="h-4" />}
          renderItem={({ item }) => (
            <CharacterCard key={String(item.id)} item={item} />
          )}
        />
      </View>
    </View>
  );
};

export default AppScreen;
