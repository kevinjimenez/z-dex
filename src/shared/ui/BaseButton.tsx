import Ionicons, {
  IoniconsIconName,
} from '@react-native-vector-icons/ionicons';
import { Pressable, PressableProps, Text } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props extends PressableProps {
  text: string;
  prefixIcon?: IoniconsIconName;
  suffixIcon?: IoniconsIconName;
  size?: number;
  color?: string;
}

const BaseButton = ({
  text,
  prefixIcon,
  suffixIcon,
  disabled = false,
  size = 23,
  color = 'black',
  onPress,
  className,
  ...rest
}: Props) => {
  return (
    <Pressable
      className={twMerge(
        'w-full bg-white p-4 rounded-xl border border-slate-200 justify-center items-center flex-row gap-x-3',
        className,
      )}
      disabled={disabled}
      onPress={onPress}
      {...rest}
    >
      {prefixIcon && <Ionicons name={prefixIcon} size={size} color={color} />}
      <Text className="text-center font-bold text-orange-500">{text}</Text>
      {suffixIcon && <Ionicons name={suffixIcon} size={size} color={color} />}
    </Pressable>
  );
};

export default BaseButton;
