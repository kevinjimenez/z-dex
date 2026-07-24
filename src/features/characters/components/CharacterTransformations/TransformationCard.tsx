import { Pressable, Text, View } from 'react-native';
import { TransformationCardProps } from './interfaces/transformation-card.interface';
import TransformationAvatar from './TransformationAvatar';
import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';

const TransformationCard = ({
  transformation,
  onPress,
}: TransformationCardProps) => {
  return (
    <Pressable className="relative flex-col gap-y-2" onPress={onPress}>
      <TransformationAvatar
        contentFit="cover"
        contentPosition="top"
        transition={1000}
        customClassImage="rounded-xl"
        image={transformation.image}
      />
      <View className="flex-col w-[7.15rem]">
        <Text className="font-dmsans-bold text-xs" numberOfLines={1}>
          {transformation.name}
        </Text>
      </View>

      <BaseButtonIcon
        size={10}
        icon="expand"
        color="text-primary"
        className="absolute bg-white/80 top-2 right-2 size-5 items-center justify-center rounded-full"
      />
    </Pressable>
  );
};

export default TransformationCard;
