import React from "react";
import { Movie } from "../app/lib/utils/store";
import Image from "next/image";
import { genres } from "@/app/lib/utils/genres";

interface MovieCardProps {
  movie: Movie;
}

const imgUrl = process.env.NEXT_PUBLIC_IMG_BASE_URL;

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const getGenreNames = (genreIds: Number[] = []) => {
    // Filter genres based on genreIds
    const matchingGenres = genres.filter((genre) =>
      genreIds.includes(genre.id)
    );

    // Extract genre names
    const genreNames = matchingGenres.map((genre) => genre.name);

    return genreNames;
  };

  return (
    <div className="relative flex w-full flex-col rounded bg-blues-7">
      <div className="relative aspect-square w-full overflow-hidden rounded-t">
        {movie.poster_path && (
          <Image
            src={`${imgUrl}${movie.poster_path}`}
            fill
            sizes="512px"
            className="object-cover"
            alt={movie.title}
            loading="lazy"
          />
        )}
        {movie.adult && (
          <span className="absolute right-6 top-6 rounded bg-blues-5 px-3 py-2 text-xs font-medium">
            Adult
          </span>
        )}
      </div>
      <div className="relative space-y-9 px-6 pb-9 pt-7 lg:px-8">
        <div className="space-y-2">
          <h3 className="max-w-full overflow-hidden truncate text-lg  font-medium text-gray-5 lg:text-2xl">
            {movie.title}
          </h3>
          {movie.original_title && (
            <h5 className="max-w-full overflow-hidden truncate text-sm font-medium text-gray-5 lg:text-base">
              <span>Original Title: </span>
              {movie.original_title}
            </h5>
          )}
          <h6 className="max-w-full overflow-hidden truncate text-sm font-medium text-gray-5 lg:text-base">
            Release Date: {movie.release_date}
          </h6>
        </div>
        <div className="flex w-full flex-wrap items-center gap-x-1 gap-y-1.5 lg:gap-x-2"></div>
        <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5 text-xs font-normal lg:gap-x-2">
          {movie.genre_ids &&
            getGenreNames(movie.genre_ids).map((genreName) => (
              <span
                key={genreName}
                className="inline-block rounded-lg bg-blues-6 px-3 py-2.5 text-gray-5 md:px-2"
              >
                {genreName}
              </span>
            ))}
          {movie.overview && (
            <span className="inline-block rounded-lg  bg-blues-6 px-3 py-2.5 text-gray-5">
              {movie.overview}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
