import { Modal, Pressable } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { BaseModalProps, BaseModalSize } from './base-modal.interface';

const SIZE_CLASSES: Record<BaseModalSize, string> = {
  half: 'h-1/2',
  twoThirds: 'h-2/3',
  full: 'h-full',
};

const BaseModal = ({
  visible,
  onClose,
  children,
  customClassContent,
  size = 'half',
}: BaseModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable className="flex-1 bg-black/60 justify-end" onPress={onClose}>
        <Pressable
          className={twMerge(
            'bg-white rounded-t-3xl overflow-hidden items-center gap-y-3',
            SIZE_CLASSES[size],
            customClassContent,
          )}
        >
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default BaseModal;
