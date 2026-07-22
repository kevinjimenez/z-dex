import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { PlanetPosterProps } from './interfaces/planet-poster.interface';

const PlanetPoster = ({ image, ...rest }: PlanetPosterProps) => {
  return (
    <>
      <Image
        source={{ uri: image }}
        style={{ width: '100%', height: '100%' }}
        {...rest}
      />

      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.75)']}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 70,
        }}
      />
    </>
  );
};

export default PlanetPoster;
