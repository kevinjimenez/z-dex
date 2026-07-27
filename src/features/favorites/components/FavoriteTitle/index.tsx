import BaseBadge from '@/shared/components/ui/BaseBadge';
import { Text, View } from 'react-native';
import { FavoriteTitleProps } from './interfaces/favorite-title.interface';

const FavoriteTitle = ({ name, race, affiliation }: FavoriteTitleProps) => {
  return (
    <View className="flex-col justify-center items-center gap-y-2.5">
      <Text className="text-ink-primary font-oswald-semibold text-4xl">
        {name}
      </Text>
      <View className="font-dmsans-regular justify-center items-center flex-row gap-x-5">
        <BaseBadge
          text={race}
          customClassText="uppercase text-sm text-primary font-dmsans-semibold"
        />
        <Text className="font-dmsans-regular text-xs text-ink-terceary">
          {affiliation}
        </Text>
      </View>
    </View>
  );
};

export default FavoriteTitle;
