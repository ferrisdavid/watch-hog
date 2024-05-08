// Interfaces.
import { ITVShow } from "@/interfaces/show";

export async function getTopTV(): Promise<{
  page: number;
  results: ITVShow[];
  total_pages: number;
  total_results: number;
}> {
  // Top Rated Movies URL
  const url: string =
    process.env.API_URL + "/tv/top_rated?language=en-US&page=1";

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to Fetch Trending Movies");
  }

  return response.json();
}
