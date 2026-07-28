import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';
import * as Notifications from 'expo-notifications';

export const notifyFavoriteAdded = async (character: CharacterResponse) => {
  const { status } = await Notifications.getPermissionsAsync();

  let finalStatus = status;
  if (status !== 'granted') {
    const { status: requested } = await Notifications.requestPermissionsAsync();
    finalStatus = requested;
  }

  if (finalStatus !== 'granted') return;

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Nuevo favorito',
      body: `${character.name} se agregó a tu colección Z`,
    },
    trigger: null,
  });
};
