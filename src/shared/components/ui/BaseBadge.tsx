import Ionicons, {
  IoniconsIconName,
} from '@react-native-vector-icons/ionicons';
import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props {
  customClassBadge?: string;
  customClassText?: string;
  prefixIcon?: IoniconsIconName;
  suffixIcon?: IoniconsIconName;
  iconSize?: number;
  text: string;
}

const BaseBadge = ({
  text,
  customClassBadge,
  customClassText,
  prefixIcon,
  suffixIcon,
  iconSize = 12,
}: Props) => {
  return (
    <View
      className={twMerge(
        'bg-gray-400 px-1.5 py-0.5 rounded-lg flex-row gap-x-1',
        customClassBadge,
      )}
    >
      {prefixIcon && <Ionicons name={prefixIcon} size={iconSize} />}
      <Text className={twMerge('text-xs font-medium', customClassText)}>
        {text}
      </Text>
      {suffixIcon && <Ionicons name={suffixIcon} size={iconSize} />}
    </View>
  );
};

export default BaseBadge;
