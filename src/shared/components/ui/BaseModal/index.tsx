import { Modal, Pressable } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { BaseModalProps } from './base-modal.interface';

const BaseModal = ({
  visible,
  onClose,
  children,
  customClassContent,
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
            'bg-white rounded-t-3xl p-4 items-center gap-y-3 h-1/2',
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
