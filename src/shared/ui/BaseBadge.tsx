import Lucide, { LucideIconName } from '@react-native-vector-icons/lucide';
import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props {
  customClassBadge?: string;
  customClassText?: string;
  prefixIcon?: LucideIconName;
  suffixIcon?: LucideIconName;
  size?: number;
  color?: string;
  text: string;
}

const BaseBadge = ({
  text,
  customClassBadge,
  customClassText,
  prefixIcon,
  suffixIcon,
  size = 12,
  color,
}: Props) => {
  return (
    <View
      className={twMerge(
        'bg-badge px-1.5 py-0.5 rounded-lg flex-row gap-x-1',
        customClassBadge,
      )}
    >
      {prefixIcon && <Lucide name={prefixIcon} size={size} className={color} />}
      <Text
        className={twMerge(
          'text-xs font-medium text-gray-600',
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
