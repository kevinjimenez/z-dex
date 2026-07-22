import { ListRenderItem } from 'react-native';

export interface ListSkeletonProps {
  length: number;
  showScrollIndicator?: boolean;
  renderItem: ListRenderItem<unknown>;
}
