// Next.
import Image from "next/image";

// Icons.
import { FiHeart, FiStar } from "react-icons/fi";

// Components.
import { Title } from "@mantine/core";

// Utils.
import { formatPosterUrl } from "../../Trending/utils/movieFormatter";

// Interfaces.
import { IMovie } from "@/interfaces/movies";

// Styles.
import styles from "./MoviePoster.module.scss";

// Props.
interface Props {
  movie: IMovie;
  imgType?: "poster" | "backdrop";
}

export default function MoviePoster({ movie, imgType = "poster" }: Props) {
  const imgConfig: {
    [key: string]: { path: string; size: "w500" | "original"; style: string };
  } = {
    poster: {
      path: movie.poster_path,
      size: "w500",
      style: "aspect-[2/3]",
    },
    backdrop: {
      path: movie.backdrop_path,
      size: "original",
      style: "aspect-video min-h-[420px]",
    },
  };

  return (
    <div className="relative transition-all hover:cursor-pointer">
      <div
        className={`${styles.overlay} absolute top-0 w-[100%] h-[100%] rounded`}
      />

      <Image
        className={`rounded border border-card-border/20 h-[100%] w-[100%] ${imgConfig[imgType].style}`}
        src={
          formatPosterUrl(imgConfig[imgType].path, imgConfig[imgType].size) ||
          ""
        }
        alt={`${movie.title} poster`}
        width={200}
        height={250}
      />

      {/* Poster Top Info Section */}
      <div className="absolute top-3 left-3">
        <h4
          className={`bg-card-border/60 flex items-center gap-1 text-bg-light-purple text-sm font-medium rounded h-6 px-2`}
        >
          <FiStar size={16} /> {movie.vote_average.toPrecision(2)}
        </h4>
      </div>

      <div className="absolute top-3 right-3">
        <h4
          className={`bg-card-border/60 flex items-center justify-center gap-1 text-bg-light-purple text-sm font-medium rounded w-8 h-8`}
        >
          <FiHeart size={18} />
        </h4>
      </div>

      {/* Poster Bottom Info Section */}
      <div className="flex flex-col justify-between gap-2 text-text-secondary absolute bottom-0 p-2 rounded-b w-[100%]">
        <div className="flex flex-col gap-1">
          {imgType == "poster" && (
            <>
              <Title order={3} className="!text-[18px] !line-clamp-2">
                {movie.title}
              </Title>
              <h4 className="text-bg-light-purple text-sm font-medium">
                {movie.release_date.slice(0, 4)}
              </h4>
            </>
          )}

          {imgType == "backdrop" && (
            <>
              <Title order={2} className="!line-clamp-2">
                {movie.title}
              </Title>
              <Title order={5} className="!text-bg-light-purple">
                {movie.media_type.toUpperCase()} • {movie.release_date} • {movie.original_language.toUpperCase()}
              </Title>
              <Title order={6} className="!line-clamp-2">
                {movie.overview}
              </Title>
            </>
          )}
        </div>
      </div>

    </div>
  );
}
