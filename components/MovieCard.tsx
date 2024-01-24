import React from "react";
import { Movie } from "../app/lib/utils/store";
import Image from "next/image";
import { genres } from "@/app/lib/utils/genres";
import { shimmerUrl } from "./Shimmer";

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
    <div className="relative flex w-full flex-col rounded-md bg-blues-9">
      <div className="relative aspect-square w-full overflow-hidden rounded-t-md">
        {movie.poster_path ? (
          <Image
            src={`${imgUrl}${movie.poster_path}`}
            fill
            sizes="212px"
            className="object-cover"
            alt={movie.title}
            loading="lazy"
          />
        ) : (
          <Image
            src={`/images/placeholder.jpg`}
            fill
            sizes="512px"
            className="object-cover"
            alt={movie.title}
            loading="lazy"
            placeholder="blur"
            blurDataURL={shimmerUrl(1280, 720)}
          />
        )}
      </div>
      <div className="relative space-y-1 p-4">
        <div className="flex flex-row items-center justify-between">
          <h3 className="max-w-full overflow-hidden truncate text-lg font-bold text-gray-5 lg:text-2xl">
            {movie.title}
          </h3>
          <div className="bg-transparente flex items-center justify-center rounded-md border border-blues-1 p-1 text-sm font-semibold text-blues-1">
            <span>{movie.vote_average}</span>
          </div>
        </div>
        <h6 className="max-w-full overflow-hidden truncate text-sm font-medium text-gray-7 lg:text-base">
          {movie.release_date}
        </h6>
        <div className="flex flex-wrap items-center gap-x-1  text-xs font-normal lg:gap-x-2">
          {movie.genre_ids &&
            getGenreNames(movie.genre_ids).map((genreName) => (
              <span
                key={genreName}
                className="inline-block rounded-lg bg-blues-10 px-3 py-2.5 text-gray-7 md:px-2"
              >
                {genreName}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
