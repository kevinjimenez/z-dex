import Lucide from '@react-native-vector-icons/lucide';
import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { BaseBadgeProps } from './base-badge.interface';

const BaseBadge = ({
  text,
  customClassBadge,
  customClassText,
  prefixIcon,
  suffixIcon,
  size = 12,
  color,
}: BaseBadgeProps) => {
  return (
    <View
      className={twMerge(
        'bg-gray-200 px-2 py-1 rounded-lg flex-row gap-x-1',
        customClassBadge,
      )}
    >
      {prefixIcon && <Lucide name={prefixIcon} size={size} className={color} />}
      <Text
        className={twMerge(
          'text-xs font-dmsans-medium text-gray-700',
          customClassText,
        )}
      >
        {text}
      </Text>
      {suffixIcon && <Lucide name={suffixIcon} size={size} className={color} />}
    </View>
  );
};

export default BaseBadge;
