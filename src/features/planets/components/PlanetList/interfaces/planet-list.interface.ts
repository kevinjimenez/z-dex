import { PlanetResponse } from '@/core/interfaces/responses/planet-response.interface';
import { FlatListProps } from 'react-native';

export interface PlanetListProps extends FlatListProps<PlanetResponse> {
  fetchNextPage: () => void;
}
