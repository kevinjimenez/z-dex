import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { BaseDividerProps } from './base-divider.interface';

const BaseDivider = ({ customClass }: BaseDividerProps) => {
  return (
    <View className={twMerge('w-full bg-gray-500 h-[0.1rem]', customClass)} />
  );
};

export default BaseDivider;
