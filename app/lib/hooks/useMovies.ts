import { useInfiniteQuery } from "@tanstack/react-query";
import { getMovies } from "../actions";
import { useSearchMovieStore } from "../utils/store";
import { useEffect } from "react";

export const useMovies = (search: string) => {
  const [setMovies, Movies] = useSearchMovieStore((state) => [
    state.setMovies,
    state.Movies,
    state.searchValue,
  ]);

  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies", search],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await getMovies(search, pageParam);
      return res;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60, // 1minute
  });

  useEffect(() => {
    if (data) {
      const movies = data.pages.flatMap((page) => page.movies) ?? [];
      setMovies(movies);
    }
  }, [data, setMovies]);

  return {
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    isLoading,
    error,
    movies: Movies,
    hasNextPage,
  };
};
