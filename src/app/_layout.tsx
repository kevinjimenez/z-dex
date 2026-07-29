import { useFavoriteStore } from '@/features/favorites/store/useFavorite';
import { useAppFonts } from '@/hooks/useAppFonts';
import Ionicons from '@react-native-vector-icons/ionicons';
import Lucide from '@react-native-vector-icons/lucide';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as Notifications from 'expo-notifications';
import { Slot, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { cssInterop } from 'nativewind';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../global.css';
// permite usar className (NativeWind) en Lucide, mapeándolo a su prop style
cssInterop(Ionicons, { className: 'style' });
cssInterop(Lucide, { className: 'style' });

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

if (Platform.OS === 'android') {
  Notifications.setNotificationChannelAsync('default', {
    name: 'Default',
    importance: Notifications.AndroidImportance.MAX,
  });
}

const queryClient = new QueryClient();
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const fontsLoaded = useAppFonts();

  useEffect(() => {
    useFavoriteStore.getState().loadFavorites();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Slot />
        <StatusBar style="inverted" animated />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
