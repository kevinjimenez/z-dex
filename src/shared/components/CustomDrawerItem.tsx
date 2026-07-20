import Ionicons from '@react-native-vector-icons/ionicons';
import { Pressable, Text, View } from 'react-native';

interface Props {
  label: string;
  focused: boolean;
  icon?: (props: {
    focused: boolean;
    size: number;
    color: string;
  }) => React.ReactNode;
  onPress: () => void;
}

// DrawerItemList (el default de expo-router/drawer) no soporta un layout de
// fila con chevron a la derecha, así que este item se arma a mano.
const CustomDrawerItem = ({ label, focused, icon, onPress }: Props) => {
  const color = focused ? '#9D6638' : '#000';

  return (
    <Pressable
      className="flex-row items-center justify-between py-4 border-b border-slate-200"
      onPress={onPress}
    >
      <View className="flex-row items-center gap-x-4">
        {icon?.({ focused, size: 22, color })}
        <Text style={{ color }} className="text-base">
          {label}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#999" />
    </Pressable>
  );
};

export default CustomDrawerItem;
