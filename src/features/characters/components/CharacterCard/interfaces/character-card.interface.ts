import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';
import { PressableProps } from 'react-native';

export interface CharacterCardProps extends PressableProps {
  item: CharacterResponse;
}
