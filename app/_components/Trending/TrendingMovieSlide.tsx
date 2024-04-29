// Mantine.
import { Button } from "@mantine/core";

// Components.
import Image from "next/image";

// Icons.
import { FiHelpCircle, FiHeart, FiStar } from "react-icons/fi";

// Interfaces.
import { IFeaturedMovie } from "@/interfaces/movies";

// Props.
interface Props {
  movie: IFeaturedMovie;
}

export default function TrendingMovieSlide({ movie }: Props) {
  return (
    <>
      <div className="flex grow flex-col gap-5 p-12 h-[100%]">
        <h2 className="text-dark-purple text-3xl font-bold">
          #1. {movie.title}
        </h2>
        <h4 className="flex items-center gap-1 text-card-border text-lg font-medium">
         <FiStar size={16}/> 4.5 - Movie - {movie.date}-01-18 - {movie.genre}
        </h4>
        <p className="text-dark-purple mt-6 font-medium">
          Po must train a new warrior when he's chosen to become the spiritual
          leader of the Valley of Peace. However, when a powerful shape-shifting
          sorceress sets her eyes on his Staff of Wisdom, he suddenly realizes
          he's going to need some help. Teaming up with a quick-witted corsac
          fox, Po soon discovers that heroes can be found in the most unexpected
          places.
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
          src={movie.imgURL || ""}
          alt="backdrop"
          className="absolute p-5 bg-center z-[-1] blur-3xl opacity-60"
          width={900}
          height={300}
        />

        <Image
          src={movie.imgURL || ""}
          alt={`${movie.title} poster`}
          className="rounded aspect-square"
          width={"400"}
          height={"200"}
        />
      </div>
    </>
  );
}
