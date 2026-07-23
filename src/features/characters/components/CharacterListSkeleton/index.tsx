import BaseSkeleton from '@/shared/components/ui/BaseSkeleton';
import { View } from 'react-native';

const CharacterListSkeleton = () => {
  return (
    <View>
      {Array.from({ length: 10 }).map((_, index) => (
        <View key={index} className={index > 0 ? 'mt-4' : undefined}>
          <View className="rounded-xl border border-slate-200 flex-row gap-x-5 p-3 items-center bg-white">
            <BaseSkeleton width={60} height={60} className="rounded-lg" />
            <View className="flex-col justify-center flex-1 gap-y-2">
              <BaseSkeleton width="70%" height={20} />
              <BaseSkeleton width="40%" height={16} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CharacterListSkeleton;
