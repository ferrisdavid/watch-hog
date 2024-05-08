// Next.
import Image from "next/image";

// Icons.
import { FiStar } from "react-icons/fi";

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
}

export default function MoviePoster({ movie }: Props) {
  return (
    <div className="relative transition-all hover:cursor-pointer hover:scale-x-105 z-1">
      <div
        className={`${styles.overlay} absolute top-0 w-[100%] h-[100%] rounded`}
      />

      <Image
        className="rounded h-[100%] w-[100%]"
        src={formatPosterUrl(movie.poster_path) || ""}
        alt={`${movie.title} poster`}
        width={200}
        height={250}
      />

      <div className="flex flex-col justify-between gap-2 text-text-secondary absolute bottom-0 p-2 rounded-b w-[100%]">
        <div>
          <Title order={3} className="!text-[18px] !line-clamp-2	">
            {movie.title}
          </Title>
        </div>

        <h4 className="flex items-center gap-1 text-bg-light-purple text-sm font-medium">
          <FiStar size={16} /> {movie.vote_average.toPrecision(2)}
        </h4>
      </div>
    </div>
  );
}
