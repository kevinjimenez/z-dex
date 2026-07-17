import { dragonBallApi } from '@/core/api/dragon-ball.api';

export const characterAction = async () => {
  try {
    const { data } = await dragonBallApi.get('/characters');
    console.log(JSON.stringify(data.items, null, 2));
    return data.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
