// Auth.
import { auth } from "@/auth";

// DB.
import { prisma } from "@/lib/prisma";

// Components.
import Image from "next/image";
import TrendingCarousel from "../_components/Trending/TrendingCarousel";
import QuickExplorePill from "../_components/QuickExplore/QuickExplorePill";
import MovieCarousel from "../_components/MovieCarousel/MovieCarousel";
import ShowCarousel from "../_components/TVCarousel/ShowCarousel";

// Data Fetch.
import { getMovieGenreIDMap } from "../utils/movies/get-movie-genres";
import { getTrendingMovies } from "../utils/movies/get-trending-movies";
import { getNowPlaying } from "../utils/movies/get-now-playing";
import { getTopMovies } from "../utils/movies/get-top-movies";
import { getTrendingTV } from "../utils/tv/get-trending-tv";
import { getTopTV } from "../utils/tv/get-top-tv";

// Assets.
import GlassBackdrop from "@/public/assets/Backdrop.png";

// Icons.
import { BsFire } from "react-icons/bs";
import { RiMovie2Fill } from "react-icons/ri";
import { FiAirplay, FiStar, FiTrendingUp, FiZap } from "react-icons/fi";

export default async function Home() {
  // Persistent Movie Genre Data.
  const movieGenres = await getMovieGenreIDMap();

  // Trending Movie Data.
  const trendingMovies = await getTrendingMovies();

  // Now Playing Movies.
  const nowPlaying = await getNowPlaying();

  // Top Movies.
  const topMovies = await getTopMovies();

  // Trending TV
  const trendingTV = await getTrendingTV();

  // Top Rated TV
  const topRatedShows = await getTopTV();

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

            <div className="flex flex-col bg-[#FFF5F9]/25 grow border-[1px] border-card-border border-opacity-[0.2] backdrop-blur-lg rounded-md shadow-md w-[100%] min-h-[500px] justify-between">
              <TrendingCarousel
                movies={trendingMovies.results}
                genres={movieGenres}
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

        <section
          id="now-playing"
          className="py-2 px-5 flex flex-col gap-5 items-stretch justify-between"
        >
          <header className="flex gap-3 items-center text-dark-purple text-xl font-bold">
            <RiMovie2Fill className="fill-dark-purple" />
            <h1>Now Playing</h1>
          </header>

          <MovieCarousel movies={nowPlaying.results} />
        </section>

        <section
          id="top-rated"
          className="py-2 px-5 flex flex-col gap-5 items-stretch justify-between"
        >
          <header className="flex gap-3 items-center text-dark-purple text-xl font-bold">
            <FiStar className="fill-dark-purple" />
            <h1>Top Movies</h1>
          </header>

          <MovieCarousel movies={topMovies.results} />
        </section>

        <section id="trending-tv" className="py-2 px-5 flex flex-col gap-5 items-stretch justify-between">
          <header className="flex gap-3 items-center text-dark-purple text-xl font-bold">
            <FiTrendingUp className="fill-dark-purple" />
            <h1>Trending TV</h1>
          </header>

          <ShowCarousel shows={trendingTV.results} variant="half" withIndicators />
        </section>

        <section id="top-rated-tv" className="py-2 px-5 flex flex-col gap-5 items-stretch justify-between">
          <header className="flex gap-3 items-center text-dark-purple text-xl font-bold">
            <FiAirplay className="fill-dark-purple" />
            <h1>Top Rated TV</h1>
          </header>

          <ShowCarousel shows={topRatedShows.results} />
        </section>
      </div>
    </main>
  );
}
