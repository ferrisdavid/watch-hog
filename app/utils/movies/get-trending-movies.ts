import { IMovie } from "@/interfaces/movies";

export async function getTrendingMovies(): Promise<{page: number, results: IMovie[], total_pages: number, total_results: number}> {
    // Trending Movies API URL
    const url: string = process.env.API_URL + "/trending/movie/day?language=en-US";

    const response = await fetch(url, { headers: { accept: 'application/json', Authorization: `Bearer ${process.env.ACCESS_TOKEN}` } });

    if (!response.ok) {
        throw new Error("Failed to Fetch Trending Movies");
    }

    return response.json();
}