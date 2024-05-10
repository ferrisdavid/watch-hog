// Next.
import Image from "next/image";

// Icons.
import { FiHeart, FiStar } from "react-icons/fi";

// Components.
import { Title } from "@mantine/core";

// Utils.
import {
  formatMovieGenres,
  formatPosterUrl,
} from "../../Trending/utils/movieFormatter";

// Interfaces.
import { ITVShow } from "@/interfaces/show";

// Styles.
import styles from "./ShowPoster.module.scss";

// Props.
interface Props {
  show: ITVShow;
  imgType?: "poster" | "backdrop";
}

export default function ShowPoster({ show, imgType = "poster" }: Props) {
  const imgConfig: {
    [key: string]: { path: string; size: "w500" | "original"; style: string };
  } = {
    poster: {
      path: show.poster_path,
      size: "w500",
      style: "aspect-[2/3]",
    },
    backdrop: {
      path: show.backdrop_path,
      size: "original",
      style: "aspect-video min-h-[420px]",
    },
  };

  return (
    <div className="relative transition-all">
      <div
        className={`${styles.overlay} absolute top-0 w-[100%] h-[100%] rounded`}
      />

      <Image
        className={`rounded border border-card-border/20 h-[100%] w-[100%] ${imgConfig[imgType].style}`}
        src={
          formatPosterUrl(imgConfig[imgType].path, imgConfig[imgType].size) ||
          ""
        }
        alt={`${show.name} poster`}
        width={1000}
        height={1000}
      />

      {/* Poster Top Info Section */}
      <div className="absolute top-3 left-3">
        <h4
          className={`bg-card-border/60 flex items-center gap-1 text-bg-light-purple text-sm font-medium rounded h-6 px-2`}
        >
          <FiStar size={16} /> {show.vote_average.toPrecision(2)}
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
      <div className={`flex flex-col justify-between gap-2 text-text-secondary absolute bottom-0 rounded-b w-[100%] ${imgType == "poster" ? 'p-2' : 'p-10'}`}>
        {imgType == "poster" && (
          <div className="flex flex-col gap-1">
            <Title order={3} className="!text-[18px] !line-clamp-2">
              {show.name}
            </Title>
            <h4 className="text-bg-light-purple text-sm font-medium">
              {show.first_air_date.slice(0, 4)}
            </h4>
          </div>
        )}

        {imgType == "backdrop" && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Title order={2} className="!line-clamp-2 gap">
                {show.name}
              </Title>
              <Title order={5} className="!text-bg-light-purple">
                {show.media_type.toUpperCase()} • {show.first_air_date} •{" "}
                {show.original_language.toUpperCase()}
              </Title>
            </div>
            <Title order={6} className="!line-clamp-2">
              {show.overview}
            </Title>
          </div>
        )}
      </div>
    </div>
  );
}
