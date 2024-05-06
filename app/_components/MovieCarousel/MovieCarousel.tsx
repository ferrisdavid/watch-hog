"use client";

// Mantine.
import { Carousel } from "@mantine/carousel";
import { Title } from "@mantine/core";

// Utils.
import {
  formatMovieGenres,
  formatPosterUrl,
} from "../Trending/utils/movieFormatter";

// Interfaces.
import { IMovie } from "@/interfaces/movies";

// Icons.
import { FiStar } from "react-icons/fi";

// Styles.
import styles from "./MovieCarousel.module.scss";
import Image from "next/image";

// Props.
interface Props {
  movies: IMovie[];
}

export default function MovieCarousel({ movies }: Props) {
  return (
    <Carousel
      height="100%"
      classNames={styles}
      className="grow"
      align="start"
      slideSize={{ base: "100%", sm: "33.33333%", md: "12.5%" }}
      slideGap={{ base: 0, sm: "md" }}
      controlSize={40}
      loop
    >
      {movies.map((movie, index) => (
        <Carousel.Slide
          key={movie.title}
          className="flex h-[100%] items-center justify-center"
        >
          <div className="relative">
            <div className={`${styles.overlay} rounded`} />

            <Image
              className="rounded h-[100%] w-[100%]"
              src={formatPosterUrl(movie.poster_path) || ""}
              alt={`${movie.title} poster`}
              width={200}
              height={250}
            />

            <div className="flex items-center justify-between gap-2 text-text-secondary absolute bottom-0 p-7 rounded-b">
              <div>
                <Title order={3} className={styles.title}>
                  {movie.title}
                </Title>
                {/* <Title className={styles.category} size="xs">
                  {formatMovieGenres}
                </Title> */}
              </div>

              <h4 className="flex items-center gap-1 text-card-border text-sm font-medium">
                <FiStar size={16} /> {movie.vote_average.toPrecision(2)}
              </h4>
            </div>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
