// Auth.
import { auth } from "@/auth";

// DB.
import { prisma } from "@/lib/prisma";

// Components.
import Image from "next/image";
import FeaturedCarousel from "../_components/Featured/FeaturedCarousel";
import { Button } from "@mantine/core";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="p-5">
        <section
          id="hero"
          className="py-2 px-10 flex gap-5 items-stretch justify-between"
        >
          <div className="flex flex-col gap-5">
            <p className="text-dark-purple text-6xl font-medium mb-3">
              The one stop info platform for all things cinema!
            </p>
            <p className="text-dark-purple text-2xl font-medium mb-3">
              With Watchog quickly discover the best platform to watch all the
              hottest titles, get recommendations curated to your interests and
              platforms, and stay up to date with your friends viewing habits!
            </p>
            <p className="grow text-lg italic">
              Search your favorite titles across multiple streaming services to
              find the best place to watch. Connect with friends or like-minded
              film enthusiasts to share your current and favorite films!
            </p>

            <div className="flex gap-5">
              <Button className="!bg-dark-purple !text-text-secondary !rounded-lg">EXPLORE TITLES</Button>
              <Button className="!rounded-lg !text-text-primary" variant="white">FIND FRIENDS</Button>
            </div>
          </div>

          <div className="flex flex-col bg-bg-primary/20 grow border-[1px] border-bg-light-purple border-opacity-50 rounded-md shadow-sm w-[100%] min-w-[50%] justify-between">
            <FeaturedCarousel
              items={[
                {
                  title: "Kung Fu Panda 4",
                  genre: "Animation/Action",
                  date: "2024",
                  imgURL:
                    "https://m.media-amazon.com/images/M/MV5BZDY0YzI0OTctYjVhYy00MTVhLWE0NTgtYTRmYTBmOTE3YTViXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
                },
                {
                  title: "Kung Fu Panda 3",
                  genre: "Animation/Action",
                  date: "2024",
                },
              ]}
            />
          </div>
        </section>

        <section id="netflix"></section>

        <section id="prime"></section>

        <section id="disney"></section>
      </div>
    </main>
  );
}
