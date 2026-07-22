import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { twMerge } from 'tailwind-merge';
import { ScreenContainerProps } from './interfaces/screen-container.interface';

const ScreenContainer = ({ className, children }: ScreenContainerProps) => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      className={twMerge('bg-surface-page1 flex-1 px-6', className)}
      style={{ paddingTop: top }}
    >
      {children}
    </View>
  );
};

export default ScreenContainer;
