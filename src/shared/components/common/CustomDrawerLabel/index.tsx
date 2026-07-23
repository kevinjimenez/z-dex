import Lucide from '@react-native-vector-icons/lucide';
import { Text, View } from 'react-native';
import { CustomDrawerLabelProps } from './interfaces/custom-drawer-label.interface';

const CustomDrawerLabel = ({ color, icon, label }: CustomDrawerLabelProps) => {
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
