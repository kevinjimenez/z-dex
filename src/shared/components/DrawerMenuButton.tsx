import Lucide from '@react-native-vector-icons/lucide';
import { useNavigation } from 'expo-router';
import { DrawerActions } from 'expo-router/build/react-navigation';
import { useDrawerProgress } from 'expo-router/drawer';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const DrawerMenuButton = () => {
  const navigation = useNavigation();
  const progress = useDrawerProgress(); // SharedValue 0 (cerrado) → 1 (abierto)

  const hamburgerStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [1, 0]),
    transform: [
      { rotate: `${interpolate(progress.value, [0, 1], [0, 90])}deg` },
    ],
  }));

  const closeStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    opacity: interpolate(progress.value, [0, 1], [0, 1]),
    transform: [
      { rotate: `${interpolate(progress.value, [0, 1], [-90, 0])}deg` },
    ],
  }));

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Pressable
      onPress={toggleDrawer}
      className="bg-white size-12 items-center justify-center rounded-lg border border-gray-300"
    >
      <Animated.View style={hamburgerStyle}>
        <Lucide name="hamburger" size={30} />
      </Animated.View>
      <Animated.View style={closeStyle}>
        <Lucide name="menu" size={30} />
      </Animated.View>
    </Pressable>
  );
};

export default DrawerMenuButton;
