"use client";

import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useSearchMovieStore } from "../app/lib/utils/store";
import { Button } from "./ui/button";
import { useMovies } from "@/app/lib/hooks/useMovies";
import { Empty } from "./Empty";

const InfiniteMovieList = () => {
  const [searchValue, setSearchValue, Movies] = useSearchMovieStore((state) => [
    state.searchValue,
    state.setSearchValue,
    state.Movies,
  ]);

  useEffect(() => {
    if (searchValue === "") {
      const storedSearch = localStorage.getItem("searchValue") || "";
      if (storedSearch.length > 0) {
        setSearchValue(storedSearch);
      }
    }
  }, [searchValue, setSearchValue]);

  const {
    isLoading,
    isFetching,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useMovies(searchValue);

  if (!isLoading && !error && hasNextPage === false) {
    return <Empty />;
  }
  if (error) {
    return (
      <div className=" flex items-center justify-center rounded-lg bg-blues-8 p-4 text-gray-2">
        <p>An error has ocurred. Please try again later.</p>
      </div>
    );
  }

  return (
    <div
      id="movieList"
      className="flex w-full flex-col items-center justify-center gap-8 bg-gray-9 pb-10"
    >
      <div className="grid max-w-screen-2xl grid-cols-1 gap-y-6 px-6 pt-5 md:grid-cols-2  md:gap-x-12 md:px-12 lg:px-24 xl:grid-cols-4">
        {Movies &&
          Movies.length > 0 &&
          Movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

        {/* Infinite scrolling button */}
      </div>
      {hasNextPage && !isLoading && !error && (
        <div className="flex w-full items-center justify-center px-36">
          <Button
            variant="search"
            size="lg"
            onClick={() => !isFetching && fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default InfiniteMovieList;
