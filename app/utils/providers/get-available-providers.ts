// Interfaces.
import { IProvidersResponse } from "@/interfaces/providers";

export async function getAvailableProviders(): Promise<{results: IProvidersResponse[]}> {
    // Watch Providers URL
    const url: string = process.env.API_URL + "/watch/providers/movie?language=en-US&watch_region=CA";

    const response = await fetch(url, { headers: { accept: 'application/json', Authorization: `Bearer ${process.env.ACCESS_TOKEN}` } });

    if (!response.ok) {
        throw new Error("Failed to Fetch Trending Movies");
    }

    return response.json();
}