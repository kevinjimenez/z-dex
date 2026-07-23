import Lucide from '@react-native-vector-icons/lucide';
import { useNavigation } from 'expo-router';
import { DrawerActions } from 'expo-router/build/react-navigation';
import { useDrawerProgress } from 'expo-router/drawer';
import { Pressable } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { twMerge } from 'tailwind-merge';
import { CustomDrawerMenuButtonProps } from './interfaces/custom-drawer-menu-button.interface';

const CustomDrawerMenuButton = ({
  openIcon = 'hamburger',
  closeIcon = 'menu',
  size = 30,
  className,
  ...rest
}: CustomDrawerMenuButtonProps) => {
  const navigation = useNavigation();
  const progress = useDrawerProgress(); // SharedValue 0 (cerrado) → 1 (abierto)

  const openStyle = useAnimatedStyle(() => ({
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
      className={twMerge(
        'bg-white size-14 items-center justify-center rounded-2xl border border-gray-300',
        className,
      )}
      {...rest}
    >
      <Animated.View style={openStyle}>
        <Lucide name={openIcon} size={size} />
      </Animated.View>
      <Animated.View style={closeStyle}>
        <Lucide name={closeIcon} size={size} />
      </Animated.View>
    </Pressable>
  );
};

export default CustomDrawerMenuButton;
