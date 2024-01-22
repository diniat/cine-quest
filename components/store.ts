import { create } from "zustand";

interface Movie {
  id: number;
  name: string;
}

interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface SearchMovieStore {
  searchValue: string;
  setSearchValue: (value: string) => void;
  apiResponse: ApiResponse | null;
  setApiResponse: (response: ApiResponse | null) => void;
}

export const useSearchMovieStore = create<SearchMovieStore>((set) => ({
  searchValue: "",
  setSearchValue: (value) => set({ searchValue: value }),
  apiResponse: null,
  setApiResponse: (response) => set({ apiResponse: response }),
}));
