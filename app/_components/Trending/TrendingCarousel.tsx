"use client";

import { useRef } from 'react';

// Mantine.
import { Carousel } from "@mantine/carousel";
import Autoplay from 'embla-carousel-autoplay';

// Components.
import TrendingMovieSlide from "./TrendingMovieSlide";

// Interfaces.
import { IGenresMap, IMovie } from "@/interfaces/movies";

// Styles.
import styles from "./TrendingCarousel.module.scss";

// Props.
interface Props {
  movies: IMovie[];
  genres: IGenresMap;
}

export default function TrendingCarousel({ movies, genres }: Props) {
  const autoplay = useRef(Autoplay({ delay: 8000 }));

  return (
    <Carousel
      height="100%"
      classNames={styles}
      className="grow"
      slideSize="100%"
      controlSize={40}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      withIndicators
      loop
    >
      {movies.map((movie, index) => (
        <Carousel.Slide key={movie.title} className="flex h-[100%] items-stretch">
            <TrendingMovieSlide movie={movie} genres={genres} rank={index + 1}/>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
