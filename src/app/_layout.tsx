import Ionicons from '@react-native-vector-icons/ionicons';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import { cssInterop } from 'nativewind';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../global.css';
// permite usar className (NativeWind) en Ionicons, mapeándolo a su prop style
cssInterop(Ionicons, { className: 'style' });

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
