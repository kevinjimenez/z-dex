import { dragonBallApi } from '@/core/api/dragon-ball.api';
import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';

export const characterByIdAction = async (id: number) => {
  try {
    const { data } = await dragonBallApi.get<CharacterResponse>(
      `/characters/${id}`,
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
