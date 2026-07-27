import { Text, View } from 'react-native';
import { BaseRowProps } from './base-row.interface';

const BaseRow = ({ label, value }: BaseRowProps) => {
  return (
    <View className="bg-white flex-row items-center justify-between p-5 w-10/12 rounded-xl border border-surface-terceary">
      <Text className="uppercase font-dmsans-medium text-ink-secondary text-sm">
        {label}
      </Text>
      <Text className="font-oswald-semibold text-ink-primary text-2xl">
        {value}
      </Text>
    </View>
  );
};

export default BaseRow;
