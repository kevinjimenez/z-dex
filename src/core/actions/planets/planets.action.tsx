import { dragonBallApi } from '@/core/api/dragon-ball.api';
import { PlanetResponse } from '@/core/interfaces/responses/planet-response.interface';
import { ApiResponse } from '@/interfaces/api-response.interface';

export const planetsAction = async (page: number) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const { data } = await dragonBallApi.get<ApiResponse<PlanetResponse[]>>(
      '/planets',
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
