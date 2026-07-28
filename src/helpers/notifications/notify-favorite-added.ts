import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

let hasPermission: boolean | null = null;

const ensurePermission = async () => {
  if (hasPermission !== null) return hasPermission;

  const { status } = await Notifications.getPermissionsAsync();
  if (status === 'granted') {
    hasPermission = true;
    return hasPermission;
  }

  const { status: requested } = await Notifications.requestPermissionsAsync();
  hasPermission = requested === 'granted';
  return hasPermission;
};

export const notifyFavoriteAdded = async (character: CharacterResponse) => {
  const granted = await ensurePermission();
  if (!granted) return;

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Nuevo favorito',
      body: `${character.name} se agregó a tu colección Z`,
    },
    trigger: Platform.OS === 'android' ? { channelId: 'default' } : null,
  });
};
