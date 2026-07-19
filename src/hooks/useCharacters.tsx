import { characterAction } from '@/core/actions/characters/characters.action';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useCharacters = () => {
  // const characters = useQuery({
  //   queryKey: ['dragon_ball', 'characters'],
  //   queryFn: () => characterAction(),
  //   staleTime: 1000 * 60 * 60 * 24,
  // });
  const characters = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['dragon_ball', 'characters'],
    queryFn: ({ pageParam }) => characterAction(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.meta.currentPage < lastPage.meta.totalPages
        ? lastPage.meta.currentPage + 1
        : undefined,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    dragonBallCharacters: characters.data?.pages.flatMap((page) => page.items),
    fetchNextPage: characters.fetchNextPage,
    hasNextPage: characters.hasNextPage,
  };
};
