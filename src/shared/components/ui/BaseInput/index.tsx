import Lucide, { LucideIconName } from '@react-native-vector-icons/lucide';
import { useState } from 'react';
import {
  BlurEvent,
  FocusEvent,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
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
  style,
  onFocus,
  onBlur,
  ...props
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: FocusEvent) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: BlurEvent) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <View className="justify-center">
      {prefixIcon && (
        <View className="absolute left-4 z-10">
          <Lucide
            className={twMerge('text-[#a6aeb6]', color)}
            name={prefixIcon}
            size={size}
          />
        </View>
      )}
      <TextInput
        placeholder={placeholder}
        className={twMerge('border rounded-xl p-4', classInput)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[
          {
            paddingLeft: prefixIcon ? 44 : undefined,
            paddingRight: suffixIcon ? 44 : undefined,
            borderColor: isFocused ? '#b0ada6' : '#e4e2de',
            backgroundColor: isFocused ? '#ffffff' : 'transparent',
            color: isFocused ? '#242320' : undefined,
          },
          style,
        ]}
        {...props}
      />
      {suffixIcon && (
        <View className="absolute right-4 z-10">
          <Lucide className="text-[#a6aeb6]" name={suffixIcon} size={size} />
        </View>
      )}
    </View>
  );
};

export default BaseInput;
