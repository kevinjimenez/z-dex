import Lucide from '@react-native-vector-icons/lucide';
import { Pressable } from 'react-native';
import { BaseButtonIconProps } from './base-button-icon.interface';

const BaseButtonIcon = ({
  icon,
  size = 23,
  color = 'black',
  onPress,
  onLongPress,
  ...rest
}: BaseButtonIconProps) => {
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
