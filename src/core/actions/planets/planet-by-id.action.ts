import { dragonBallApi } from '@/core/api/dragon-ball.api';
import { PlanetResponse } from '@/core/interfaces/responses/planet-response.interface';

export const planetByIdAction = async (id: number) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const { data } = await dragonBallApi.get<PlanetResponse>(`/planets/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
