import { ActivityIndicator, Text, View } from 'react-native';
import { LoadingStateProps } from './interfaces/loading-state.interface';

const LoadingState = ({ text }: LoadingStateProps) => {
  return (
    <View className="flex-1 items-center justify-center bg-surface-primary">
      <View className="flex-col items-center justify-center gap-y-4">
        <ActivityIndicator size={65} className="text-ink-terceary" />
        {text && (
          <Text className="font-dmsans-semibold text-ink-terceary">{text}</Text>
        )}
      </View>
    </View>
  );
};

export default LoadingState;
