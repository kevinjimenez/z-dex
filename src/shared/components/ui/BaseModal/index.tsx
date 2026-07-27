import { Modal, Pressable, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { BaseModalProps, BaseModalSize } from './base-modal.interface';

const SIZE_CLASSES: Record<BaseModalSize, string> = {
  half: 'h-1/2',
  twoThirds: 'h-2/3',
  full: 'flex-1',
};

const BaseModal = ({
  visible,
  onClose,
  children,
  customClassContent,
  size = 'half',
}: BaseModalProps) => {
  const contentClassName = twMerge(
    'bg-white rounded-t-3xl overflow-hidden items-center gap-y-3',
    SIZE_CLASSES[size],
    customClassContent,
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      {size === 'full' ? (
        // Sin backdrop ni Pressable de por medio: nada que le robe el gesto
        // de scroll al contenido (ej. un ScrollView) del modal a pantalla completa.
        <View className="flex-1">
          <View className={contentClassName}>{children}</View>
        </View>
      ) : (
        <Pressable
          className="flex-1 bg-black/60 justify-end"
          onPress={onClose}
        >
          {/* Pressable sin onPress: absorbe el tap para que no cierre el modal
              al tocar el contenido, sin bloquear el drag de un scroll interno. */}
          <Pressable className={contentClassName}>{children}</Pressable>
        </Pressable>
      )}
    </Modal>
  );
};

export default BaseModal;
