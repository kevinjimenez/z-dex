import { Pressable, Text, View } from 'react-native';
import { TransformationCardProps } from './interfaces/transformation-card.interface';
import TransformationAvatar from './TransformationAvatar';

const TransformationCard = ({
  transformation,
  onPress,
}: TransformationCardProps) => {
  return (
    <Pressable className="flex-col gap-y-2" onPress={onPress}>
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
    </Pressable>
  );
};

export default TransformationCard;
