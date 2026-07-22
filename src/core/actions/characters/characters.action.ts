import { dragonBallApi } from '@/core/api/dragon-ball.api';
import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';
import { ApiResponse } from '@/interfaces/api-response.interface';

export const charactersAction = async (page: number) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000));

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
