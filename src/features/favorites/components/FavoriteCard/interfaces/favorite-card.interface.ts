import { PressableProps } from 'react-native';

export interface FavoriteCardProps {
  image: string;
  name: string;
  race: string;
  ki: string;
  onSelected: () => void;
  onFavorited: () => void;
}
