import { CharacterResponse } from '@/core/interfaces/responses/character-response.interface';
import { FlatListProps } from 'react-native';

export interface CharacterListProps extends FlatListProps<CharacterResponse> {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}
