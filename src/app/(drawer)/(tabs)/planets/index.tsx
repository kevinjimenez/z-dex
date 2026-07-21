import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PlanetsScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <Text>PlanetsScreen</Text>
    </View>
  );
};

export default PlanetsScreen;
