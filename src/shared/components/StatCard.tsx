import Lucide, { LucideIconName } from '@react-native-vector-icons/lucide';
import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props {
  title: string;
  text: string;
  suffixIcon?: LucideIconName;
  size?: number;
  color?: string;
  classContainer?: string;
  classValueContainer?: string;
  classTitle?: string;
  classText?: string;
}

const StatCard = ({
  title,
  text,
  suffixIcon,
  size = 16,
  classContainer,
  classValueContainer,
  classText,
  classTitle,
  color,
}: Props) => {
  return (
    <View
      className={twMerge(
        'flex-1 bg-white rounded-xl border border-gray-200 p-4',
        classContainer,
      )}
    >
      {suffixIcon && <Lucide name={suffixIcon} size={size} className={color} />}
      <View className={twMerge('flex-col flex-1', classValueContainer)}>
        <Text
          className={twMerge(
            'uppercase text-xs font-dmsans-regular',
            classTitle,
          )}
        >
          {title}
        </Text>
        <Text
          className={twMerge(
            'text-primary text-2xl font-oswald-bold',
            classText,
          )}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

export default StatCard;
