import { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { twMerge } from 'tailwind-merge';
import { BaseSkeletonProps } from './base-skeleton.interface';

const BaseSkeleton = ({
  width = '100%',
  height = 16,
  className,
}: BaseSkeletonProps) => {
  const opacity = useSharedValue(0.5);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(1, { duration: 800 }), -1, true);
  }, []);

  const style = useAnimatedStyle(() => ({ opacity: opacity.value }));

  return (
    <Animated.View
      style={[{ width, height }, style]}
      className={twMerge('rounded-md bg-gray-200', className)}
    />
  );
};

export default BaseSkeleton;
