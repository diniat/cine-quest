import { create } from "zustand";

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
  Movies: Movie[];
  setMovies: (Movies: Movie[]) => void;
}

export const useSearchMovieStore = create<SearchMovieStore>((set, get) => {
  return {
    searchValue: "",
    setSearchValue: (value) => set({ searchValue: value }),
    Movies: [],
    setMovies: (Movies) => set({ Movies }),
  };
});
