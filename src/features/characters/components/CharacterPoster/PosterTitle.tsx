import { Text, View } from 'react-native';
import { PosterTitleProps } from './interfaces/poster-title.interface';

const PosterTitle = ({ race, name }: PosterTitleProps) => {
  return (
    <View className="flex-col gap-y-1 absolute bottom-0 z-10">
      <Text className="text-primary uppercase font-dmsans-bold text-xs">
        {race}
      </Text>
      <Text className="font-oswald-bold text-5xl" style={{ lineHeight: 56 }}>
        {name}
      </Text>
    </View>
  );
};

export default PosterTitle;
