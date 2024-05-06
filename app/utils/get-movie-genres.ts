import { cache } from "react";

// Interfaces
import { IGenresMap } from '@/interfaces/movies';

async function getMovieGenres(): Promise<{genres: {id: number, name: string}[]}> {
    // Request URL.
    const url: string = process.env.API_URL + '/genre/movie/list';

    const response = await fetch(url, { next: { revalidate: Infinity }, headers: { accept: 'application/json', Authorization: `Bearer ${process.env.ACCESS_TOKEN}` } });

    if (!response.ok) {
        throw new Error("Failed to Fetch Movie Genres");
    }

    return response.json();
}

// Wrapper Method to Format the Movie Genre Data into a simpler Mapping between ID and Genre Name
export const getMovieGenreIDMap = cache(async () => {
    const availableGenres = await getMovieGenres();

    if (!availableGenres.genres) return {};
    
    const movieGenres: IGenresMap = {};
    availableGenres.genres.forEach((genre) => {
        movieGenres[genre.id] = genre.name;
    })

    return movieGenres;
})