// Auth.
import { auth } from "@/auth";

// DB.
import { prisma } from "@/lib/prisma";

// Components.
import TrendingCarousel from "./_components/Trending/TrendingCarousel";
import QuickExplorePill from "./_components/QuickExplore/QuickExplorePill";
import MovieCarousel from "./_components/MovieCarousel/MovieCarousel";
import ShowCarousel from "./_components/TVCarousel/ShowCarousel";

// Data Fetch.
import { getMovieGenreIDMap } from "./utils/movies/get-movie-genres";
import { getTrendingMovies } from "./utils/movies/get-trending-movies";
import { getNowPlaying } from "./utils/movies/get-now-playing";
import { getTopMovies } from "./utils/movies/get-top-movies";
import { getTrendingTV } from "./utils/tv/get-trending-tv";
import { getTopTV } from "./utils/tv/get-top-tv";
import { getAvailableProviders } from "./utils/providers/get-available-providers";

// Icons.
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

  // Available Watch Providers.
  const watchProviders = await getAvailableProviders();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section
        id="trending"
        className="flex flex-col gap-5 items-stretch justify-between w-[100%]"
      >
        <div className="relative">

          <div className="flex flex-col bg-[#FFF5F9]/25 grow backdrop-blur-lg rounded-md min-h-[500px] justify-between">
            <TrendingCarousel
              movies={trendingMovies.results}
              genres={movieGenres}
            />
          </div>
        </div>
      </section>

      <div className="w-full p-5 flex flex-col gap-10">

        <section
          id="quick-filter"
          className="py-2 px-5 flex flex-col gap-5 items-stretch justify-between"
        >
          <header className="flex gap-3 items-center text-bg-light-purple text-xl font-bold">
            <FiZap className="fill-bg-light-purple" />
            <h1>Quick Explore</h1>
          </header>

          <div
            id="pills"
            className="flex p-1 max-w-[100%] overflow-auto animate-scrollbar scrollbar-hidden hover:scrollbar-visible gap-2 items-center justify-evenly"
          >
            {watchProviders.results.map((provider) => (
              <QuickExplorePill
                key={provider.provider_name}
                provider={provider.provider_name}
                providerLogo={provider.logo_path}
              />
            ))}
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

          <MovieCarousel movies={nowPlaying.results} />
        </section>

        <section
          id="top-rated"
          className="py-2 px-5 flex flex-col gap-5 items-stretch justify-between"
        >
          <header className="flex gap-3 items-center text-bg-light-purple text-xl font-bold">
            <FiStar className="fill-bg-light-purple" />
            <h1>Top Movies</h1>
          </header>

          <MovieCarousel movies={topMovies.results} />
        </section>

        <section
          id="trending-tv"
          className="py-2 px-5 flex flex-col gap-5 items-stretch justify-between"
        >
          <header className="flex gap-3 items-center text-bg-light-purple text-xl font-bold">
            <FiTrendingUp className="fill-bg-light-purple" />
            <h1>Trending TV</h1>
          </header>

          <ShowCarousel
            shows={trendingTV.results}
            variant="half"
            withIndicators
          />
        </section>

        <section
          id="top-rated-tv"
          className="py-2 px-5 flex flex-col gap-5 items-stretch justify-between"
        >
          <header className="flex gap-3 items-center text-bg-light-purple text-xl font-bold">
            <FiAirplay className="fill-bg-light-purple" />
            <h1>Top Rated TV</h1>
          </header>

          <ShowCarousel shows={topRatedShows.results} />
        </section>
      </div>
    </main>
  );
}
