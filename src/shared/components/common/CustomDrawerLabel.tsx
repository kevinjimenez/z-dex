import Lucide, { LucideIconName } from '@react-native-vector-icons/lucide';
import { ColorValue, Text, View } from 'react-native';

interface Props {
  color: ColorValue;
  icon: LucideIconName;
  label: string;
  focused?: boolean;
}

const CustomDrawerLabel = ({ color, icon, label }: Props) => {
  return (
    <View className="flex-row justify-between items-center">
      <Text style={{ color }} className="font-medium">
        {label}
      </Text>
      <Lucide name={icon} size={17} color="gray" />
    </View>
  );
};

export default CustomDrawerLabel;
