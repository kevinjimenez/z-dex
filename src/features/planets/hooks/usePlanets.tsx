import { planetByIdAction } from '@/core/actions/planets/planet-by-id.action';
import { planetsAction } from '@/core/actions/planets/planets.action';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const usePlanets = () => {
  const planets = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['dragon_ball', 'planets'],
    queryFn: ({ pageParam }) => planetsAction(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.meta.currentPage < lastPage.meta.totalPages
        ? lastPage.meta.currentPage + 1
        : undefined,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const dragonBallPlanets = planets.data?.pages.flatMap((page) => page.items);

  return {
    dragonBallPlanets,
    isLoading: planets.isLoading,
    fetchNextPage: planets.fetchNextPage,
    hasNextPage: planets.hasNextPage,
    isFetchingNextPage: planets.isFetchingNextPage,
  };
};

export const usePlanetById = (id: number) => {
  const planet = useQuery({
    queryKey: ['dragon_ball', 'planet', id],
    queryFn: () => planetByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const dragonBallPlanet = planet.data;

  return {
    dragonBallPlanet,
    isLoading: planet.isLoading,
    refetch: planet.refetch,
  };
};
