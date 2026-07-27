import Lucide, { LucideIconName } from '@react-native-vector-icons/lucide';
import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { LabelIconProps } from './interfaces/label-icon.interface';
import Ionicons, {
  IoniconsIconName,
} from '@react-native-vector-icons/ionicons';

const LabelIcon = ({
  text,
  prefixIcon,
  suffixIcon,
  size = 12,
  filled = false,
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
      <Text className={twMerge('text-sm font-dmsans-regular', customClassText)}>
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

export default LabelIcon;
