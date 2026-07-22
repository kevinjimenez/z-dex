import Lucide from '@react-native-vector-icons/lucide';
import { Pressable, Text } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { BaseButtonProps } from './base-button.interface';

const BaseButton = ({
  text,
  prefixIcon,
  variant,
  suffixIcon,
  disabled = false,
  size = 23,
  color = 'primary',
  onPress,
  className,
  ...rest
}: BaseButtonProps) => {
  const VARIANT_STYLES: Record<
    NonNullable<BaseButtonProps['variant']>,
    Record<
      NonNullable<BaseButtonProps['color']>,
      { button: string; text: string; icon: string }
    >
  > = {
    contained: {
      primary: { button: 'bg-primary', text: 'text-white', icon: 'text-white' },
      secondary: {
        button: 'bg-white border border-slate-200',
        text: 'text-primary',
        icon: 'text-primary',
      },
    },
    soft: {
      primary: {
        button: 'bg-primary-50 border-primary border border-primary',
        text: 'text-primary',
        icon: 'text-primary',
      },
      secondary: {
        button: 'bg-white',
        text: 'text-primary',
        icon: 'text-primary',
      },
    },
    outline: {
      primary: {
        button: 'bg-transparent border border-primary',
        text: 'text-primary',
        icon: 'text-primary',
      },
      secondary: {
        button: 'bg-transparent border border-slate-200',
        text: 'text-primary',
        icon: 'text-primary',
      },
    },
  };

  const styles = VARIANT_STYLES[variant ?? 'contained'][color];

  return (
    <Pressable
      className={twMerge(
        `w-full p-4 rounded-xl justify-center items-center flex-row gap-x-3 ${styles.button}`,
        className,
      )}
      disabled={disabled}
      onPress={onPress}
      {...rest}
    >
      {prefixIcon && (
        <Lucide name={prefixIcon} size={size} className={styles.icon} />
      )}
      <Text className={`text-center font-dmsans-bold ${styles.text}`}>
        {text}
      </Text>
      {suffixIcon && (
        <Lucide name={suffixIcon} size={size} className={styles.icon} />
      )}
    </Pressable>
  );
};

export default BaseButton;
