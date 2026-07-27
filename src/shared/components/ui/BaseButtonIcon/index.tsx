import Lucide, { LucideIconName } from '@react-native-vector-icons/lucide';
import { Pressable } from 'react-native';
import { BaseButtonIconProps } from './base-button-icon.interface';
import Ionicons, {
  IoniconsIconName,
} from '@react-native-vector-icons/ionicons';

const BaseButtonIcon = ({
  icon,
  filled = false,
  size = 23,
  color = 'black',
  onPress,
  onLongPress,
  ...rest
}: BaseButtonIconProps) => {
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} {...rest}>
      {filled ? (
        <Ionicons
          name={icon as IoniconsIconName}
          size={size}
          className={color}
        />
      ) : (
        <Lucide name={icon as LucideIconName} size={size} className={color} />
      )}
    </Pressable>
  );
};

export default BaseButtonIcon;
