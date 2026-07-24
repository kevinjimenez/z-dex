import { ReactNode } from 'react';

export interface BaseModalProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  customClassContent?: string;
}
