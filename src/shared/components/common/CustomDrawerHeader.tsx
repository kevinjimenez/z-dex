import { Text, View } from 'react-native';
import BaseButtonIcon from '../ui/BaseButtonIcon';
import Avartar from './Avatar';

interface Props {
  onPress?: () => void;
}

const CustomDrawerHeader = ({ onPress }: Props) => {
  return (
    <View className="flex-row items-center gap-x-5">
      <Avartar
        customClassContainer="size-16"
        customClassText="text-3xl"
        text="G"
      />
      <View className="flex-col flex-1 gap-y-1">
        <Text className="font-oswald-bold text-2xl">Guerrero Z</Text>
        <Text
          className="text-sm text-ink-2 font-dmsans-medium"
          numberOfLines={1}
        >
          guerrero@gmail.com
        </Text>
      </View>
      <BaseButtonIcon
        className="bg-secondary-light rounded-full size-10 items-center justify-center"
        color="text-secondary"
        icon="x"
        size={18}
        onPress={onPress}
      />
    </View>
  );
};

export default CustomDrawerHeader;
