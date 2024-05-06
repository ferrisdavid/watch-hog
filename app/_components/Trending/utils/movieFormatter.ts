/****************************************************************
* Data Formatter Functions to Facilitate Rendering in Tredning Movie Slide Component. 
*****************************************************************/
export const formatPosterUrl = (imgDataPath: string) => {
    return 'https://image.tmdb.org/t/p/w500' + imgDataPath;
}

export const formatMovieGenres = (genreIds: number[], movieGenres: { [id: number]: string }) => {
    if (!genreIds || !genreIds.length) return 'Uncategorized';

    let genreString: string = ''; 
    genreIds.slice(0, 3).forEach((genre) => {
        genreString += movieGenres[genre] + '/';
    })

    return genreString.slice(0, genreString.length - 1);
}