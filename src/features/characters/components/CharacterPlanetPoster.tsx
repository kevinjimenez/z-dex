import { Image, ImageProps } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

interface Props extends ImageProps {
  image: string;
}

const CharacterPlanetPoster = ({ image, ...rest }: Props) => {
  return (
    <>
      <Image
        // contentFit="cover"
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

export default CharacterPlanetPoster;
