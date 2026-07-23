import { OriginPlanet } from '@/core/interfaces/responses/character-response.interface';

export interface CharacterInfoSectionProps {
  ki: string;
  maxKi: string;
  gender: string;
  affiliation: string;
  planet: OriginPlanet;
}
