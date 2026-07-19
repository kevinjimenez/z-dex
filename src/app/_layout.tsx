import { Slot } from 'expo-router';
import '../global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { cssInterop } from 'nativewind';
import Ionicons from '@react-native-vector-icons/ionicons';
// permite usar className (NativeWind) en Ionicons, mapeándolo a su prop style
cssInterop(Ionicons, { className: 'style' });

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
};

export default RootLayout;
