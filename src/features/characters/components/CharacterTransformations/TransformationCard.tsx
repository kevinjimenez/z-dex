import { Text, View } from 'react-native';
import { TransformationCardProps } from './interfaces/transformation-card.interface';
import TransformationAvatar from './TransformationAvatar';

const TransformationCard = ({ transformation }: TransformationCardProps) => {
  return (
    <View className="flex-col gap-y-2">
      <TransformationAvatar
        contentFit="cover"
        contentPosition="top"
        transition={1000}
        customClassImage="rounded-xl"
        image={transformation.image}
      />
      <View className="flex-col w-28">
        <Text className="font-dmsans-bold text-xs" numberOfLines={1}>
          {transformation.name}
        </Text>
      </View>
    </View>
  );
};

export default TransformationCard;
