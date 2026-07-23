import BaseSkeleton from '@/shared/components/ui/BaseSkeleton';
import { View } from 'react-native';

const CharacterInfoSectionSkeleton = () => {
  return (
    <View className="flex-col gap-y-3 mb-8">
      <View className="flex-row flex-wrap gap-x-3">
        <BaseSkeleton width={100} height={50} />
        <BaseSkeleton width={100} height={50} />
      </View>
      <View className="flex-row flex-wrap gap-x-2">
        <BaseSkeleton width={140} height={40} />
        <BaseSkeleton width={140} height={40} />
      </View>
      <BaseSkeleton width="100%" height={100} />
    </View>
  );
};

export default CharacterInfoSectionSkeleton;
