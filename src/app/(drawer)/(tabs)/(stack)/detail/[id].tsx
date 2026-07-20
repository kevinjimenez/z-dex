import BaseButtonIcon from '@/shared/ui/BaseButtonIcon';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { StackActions } from 'expo-router/build/react-navigation';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ComponentName = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  const { id } = useLocalSearchParams<{ id: string }>();

  const goto = () => {
    navigation.dispatch(StackActions.pop());
  };
  return (
    <View style={{ paddingTop: top }} className="bg-surface-page1 flex-1 ">
      <View className="flex-row justify-between">
        <BaseButtonIcon
          icon="arrow-left"
          size={20}
          className="size-11 justify-center items-center bg-white rounded-full border border-gray-300"
          onPress={goto}
        />
        <BaseButtonIcon
          icon="heart"
          size={20}
          className="size-11 justify-center items-center bg-white rounded-full border border-gray-300"
        />
      </View>
      <Text>CharacterDetailScreen {id}</Text>
    </View>
  );
};

export default ComponentName;
