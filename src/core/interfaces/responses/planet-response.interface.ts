import { CharacterResponse } from './character-response.interface';

export interface PlanetResponse {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: null;
  characters?: Omit<CharacterResponse, 'originPlanet' | 'transformations'>[];
}
