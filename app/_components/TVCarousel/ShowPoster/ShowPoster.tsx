// Next.
import Image from "next/image";

// Icons.
import { FiStar } from "react-icons/fi";

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
    [key: string]: { path: string; size: "w500" | "original" };
  } = {
    poster: { path: show.poster_path, size: "w500" },
    backdrop: { path: show.backdrop_path, size: "original" },
  };

  return (
    <div className="relative transition-all">
      <div
        className={`${styles.overlay} absolute top-0 w-[100%] h-[100%] rounded`}
      />

      <Image
        className={`rounded h-[100%] w-[100%] min-h-[235px] ${
          imgType == "backdrop" && "aspect-video min-h-[420px]"
        }`}
        src={
          formatPosterUrl(imgConfig[imgType].path, imgConfig[imgType].size) ||
          ""
        }
        alt={`${show.name} poster`}
        width={1000}
        height={1000}
      />

      <div className="flex flex-col justify-between gap-2 text-text-secondary absolute bottom-0 p-2 rounded-b w-[100%]">
        <div className="flex flex-col gap-5">
          <Title order={3} className="!text-[18px] !line-clamp-2">
            {show.name}
          </Title>

          {imgType == "backdrop" && (
            <>
              <Title order={5} className="!text-bg-light-purple">
                {show.media_type.toUpperCase()} - {show.first_air_date} -{" "}
                {show.original_language.toUpperCase()}
              </Title>
              <Title order={6} className="!line-clamp-2">
                {show.overview}
              </Title>
            </>
          )}
        </div>

        <h4 className="flex items-center gap-1 text-bg-light-purple text-sm font-medium">
          <FiStar size={16} /> {show.vote_average.toPrecision(2)}
        </h4>
      </div>
    </div>
  );
}
