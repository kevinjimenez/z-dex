export interface CharacterHeroProps {
  image: string;
  race: string;
  name: string;
  onBack: () => void;
  onToggleFavorite: () => void;
}
