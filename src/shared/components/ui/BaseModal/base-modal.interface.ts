import { ReactNode } from 'react';

export type BaseModalSize = 'half' | 'twoThirds' | 'full';

export interface BaseModalProps {
  visible: boolean;
  onClose?: () => void;
  children: ReactNode;
  customClassContent?: string;
  size?: BaseModalSize;
}
