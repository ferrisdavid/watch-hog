"use client";

// Mantine.
import { Carousel, CarouselProps } from "@mantine/carousel";

// Components.
import ShowPoster from "./ShowPoster/ShowPoster";

// Interfaces.
import { ITVShow } from "@/interfaces/show";

// Styles.
import styles from "./ShowCarousel.module.scss";

// Props.
interface Props extends CarouselProps {
  shows: ITVShow[];
  variant?: 'normal' | 'half'
}

export default function ShowCarousel({ shows, variant = 'normal', ...rest }: Props) {
  const slideSizes = {
    normal: { base: "100%", xs: "50%", sm: "33.33333%", md: "12.5%" },
    half: { base: "100%", sm: "50%", md: "50%" }
  };

  const imgTypes: {[key: string]: 'poster' | 'backdrop'} = {
    normal: 'poster',
    half: 'backdrop'
  }

  return (
    <Carousel
      height="100%"
      classNames={styles}
      className="grow"
      align="start"
      slideSize={slideSizes[variant]}
      slideGap={{ base: 0, sm: "md" }}
      controlsOffset='xs'
      controlSize={25}
      slidesToScroll={variant == 'half' ? 2 : 1}
      loop
      {...rest}
    >
      {shows.map((show) => (
        <Carousel.Slide
          key={show.name}
          className="flex h-[100%] items-center justify-center"
        >
          <ShowPoster show={show} imgType={imgTypes[variant]} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
