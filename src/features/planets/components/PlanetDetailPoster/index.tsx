import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import { Image } from 'expo-image';
import { useNavigation } from 'expo-router';
import { StackActions } from 'expo-router/build/react-navigation';
import { useWindowDimensions, View } from 'react-native';

interface Props {
  image: string;
}

const PlanetDetailPoster = ({ image }: Props) => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const goToBack = () => {
    navigation.dispatch(StackActions.pop());
  };

  return (
    <View className="relative">
      <View
        style={{ height: height * 0.22 }}
        className="overflow-hidden rounded-3xl mt-[4.5rem]"
      >
        <Image
          source={{
            uri: image,
          }}
          style={{ width: '100%', height: '100%' }}
          transition={1000}
        />
      </View>
      <BaseButtonIcon
        onPress={goToBack}
        icon="arrow-left"
        size={22}
        className="absolute p-2.5 bg-surface-terceary border border-surface-terceary rounded-full"
      />
    </View>
  );
};

export default PlanetDetailPoster;
