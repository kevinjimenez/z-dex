import { useCharacters } from '@/hooks/useCharacters';
import { FlatList, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BaseBadge from '@/shared/components/ui/BaseBadge';
import Ionicons from '@react-native-vector-icons/ionicons';
import LabelIcon from '@/shared/components/LabelIcon';

const AppScreen = () => {
  const { top } = useSafeAreaInsets();
  const { dragonBallCharacters } = useCharacters();
  return (
    <View className="bg-blue-200 flex-1" style={{ paddingTop: top }}>
      <Text className="font-bold">AppScreen</Text>
      <FlatList
        data={dragonBallCharacters.data}
        keyExtractor={(item) => String(item.id)}
        ItemSeparatorComponent={() => <View className="h-5" />}
        renderItem={({ item }) => {
          return (
            <View className="rounded-lg border flex-row gap-x-5 px-5 py-2">
              <View className="rounded-lg bg-slate-400">
                <Image
                  contentFit="cover"
                  // ancla el recorte de "cover" arriba, para mostrar la cara y no el cuerpo completo
                  contentPosition="top"
                  transition={1000}
                  source={{ uri: item.image }}
                  className="bg-green-300 rounded-full"
                  style={{ width: 60, height: 60 }}
                />
              </View>
              <View className="bg-yellow-100 flex-col justify-center flex-1 gap-y-2">
                <Text className="text-[1.2rem]">{item.name}</Text>
                <View className="bg-blue-100 flex-row items-center">
                  <BaseBadge text={item.race} customClassBadge="rounded-md" />
                  <LabelIcon text={item.ki} prefixIcon="add" />
                </View>
              </View>
              <Text>0</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default AppScreen;
