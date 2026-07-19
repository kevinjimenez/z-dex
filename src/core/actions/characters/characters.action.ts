import { dragonBallApi } from '@/core/api/dragon-ball.api';
import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';
import { ApiResponse } from '@/interfaces/api-response.interface';

export const characterAction = async (page: number) => {
  try {
    const { data } = await dragonBallApi.get<ApiResponse<CharacterResponse[]>>(
      '/characters',
      {
        params: {
          page,
        },
      },
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
