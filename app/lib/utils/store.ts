import { create, StateCreator } from "zustand";
import { persist, createJSONStorage, PersistOptions } from "zustand/middleware";

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: Number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface SearchMovieStore {
  searchValue: string;
  setSearchValue: (value: string) => void;
  apiResponse: Movie[] | null;
  setApiResponse: (response: Movie[] | null) => void;
}

type MyPersist = (
  config: StateCreator<SearchMovieStore>,
  options: PersistOptions<SearchMovieStore>
) => StateCreator<SearchMovieStore>;

export const useSearchMovieStore = create<SearchMovieStore, []>(
  (persist as MyPersist)(
    (set, get): SearchMovieStore => ({
      searchValue: "",
      apiResponse: null,
      setSearchValue: (searchValue) => {
        set({ searchValue });
      },
      setApiResponse: (apiResponse) => {
        set({ apiResponse });
      },
    }),
    {
      name: "movies",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
