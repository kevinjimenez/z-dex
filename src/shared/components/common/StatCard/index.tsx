import Lucide, { LucideIconName } from '@react-native-vector-icons/lucide';
import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { StatCardProps } from './interfaces/stat-card.interface';
import Ionicons, {
  IoniconsIconName,
} from '@react-native-vector-icons/ionicons';

const StatCard = ({
  title,
  text,
  suffixIcon,
  size = 16,
  classContainer,
  classValueContainer,
  classText,
  classTitle,
  filled = false,
  color,
}: StatCardProps) => {
  return (
    <View
      className={twMerge(
        'flex-1 bg-white rounded-xl border border-surface-terceary p-4',
        classContainer,
      )}
    >
      {suffixIcon &&
        (filled ? (
          <Ionicons
            name={suffixIcon as IoniconsIconName}
            size={size}
            className={color}
          ></Ionicons>
        ) : (
          <Lucide
            name={suffixIcon as LucideIconName}
            size={size}
            className={color}
          />
        ))}
      <View className={twMerge('flex-col flex-1', classValueContainer)}>
        <Text
          className={twMerge(
            'uppercase text-sm font-dmsans-regular text-ink-secondary',
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
