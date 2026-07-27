import BaseThumbnail from '@/shared/components/ui/BaseThumbnail';
import { LinearGradient } from 'expo-linear-gradient';
import { useWindowDimensions } from 'react-native';
import { CharacterPosterProps } from './interfaces/character-poster.interface';
import PosterTitle from './PosterTitle';

const CharacterPoster = ({ character }: CharacterPosterProps) => {
  const { width } = useWindowDimensions();
  const avatarSize = width * 0.9;

  return (
    <>
      <BaseThumbnail
        image={character.image}
        height={avatarSize}
        transition={1000}
        contentFit="contain"
        customClassContainer="rounded-lg justify-center items-center bg-primary-200"
      />

      <PosterTitle race={character.race} name={character.name} />

      {/*Bajo hacia arriba*/}
      <LinearGradient
        colors={[
          'rgba(251,243,233,0)',
          'rgba(251,243,233,0.6)',
          'rgba(243, 242, 240, 0.99)',
        ]}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 128,
        }}
      />

      {/*Arriba hacia abajo*/}
      {/*<LinearGradient
        colors={[
          'rgba(243, 242, 240, 0.99)',
          'rgba(251,243,233,0.6)',
          'rgba(251,243,233,0)',
        ]}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 12,
        }}
      />*/}

      {/*Izq hacia der*/}
      <LinearGradient
        colors={[
          'rgba(243, 242, 240, 0.99)',
          'rgba(251,243,233,0.6)',
          'rgba(251,243,233,0)',
        ]}
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
        colors={[
          'rgba(243, 242, 240, 0.99)',
          'rgba(251,243,233,0.6)',
          'rgba(251,243,233,0)',
        ]}
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
