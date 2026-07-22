import { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { twMerge } from 'tailwind-merge';

interface Props extends PropsWithChildren {
  className?: string;
}

const ScreenContainer = ({ className, children }: Props) => {
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
