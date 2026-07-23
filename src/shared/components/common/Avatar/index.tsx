import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { AvatarProps } from './interfaces/avatar.interface';

const Avartar = ({
  text,
  customClassContainer,
  customClassText,
}: AvatarProps) => {
  return (
    <View
      className={twMerge(
        'size-14 rounded-2xl bg-primary justify-center',
        customClassContainer,
      )}
    >
      <Text
        className={twMerge(
          'text-center text-white text-2xl font-oswald-bold',
          customClassText,
        )}
      >
        {text}
      </Text>
    </View>
  );
};

export default Avartar;
