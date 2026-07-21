import { useAppFonts } from '@/hooks/useAppFonts';
import Lucide from '@react-native-vector-icons/lucide';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot, SplashScreen } from 'expo-router';
import { cssInterop } from 'nativewind';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../global.css';
// permite usar className (NativeWind) en Lucide, mapeándolo a su prop style
cssInterop(Lucide, { className: 'style' });

const queryClient = new QueryClient();
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
