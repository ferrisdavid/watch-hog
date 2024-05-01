"use client";

// Mantine.
import { Carousel } from "@mantine/carousel";

// Components.
import Card from "./MovieCard";

// Interfaces.
import { IFeaturedMovie } from "@/interfaces/movies";

// Styles.
import styles from "./FeaturedCard.module.scss";

// Props.
interface Props {
  items: IFeaturedMovie[];
}

export default function FeaturedCarousel({ items }: Props) {
  return (
    <Carousel
      height="100%"
      classNames={styles}
      className="grow"
      slideSize='100%'
      withIndicators
      loop
    >
      {items.map((item) => (
        <Carousel.Slide key={item.title} className="h-[100%] bg-bg-peach/5 backdrop-blur-md">
          <Card movie={item} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
