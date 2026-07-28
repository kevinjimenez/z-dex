import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { twMerge } from 'tailwind-merge';
import { BasePingDotProps } from './base-ping-dot.interface';

const BasePingDot = ({ color = 'bg-sky-400' }: BasePingDotProps) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 1000, easing: Easing.out(Easing.ease) }),
      -1,
    );
  }, [progress]);

  const pingStyle = useAnimatedStyle(() => ({
    transform: [{ scale: 1 + progress.value }],
    opacity: 0.75 * (1 - progress.value),
  }));

  return (
    <View className="relative size-3">
      <Animated.View
        style={pingStyle}
        className={twMerge('absolute h-full w-full rounded-full', color)}
      />
      <View className={twMerge('relative size-3 rounded-full', color)} />
    </View>
  );
};

export default BasePingDot;
