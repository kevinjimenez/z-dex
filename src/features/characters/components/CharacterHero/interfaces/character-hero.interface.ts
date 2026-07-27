export interface CharacterHeroProps {
  image: string;
  race: string;
  name: string;
  isFavorite?: boolean;
  onBack: () => void;
  onToggleFavorite: () => void;
}
