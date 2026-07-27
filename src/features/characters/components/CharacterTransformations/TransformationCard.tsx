import { Pressable, Text, useWindowDimensions, View } from 'react-native';
import { TransformationCardProps } from './interfaces/transformation-card.interface';
import TransformationAvatar from './TransformationAvatar';
import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';

const TransformationCard = ({
  transformation,
  onPress,
}: TransformationCardProps) => {
  const { width } = useWindowDimensions();
  const avatarSize = width * 0.3;

  return (
    <Pressable className="relative flex-col gap-y-2" onPress={onPress}>
      <TransformationAvatar
        style={{
          width: avatarSize,
          height: avatarSize,
        }}
        contentFit="contain"
        transition={1000}
        customClassImage="rounded-xl"
        image={transformation.image}
        width="100%"
        height="100%"
      />
      <View className="flex-col w-[7.15rem]">
        <Text className="font-dmsans-bold text-xs" numberOfLines={1}>
          {transformation.name}
        </Text>
      </View>

      <BaseButtonIcon
        size={14}
        icon="expand"
        color="text-primary"
        className="absolute bg-white/80 top-2 right-2 size-7 items-center justify-center rounded-full"
      />
    </Pressable>
  );
};

export default TransformationCard;
