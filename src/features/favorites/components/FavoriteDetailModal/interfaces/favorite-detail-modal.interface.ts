import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';

export interface FavoriteDetailModalProps {
  selected: CharacterResponse | null;
  onClose: () => void;
}
