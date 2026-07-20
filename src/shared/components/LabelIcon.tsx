import Lucide, { LucideIconName } from '@react-native-vector-icons/lucide';
import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props {
  text: string;
  prefixIcon?: LucideIconName;
  suffixIcon?: LucideIconName;
  customClassContainer?: string;
  customClassText?: string;
  size?: number;
  color?: string;
}

const LabelIcon = ({
  text,
  prefixIcon,
  suffixIcon,
  size = 12,
  color,
  customClassContainer,
  customClassText,
}: Props) => {
  return (
    <View
      className={twMerge(
        'flex-row items-center gap-x-0.5',
        customClassContainer,
      )}
    >
      {prefixIcon && <Lucide name={prefixIcon} size={size} className={color} />}
      <Text className={twMerge('text-sm font-normal', customClassText)}>
        {text}
      </Text>
      {suffixIcon && <Lucide name={suffixIcon} size={size} className={color} />}
    </View>
  );
};

export default LabelIcon;
