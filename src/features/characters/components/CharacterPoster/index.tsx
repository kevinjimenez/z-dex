import { LinearGradient } from 'expo-linear-gradient';
import CharacterAvatar from '../CharacterAvatar';
import PosterTitle from './PosterTitle';

interface Props {
  image: string;
  race: string;
  name: string;
}

const CharacterPoster = ({ image, race, name }: Props) => {
  return (
    <>
      <CharacterAvatar
        customClassContainer="rounded-lg bg-white w-full justify-center items-center"
        uri={image}
        transition={1000}
        contentFit="contain"
        width="100%"
        height={360}
      />

      <PosterTitle race={race} name={name} />

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

      {/*Esquina superior derecha hacia el centro*/}
      {/*<LinearGradient
        colors={['rgba(255,106,26,0.35)', 'rgba(255,106,26,0)']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0.1, y: 0.1 }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      />*/}

      {/*Esquina superior izquierda hacia el centro*/}
      {/*<LinearGradient
        colors={['rgba(255,106,26,0.35)', 'rgba(255,106,26,0)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.2, y: 0.2 }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      />*/}
    </>
  );
};

export default CharacterPoster;
