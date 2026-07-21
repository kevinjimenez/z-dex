import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FavoritesScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <Text>FavoritesScreen</Text>
    </View>
  );
};

export default FavoritesScreen;
