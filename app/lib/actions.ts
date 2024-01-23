"use server";

import axios from "axios";

const apiUrl = process.env.API_BASE_URL;
const apiToken = process.env.API_BEARER_TOKEN;

export async function getMovies(search: string, pageParam: Number) {
  const searchUrl = search
    ? `${apiUrl}/search/movie?query=${search}&page=${pageParam}`
    : `${apiUrl}/discover/movie?page=${pageParam}`;

  const response = await axios.get(searchUrl, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
  });

  const currentPage = Number(response.data.page);
  const allPages = Number(response.data.total_pages);
  const nextCursor = currentPage === allPages ? undefined : currentPage + 1;
  return {
    movies: response.data.results,
    nextCursor,
  };
}
