import Lucide, { LucideIconName } from '@react-native-vector-icons/lucide';
import { TextInput, TextInputProps, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props extends TextInputProps {
  prefixIcon?: LucideIconName;
  suffixIcon?: LucideIconName;
  classInput?: string;
  color?: string;
  size?: number;
}

const BaseInput = ({
  prefixIcon,
  suffixIcon,
  classInput,
  color,
  size,
  placeholder,
  ...props
}: Props) => {
  return (
    <View className="justify-center">
      {prefixIcon && (
        <Lucide
          className={twMerge('absolute z-10 left-4 text-[#a6aeb6]', color)}
          name={prefixIcon}
          size={size}
        />
      )}
      <TextInput
        placeholder={placeholder}
        className={twMerge(
          'border border-surface-terceary p-4 rounded-xl focus:border-muted-primary focus:bg-white focus:text-ink-primary',
          prefixIcon && 'pl-11',
          suffixIcon && 'pr-11',
          classInput,
        )}
        {...props}
      />
      {suffixIcon && (
        <Lucide
          className="absolute z-10 right-4 text-[#a6aeb6]"
          name={suffixIcon}
          size={size}
        />
      )}
    </View>
  );
};

export default BaseInput;
