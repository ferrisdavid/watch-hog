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
      <div className="flex grow flex-col gap-5 p-12 h-[100%]">
        <h2 className="text-dark-purple text-3xl font-bold">
          #{rank}. {movie.title}
        </h2>
        <h4 className="flex items-center gap-1 text-card-border text-lg font-medium">
         <FiStar size={16}/> {movie.vote_average.toPrecision(2)} - {movie.media_type} - {movie.release_date} - {formatMovieGenres(movie.genre_ids, genres)}
        </h4>
        <p className="text-dark-purple mt-6 font-medium">
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

      <div className="relative p-12 min-w-[50%] flex grow self-center items-center justify-center">
        <Image
          src={formatPosterUrl(movie.poster_path) || ""}
          alt="backdrop"
          className="absolute p-5 bg-center z-[-1] blur-3xl opacity-50"
          width={900}
          height={300}
        />

        <Image
          src={formatPosterUrl(movie.poster_path) || ""}
          alt={`${movie.title} poster`}
          className="rounded aspect-square"
          width={"400"}
          height={"200"}
        />
      </div>
    </>
  );
}
