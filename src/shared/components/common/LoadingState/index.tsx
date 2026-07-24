import { ActivityIndicator, Text, View } from 'react-native';
import { LoadingStateProps } from './interfaces/loading-state.interface';

const LoadingState = ({ text }: LoadingStateProps) => {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="flex-col items-center justify-center gap-y-4">
        <ActivityIndicator size={65} className="text-ink-3" />
        {text && (
          <Text className="font-dmsans-semibold text-ink-3">{text}</Text>
        )}
      </View>
    </View>
  );
};

export default LoadingState;
