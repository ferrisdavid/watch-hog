"use client";

// Mantine.
import { Carousel } from "@mantine/carousel";

// Components.
import MoviePoster from "./MoviePoster/MoviePoster";

// Interfaces.
import { IMovie } from "@/interfaces/movies";

// Styles.
import styles from "./MovieCarousel.module.scss";

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
      slideSize={{ base: "100%", xs: "50%", sm: "33.33333%", md: "12.5%" }}
      slideGap={{ base: 0, sm: "md" }}
      controlsOffset='xs'
      controlSize={25}
      loop
    >
      {movies.map((movie, index) => (
        <Carousel.Slide
          key={movie.title}
          className="flex h-[100%] items-center justify-center"
        >
          <MoviePoster movie={movie} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
