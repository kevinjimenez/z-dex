import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export const useAppFonts = () => {
  const [fontsLoaded, error] = useFonts({
    'Oswald-ExtraLight': require('../../assets/fonts/Oswald-ExtraLight.ttf'),
    'Oswald-Light': require('../../assets/fonts/Oswald-Light.ttf'),
    'Oswald-Regular': require('../../assets/fonts/Oswald-Regular.ttf'),
    'Oswald-Medium': require('../../assets/fonts/Oswald-Medium.ttf'),
    'Oswald-SemiBold': require('../../assets/fonts/Oswald-SemiBold.ttf'),
    'Oswald-Bold': require('../../assets/fonts/Oswald-Bold.ttf'),
    'DMSans-Thin': require('../../assets/fonts/DMSans-Thin.ttf'),
    'DMSans-ExtraLight': require('../../assets/fonts/DMSans-ExtraLight.ttf'),
    'DMSans-Light': require('../../assets/fonts/DMSans-Light.ttf'),
    'DMSans-Regular': require('../../assets/fonts/DMSans-Regular.ttf'),
    'DMSans-Medium': require('../../assets/fonts/DMSans-Medium.ttf'),
    'DMSans-SemiBold': require('../../assets/fonts/DMSans-SemiBold.ttf'),
    'DMSans-Bold': require('../../assets/fonts/DMSans-Bold.ttf'),
    'DMSans-ExtraBold': require('../../assets/fonts/DMSans-ExtraBold.ttf'),
    'DMSans-Black': require('../../assets/fonts/DMSans-Black.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  return fontsLoaded;
};
