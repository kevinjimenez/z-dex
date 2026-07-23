import BaseSkeleton from '@/shared/components/ui/BaseSkeleton';
import { Text, View } from 'react-native';

const CharacterDetailSekeleton = () => {
  return (
    <>
      <View className="flex-col gap-y-3 mb-8">
        {/*<BaseSkeleton width="100%" height={300} />*/}
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

      <View className="flex-1 gap-y-2">
        <Text className="uppercase text-lg font-oswald-bold">Biografía</Text>
        <View className="gap-y-2">
          <BaseSkeleton width="100%" height={16} />
          <BaseSkeleton width="100%" height={16} />
          <BaseSkeleton width="80%" height={16} />
          <BaseSkeleton width="60%" height={16} />
        </View>
      </View>
    </>
  );
};

export default CharacterDetailSekeleton;
