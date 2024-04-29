// Auth.
import { auth } from "@/auth";

// DB.
import { prisma } from "@/lib/prisma";

// Components.
import Image from "next/image";
import TrendingCarousel from "../_components/Trending/TrendingCarousel";
import QuickExplorePill from "../_components/QuickExplore/QuickExplorePill";

// Assets.
import GlassBackdrop from "@/public/assets/Backdrop.png";

// Icons.
import { BsFire } from "react-icons/bs";
import { FiZap } from "react-icons/fi";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="w-full p-5 flex flex-col gap-10">
        <section
          id="trending"
          className="py-2 px-5 flex flex-col gap-5 items-stretch justify-between"
        >
          <header className="flex gap-3 items-center text-dark-purple text-3xl font-bold">
            <BsFire />
            <h1>Trending Today</h1>
          </header>

          <div className="relative">
            <Image
              className="p-2 absolute w-full h-[100%] opacity-20"
              src={GlassBackdrop}
              alt="bubble backdrop"
            />

            <div className="flex flex-col bg-[#FFF5F9]/25 grow border-[1px] border-card-border border-opacity-[0.15] backdrop-blur-lg rounded-md shadow-md w-[100%] min-h-[500px] justify-between">
              <TrendingCarousel
                items={[
                  {
                    title: "Kung Fu Panda 4",
                    genre: "Animation/Action",
                    date: "2024",
                    imgURL:
                      "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
                  },
                  {
                    title: "Dune: Part Two",
                    genre: "Sci-Fi/Action",
                    date: "2024",
                    imgURL:
                      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section
          id="quick-filter"
          className="py-2 px-5 flex flex-col gap-5 items-stretch justify-between"
        >
          <header className="flex gap-3 items-center text-dark-purple text-xl font-bold">
            <FiZap className="fill-dark-purple" />
            <h1>Quick Explore</h1>
          </header>

          <div id="pills" className="flex gap-2 items-center justify-evenly">
            <QuickExplorePill provider="netflix" />
            <QuickExplorePill provider="prime" />
            <QuickExplorePill provider="disney" />
          </div>
        </section>

        <section id="netflix"></section>

        <section id="prime"></section>

        <section id="disney"></section>
      </div>
    </main>
  );
}
