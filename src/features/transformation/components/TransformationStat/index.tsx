import Lucide from '@react-native-vector-icons/lucide';
import { Text, View } from 'react-native';
import { TransformationStatProps } from './transformation-stat.interface';

const TransformationStat = ({ ki }: TransformationStatProps) => {
  return (
    <View className="bg-gray-200 flex-row items-center rounded-xl p-3 gap-x-3">
      <Lucide name="zap" size={18} className="text-primary" />
      <View className="flex-col">
        <Text className="text-ink-3 font-dmsans-medium text-xs">Ki</Text>
        <Text className="font-oswald-bold text-lg">{ki}</Text>
      </View>
    </View>
  );
};

export default TransformationStat;
