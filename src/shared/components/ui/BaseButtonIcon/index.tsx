import Lucide from '@react-native-vector-icons/lucide';
import { Pressable } from 'react-native';
import { BaseButtonIconProps } from './base-button-icon.interface';
import Ionicons from '@react-native-vector-icons/ionicons';

const BaseButtonIcon = ({
  icon,
  filledIcon,
  filled = false,
  size = 23,
  color = 'black',
  onPress,
  onLongPress,
  ...rest
}: BaseButtonIconProps) => {
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} {...rest}>
      {filled && filledIcon ? (
        <Ionicons name={filledIcon} size={size} className={color} />
      ) : (
        <Lucide name={icon} size={size} className={color} />
      )}
    </Pressable>
  );
};

export default BaseButtonIcon;
