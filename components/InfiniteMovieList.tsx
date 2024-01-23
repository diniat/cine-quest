"use client";

import React from "react";
import MovieCard from "./MovieCard";
import { useSearchMovieStore } from "../app/lib/utils/store";
import { Button } from "./ui/button";
import { useMovies } from "@/app/lib/hooks/useMovies";
import { Empty } from "./Empty";

interface InfiniteMovieListProps {}

const InfiniteMovieList: React.FC<InfiniteMovieListProps> = () => {
  const [searchValue, apiResponse, setApiResponse] = useSearchMovieStore(
    (state) => [state.searchValue, state.apiResponse, state.setApiResponse]
  );

  const {
    movies,
    isLoading,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useMovies(searchValue);

  if (movies.length > 0) {
    setApiResponse(movies);
  }

  if (!isLoading && !error && movies.length === 0) {
    return <Empty />;
  }
  if (!isLoading && !error && hasNextPage === false) {
    return <p>No hay más resultados</p>;
  }
  if (error) {
    return <p>Ha habido un error</p>;
  }

  return (
    <div className="grid grid-cols-1 pt-10 md:grid-cols-2 md:gap-4 xl:grid-cols-4">
      {movies.length > 0 &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

      {/* Infinite scrolling button */}
      {hasNextPage && !isLoading && !error && (
        <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Loading more..." : "Load More"}
        </Button>
      )}
    </div>
  );
};

export default InfiniteMovieList;
