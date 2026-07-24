import { Text, View } from 'react-native';
import { TransformationTitleProps } from './transformation-title.interface';

const TransformationTitle = ({ title }: TransformationTitleProps) => {
  return (
    <View className="flex-col gap-y-2">
      <Text
        className="uppercase text-primary text-sm font-dmsans-bold"
        style={{ letterSpacing: 1 }}
      >
        Transformación
      </Text>

      <Text className="text-2xl font-oswald-bold">{title}</Text>
    </View>
  );
};

export default TransformationTitle;
