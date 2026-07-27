import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import { Text, View } from 'react-native';
import Avartar from '../Avatar';
import { DrawerHeaderProps } from './interfaces/drawer-header.interface';

const DrawerHeader = ({ onPress }: DrawerHeaderProps) => {
  return (
    <View className="flex-row items-center gap-x-5">
      <Avartar
        customClassContainer="size-16"
        customClassText="text-3xl"
        text="G"
      />
      <View className="flex-col flex-1 gap-y-1">
        <Text className="font-oswald-bold text-2xl text-ink-primary">
          Guerrero Z
        </Text>
        <Text
          className="text-sm text-ink-secondary font-dmsans-medium"
          numberOfLines={1}
        >
          guerrero@gmail.com
        </Text>
      </View>
      <BaseButtonIcon
        className="bg-surface-terceary rounded-full size-12 items-center justify-center"
        color="text-ink-terceary"
        icon="x"
        size={20}
        onPress={onPress}
      />
    </View>
  );
};

export default DrawerHeader;
