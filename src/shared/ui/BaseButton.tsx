import Ionicons, {
  IoniconsIconName,
} from '@react-native-vector-icons/ionicons';
import { Pressable, PressableProps, Text } from 'react-native';

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
}: Props) => {
  return (
    <Pressable
      className="w-full bg-white p-4 rounded-xl border border-slate-200 my-4"
      disabled={disabled}
      onPress={onPress}
    >
      {prefixIcon && <Ionicons name={prefixIcon} size={size} color={color} />}
      <Text className="text-center font-bold text-orange-500">{text}</Text>
      {suffixIcon && <Ionicons name={suffixIcon} size={size} color={color} />}
    </Pressable>
  );
};

export default BaseButton;
