import { Text, View } from 'react-native';

interface Props {
  race: string;
  name: string;
}

const CharacterTitle = ({ race, name }: Props) => {
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

export default CharacterTitle;
