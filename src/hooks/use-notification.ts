import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

if (Platform.OS === 'android') {
  Notifications.setNotificationChannelAsync('default', {
    name: 'default',
    importance: Notifications.AndroidImportance.MAX,
    vibrationPattern: [0, 250, 250, 250],
    lightColor: '#FF231F7C',
  });
}

let hasPermission: boolean | null = null;

interface SendOptions {
  to?: string[];
  title: string;
  body: string;
  data?: Record<string, any>;
}

export const sendNotification = async (options: SendOptions) => {
  const { to, title, body, data } = options;

  await Notifications.scheduleNotificationAsync({
    content: { title, body },
    trigger:
      Platform.OS === 'android' ? { channelId: 'default', second: 0 } : null,
  });
};

const ensurePermission = async () => {
  if (hasPermission !== null) return hasPermission;

  const { status } = await Notifications.getPermissionsAsync();

  if (status === 'granted') {
    hasPermission = true;
  } else {
    hasPermission =
      (await Notifications.requestPermissionsAsync()).status === 'granted';
  }

  return hasPermission;
};

export const useNotification = () => {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    ensurePermission()
      .then(setGranted)
      .catch(() => setGranted(false));
  }, []);

  return { granted, sendNotification };
};
