import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AppScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <Text>AppScreen</Text>
    </View>
  );
};

export default AppScreen;
