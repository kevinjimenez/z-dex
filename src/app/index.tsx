import { useCharacters } from '@/hooks/useCharacters';
import { FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AppScreen = () => {
  const { top } = useSafeAreaInsets();
  const { dragonBallCharacters } = useCharacters();
  return (
    <View style={{ paddingTop: top, flex: 1 }}>
      <Text>AppScreen</Text>
      <FlatList
        data={dragonBallCharacters.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default AppScreen;
