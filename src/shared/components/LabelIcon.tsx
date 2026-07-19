import Ionicons, {
  IoniconsIconName,
} from '@react-native-vector-icons/ionicons';
import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props {
  text: string;
  prefixIcon?: IoniconsIconName;
  suffixIcon?: IoniconsIconName;
  customClassContainer?: string;
  customClassText?: string;
  iconSize?: number;
}

const LabelIcon = ({
  text,
  prefixIcon,
  suffixIcon,
  iconSize = 12,
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
      {prefixIcon && <Ionicons name={prefixIcon} size={iconSize} />}
      <Text className={twMerge('text-sm font-normal', customClassText)}>
        {text}
      </Text>
      {suffixIcon && <Ionicons name={suffixIcon} size={iconSize} />}
    </View>
  );
};

export default LabelIcon;
