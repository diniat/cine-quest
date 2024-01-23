import { useInfiniteQuery } from "@tanstack/react-query";
import { getMovies } from "../actions";

export const useMovies = (search: string) => {
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies", search],
    queryFn: async ({ pageParam }) => {
      const res = await getMovies(search, pageParam);
      return res;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 3,
  });

  return {
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    error,
    movies: data?.pages.flatMap((page) => page.movies) ?? [],
    hasNextPage,
  };
};
