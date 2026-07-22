import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import CharacterAvatar from './CharacterAvatar';
import CharacterTitle from './CharacterTitle';

interface Props {
  image: string;
  race: string;
  name: string;
}

const CharacterPoster = ({ image, race, name }: Props) => {
  return (
    <View className="">
      <CharacterAvatar
        customClassContainer="rounded-lg bg-white w-full justify-center items-center"
        uri={image}
        transition={1000}
        contentFit="contain"
        width="100%"
        height={360}
      />

      <CharacterTitle race={race} name={name} />

      {/*Bajo hacia arriba*/}
      <LinearGradient
        colors={['rgba(251,243,233,0)', 'rgba(251,243,233,0.6)', '#FBF3E9']}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 128,
        }}
      />

      {/*Arriba hacia abajo*/}
      <LinearGradient
        colors={['#FBF3E9', 'rgba(251,243,233,0.6)', 'rgba(251,243,233,0)']}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 12,
        }}
      />

      {/*Izq hacia der*/}
      <LinearGradient
        colors={['#FBF3E9', 'rgba(251,243,233,0.6)', 'rgba(251,243,233,0)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: 128,
        }}
      />

      {/*Der hacia izq*/}
      <LinearGradient
        colors={['#FBF3E9', 'rgba(251,243,233,0.6)', 'rgba(251,243,233,0)']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: 128,
        }}
      />
    </View>
  );
};

export default CharacterPoster;
