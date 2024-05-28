// Mantine.
import { Button } from "@mantine/core";

// Components.
import Image from "next/image";

// Icons.
import { FiHelpCircle, FiHeart, FiStar } from "react-icons/fi";

// Interfaces.
import { IMovie, IGenresMap } from "@/interfaces/movies";

// Utils.
import { formatMovieGenres, formatPosterUrl } from "./utils/movieFormatter";

// Props.

interface Props {
  movie: IMovie;
  genres: IGenresMap;
  rank: number;
}

export default function TrendingMovieSlide({ movie, genres, rank }: Props) {
  return (
    <>
      <div className="relative w-[100%] flex grow self-center items-center justify-center">
        <Image
          src={formatPosterUrl(movie.backdrop_path, "original") || ""}
          alt={`${movie.title} poster`}
          className="w-[100%] max-h-[750px] aspect-square"
          width={"1920"}
          height={"1080"}
          quality={100}
        />

        <div
          id="meta-overlay"
          className="absolute left-0 w-[80%] min-h-[100%] bg-gradient-to-r from-bg-primary/60 from-25%"
        />

        <div className="absolute left-0 bottom-[15%] w-[45%] flex flex-col gap-3 p-14">
          <h1 className="text-text-secondary text-6xl font-bold line-clamp-2">
            {movie.title}
          </h1>
          <h3 className="text-text-secondary text-xl font-medium line-clamp-2">
            Trending <span className="text-bg-light-purple">#{rank}</span> Today
          </h3>
          <h4 className="flex items-center gap-1 text-text-secondary text-lg font-medium line-clamp-2 capitalize">
            <FiStar size={16} className="text-bg-light-purple" />{" "}
            {movie.vote_average.toPrecision(2)} • {movie.media_type} •{" "}
            {movie.release_date} • {formatMovieGenres(movie.genre_ids, genres)}
          </h4>
          <p className="text-text-secondary mt-6 font-medium line-clamp-4">
            {movie.overview}
          </p>
          <div className="flex gap-2 justify-between items-center">
            <div id="provider-logos"></div>
            <div className="flex gap-2">
              <Button className="flex items-center justify-center !bg-text-secondary">
                <FiHelpCircle className="text-bg-purple" size={24} />
              </Button>
              <Button className="flex items-center justify-center !bg-dark-purple">
                <FiHeart className="text-text-secondary" size={24} />
              </Button>
            </div>
          </div>
        </div>

        <div
          id="bottom-blend-overlay"
          className="absolute bottom-0 left-0 w-[100%] min-h-[150px] bg-gradient-to-t from-bg-primary from-15%"
        />
      </div>
    </>
  );
}
