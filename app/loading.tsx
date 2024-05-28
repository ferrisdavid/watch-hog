'use client';

// Components.
import { Skeleton } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

// Icons.
import { RiMovie2Fill } from "react-icons/ri";
import { FiZap, FiStar, FiTrendingUp, FiAirplay } from "react-icons/fi";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section
        id="trending"
        className="flex flex-col gap-5 items-stretch justify-between w-[100%]"
      >
        <div className="relative">
          <div className="flex flex-col bg-[#FFF5F9]/25 grow backdrop-blur-lg rounded-md min-h-[500px] justify-between">
            <Skeleton></Skeleton>
          </div>
        </div>
      </section>

      <div className="w-full p-5 flex flex-col gap-10">
        <section
          id="quick-filter"
          className="py-2 px-5 flex flex-col gap-5 items-stretch justify-between"
        >
          <header className="flex gap-3 items-center text-dark-purple text-xl font-bold">
            <FiZap className="fill-dark-purple" />
            <h1>Quick Explore</h1>
          </header>

          <div id="pills" className="flex gap-2 items-center justify-evenly">
            <Skeleton height={85}></Skeleton>
            <Skeleton height={85}></Skeleton>
            <Skeleton height={85}></Skeleton>
            <Skeleton height={85}></Skeleton>
            <Skeleton height={85}></Skeleton>
            <Skeleton height={85}></Skeleton>
            <Skeleton height={85}></Skeleton>
            <Skeleton height={85}></Skeleton>
            <Skeleton height={85}></Skeleton>
            <Skeleton height={85}></Skeleton>
            <Skeleton height={85}></Skeleton>
            <Skeleton height={85}></Skeleton>
          </div>
        </section>

        <section
          id="now-playing"
          className="py-2 px-5 flex flex-col gap-5 items-stretch justify-between"
        >
          <header className="flex gap-3 items-center text-bg-light-purple text-xl font-bold">
            <RiMovie2Fill className="fill-bg-light-purple" />
            <h1>Now Playing</h1>
          </header>

          <div className="flex gap-2 items-center">
            <Carousel
              height="100%"
              className="grow"
              align="start"
              slideSize={{
                base: "100%",
                xs: "50%",
                sm: "33.33333%",
                md: "12.5%",
              }}
              slideGap={{ base: 0, sm: "md" }}
              controlsOffset="xs"
              controlSize={25}
              loop
            >
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
            </Carousel>
          </div>
        </section>

        <section
          id="top-rated"
          className="py-2 px-5 flex flex-col gap-5 items-stretch justify-between"
        >
          <header className="flex gap-3 items-center text-bg-light-purple text-xl font-bold">
            <FiStar className="fill-bg-light-purple" />
            <h1>Top Movies</h1>
          </header>

          <div className="flex gap-2 items-center">
            <Carousel
              height="100%"
              className="grow"
              align="start"
              slideSize={{
                base: "100%",
                xs: "50%",
                sm: "33.33333%",
                md: "12.5%",
              }}
              slideGap={{ base: 0, sm: "md" }}
              controlsOffset="xs"
              controlSize={25}
              loop
            >
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
            </Carousel>
          </div>
        </section>

        <section
          id="trending-tv"
          className="py-2 px-5 flex flex-col gap-5 items-stretch justify-between"
        >
          <header className="flex gap-3 items-center text-bg-light-purple text-xl font-bold">
            <FiTrendingUp className="fill-bg-light-purple" />
            <h1>Trending TV</h1>
          </header>

          <div className="flex gap-2 items-center">
            <Carousel
              height="100%"
              className="grow"
              align="start"
              slideSize={{
                base: "100%",
                xs: "50%",
                sm: "33.33333%",
                md: "12.5%",
              }}
              slideGap={{ base: 0, sm: "md" }}
              controlsOffset="xs"
              controlSize={25}
              loop
            >
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
            </Carousel>
          </div>
        </section>

        <section
          id="top-rated-tv"
          className="py-2 px-5 flex flex-col gap-5 items-stretch justify-between"
        >
          <header className="flex gap-3 items-center text-bg-light-purple text-xl font-bold">
            <FiAirplay className="fill-bg-light-purple" />
            <h1>Top Rated TV</h1>
          </header>

          <div className="flex gap-2 items-center">
            <Carousel
              height="100%"
              className="grow"
              align="start"
              slideSize={{ base: "100%", sm: "50%", md: "50%" }}
              slideGap={{ base: 0, sm: "md" }}
              controlsOffset="xs"
              controlSize={25}
              loop
            >
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
              <Carousel.Slide className="flex h-[100%] items-center justify-center">
                <Skeleton height={265}></Skeleton>
              </Carousel.Slide>
            </Carousel>
          </div>
        </section>
      </div>
    </main>
  );
}
