import { dragonBallApi } from '@/core/api/dragon-ball.api';
import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';
import { ApiResponse } from '@/interfaces/api-response.interface';

export const characterAction = async () => {
  try {
    const { data } =
      await dragonBallApi.get<ApiResponse<CharacterResponse[]>>('/characters');
    console.log(JSON.stringify(data.items, null, 2));
    return data.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
