import Lucide, { LucideIconName } from '@react-native-vector-icons/lucide';
import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { BaseBadgeProps } from './base-badge.interface';
import Ionicons, {
  IoniconsIconName,
} from '@react-native-vector-icons/ionicons';

const BaseBadge = ({
  text,
  customClassBadge,
  customClassText,
  prefixIcon,
  suffixIcon,
  filled = false,
  size = 12,
  color,
}: BaseBadgeProps) => {
  return (
    <View
      className={twMerge(
        'bg-surface-terceary px-2 py-1 rounded-lg flex-row gap-x-1',
        customClassBadge,
      )}
    >
      {prefixIcon &&
        (filled ? (
          <Ionicons
            name={prefixIcon as IoniconsIconName}
            size={size}
            className={color}
          />
        ) : (
          <Lucide
            name={prefixIcon as LucideIconName}
            size={size}
            className={color}
          />
        ))}
      <Text
        className={twMerge(
          'text-xs font-dmsans-medium text-ink-terceary',
          customClassText,
        )}
      >
        {text}
      </Text>
      {suffixIcon &&
        (filled ? (
          <Ionicons
            name={prefixIcon as IoniconsIconName}
            size={size}
            className={color}
          />
        ) : (
          <Lucide
            name={prefixIcon as LucideIconName}
            size={size}
            className={color}
          />
        ))}
    </View>
  );
};

export default BaseBadge;
