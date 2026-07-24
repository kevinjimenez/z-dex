import { Transformation } from '@/core/interfaces/responses/character-response.interface';
import { PressableProps } from 'react-native';

export interface TransformationCardProps extends PressableProps {
  transformation: Transformation;
}
