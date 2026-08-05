import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import BaseThumbnail from '../../ui/BaseThumbnail';
import { AvatarProps } from './interfaces/avatar.interface';

const Avartar = ({
  text,
  image,
  customClassContainer,
  customClassText,
}: AvatarProps) => {
  return (
    <View
      className={twMerge(
        'size-14 rounded-2xl bg-ink-primary-700 justify-center items-center',
        customClassContainer,
      )}
    >
      {image ? (
        <BaseThumbnail image={image} height="100%" width="100%" />
      ) : (
        <Text
          className={twMerge(
            'text-center text-white text-2xl font-oswald-bold',
            customClassText,
          )}
        >
          {text}
        </Text>
      )}
    </View>
  );
};

export default Avartar;
