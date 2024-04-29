"use client";

// Mantine.
import { Carousel } from "@mantine/carousel";

// Components.
import TrendingMovieSlide from "./TrendingMovieSlide";

// Interfaces.
import { IFeaturedMovie } from "@/interfaces/movies";

// Styles.
import styles from "./TrendingCarousel.module.scss";

// Props.
interface Props {
  items: IFeaturedMovie[];
}

export default function TrendingCarousel({ items }: Props) {
  return (
    <Carousel
      height="100%"
      classNames={styles}
      className="grow"
      slideSize="100%"
      controlSize={40}
      withIndicators
      loop
    >
      {items.map((item) => (
        <Carousel.Slide key={item.title} className="flex h-[100%] items-stretch">
            <TrendingMovieSlide movie={item} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
