import BaseSkeleton from '@/shared/components/ui/BaseSkeleton';
import { View } from 'react-native';

const CharacterTransformationsSkeleton = () => {
  return (
    <View className="mb-10">
      <View className="flex-row items-center gap-x-2 mb-4">
        <BaseSkeleton width={140} height={20} />
        <BaseSkeleton width={24} height={20} className="rounded-full" />
      </View>
      <View className="flex-row gap-x-4">
        <View className="flex-col gap-y-2">
          <BaseSkeleton width={100} height={120} className="rounded-xl" />
          <BaseSkeleton width={100} height={14} />
        </View>
        <View className="flex-col gap-y-2">
          <BaseSkeleton width={100} height={120} className="rounded-xl" />
          <BaseSkeleton width={100} height={14} />
        </View>
        <View className="flex-col gap-y-2">
          <BaseSkeleton width={100} height={120} className="rounded-xl" />
          <BaseSkeleton width={100} height={14} />
        </View>
      </View>
    </View>
  );
};

export default CharacterTransformationsSkeleton;
