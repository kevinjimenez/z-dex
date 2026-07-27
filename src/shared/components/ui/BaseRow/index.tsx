import { Text, View } from 'react-native';
import { BaseRowProps } from './base-row.interface';

const BaseRow = ({ label, value }: BaseRowProps) => {
  return (
    <View className="bg-surface-page2 flex-row items-center justify-between p-3 w-9/12 rounded-xl">
      <Text className="uppercase font-dmsans-medium text-ink-3 text-xs">
        {label}
      </Text>
      <Text className="font-oswald-semibold text-ink-3 text-2xl">{value}</Text>
    </View>
  );
};

export default BaseRow;
