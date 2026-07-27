import { PressableProps } from 'react-native';

export interface FavoriteCardProps {
  image: string;
  name: string;
  onSelected: () => void;
  onFavorited: () => void;
}
