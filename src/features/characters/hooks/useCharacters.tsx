import { characterByIdAction } from '@/core/actions/characters/character-by-id.action';
import { charactersAction } from '@/core/actions/characters/characters.action';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useCharacters = () => {
  const characters = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['dragon_ball', 'characters'],
    queryFn: ({ pageParam }) => charactersAction(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.meta.currentPage < lastPage.meta.totalPages
        ? lastPage.meta.currentPage + 1
        : undefined,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const dragonBallCharacters = characters.data?.pages.flatMap(
    (page) => page.items,
  );

  return {
    dragonBallCharacters,
    isLoading: characters.isLoading,
    fetchNextPage: characters.fetchNextPage,
    hasNextPage: characters.hasNextPage,
    isFetchingNextPage: characters.isFetchingNextPage,
  };
};

export const useCharacterById = (id: number) => {
  const character = useQuery({
    queryKey: ['dragon_ball', 'character', id],
    queryFn: () => characterByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const dragonBallCharacter = character.data;
  const transformations = dragonBallCharacter?.transformations ?? [];

  return {
    dragonBallCharacter,
    isLoading: character.isLoading,
    transformations,
  };
};
