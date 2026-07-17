import { characterAction } from '@/core/actions/characters/characters.action';
import { useQuery } from '@tanstack/react-query';

export const useCharacters = () => {
  const characters = useQuery({
    queryKey: ['dragon_ball', 'characters'],
    queryFn: () => characterAction(),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    dragonBallCharacters: characters,
  };
};
