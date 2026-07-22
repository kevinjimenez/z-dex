import Lucide from '@react-native-vector-icons/lucide';
import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { LabelIconProps } from './interfaces/label-icon.interface';

const LabelIcon = ({
  text,
  prefixIcon,
  suffixIcon,
  size = 12,
  color,
  customClassContainer,
  customClassText,
}: LabelIconProps) => {
  return (
    <View
      className={twMerge(
        'flex-row items-center gap-x-0.5',
        customClassContainer,
      )}
    >
      {prefixIcon && <Lucide name={prefixIcon} size={size} className={color} />}
      <Text className={twMerge('text-sm font-dmsans-regular', customClassText)}>
        {text}
      </Text>
      {suffixIcon && <Lucide name={suffixIcon} size={size} className={color} />}
    </View>
  );
};

export default LabelIcon;
