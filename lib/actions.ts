"use server";

import axios from "axios";

const apiUrl = process.env.API_BASE_URL;
const apiToken = process.env.API_BEARER_TOKEN;

export async function getMovies(search: string) {
  const response = await axios.get(
    `${apiUrl}/search/keyword?query=${search}&page=1`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    }
  );
  console.log(response.data);
  return response.data;
}
