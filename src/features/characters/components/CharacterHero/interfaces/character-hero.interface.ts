import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';

export interface CharacterHeroProps {
  character: CharacterResponse;
  isFavorite?: boolean;
  onBack: () => void;
  onToggleFavorite: () => void;
}
