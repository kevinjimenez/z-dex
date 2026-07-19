import Ionicons, {
  IoniconsIconName,
} from '@react-native-vector-icons/ionicons';
import { Pressable, PressableProps } from 'react-native';

interface Props extends PressableProps {
  icon: IoniconsIconName;
  size?: number;
  color?: string;
}

const BaseButtonIcon = ({
  icon,
  size = 23,
  color = 'black',
  onPress,
  onLongPress,
  ...rest
}: Props) => {
  return (
    <Pressable
      className="pr-2"
      onPress={onPress}
      onLongPress={onLongPress}
      {...rest}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default BaseButtonIcon;
