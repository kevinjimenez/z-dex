import Lucide, { LucideIconName } from '@react-native-vector-icons/lucide';
import { Pressable, PressableProps } from 'react-native';

interface Props extends PressableProps {
  icon: LucideIconName;
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
      <Lucide name={icon} size={size} className={color} />
    </Pressable>
  );
};

export default BaseButtonIcon;
