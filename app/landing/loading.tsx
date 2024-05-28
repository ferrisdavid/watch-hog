// Components.
import { Skeleton } from "@mantine/core";
import Image from "next/image";
import QuickExplorePill from "../_components/QuickExplore/QuickExplorePill";

// Assets.
import GlassBackdrop from "@/public/assets/Backdrop.png";

// Icons.
import { BsFire } from "react-icons/bs";
import { FiZap } from "react-icons/fi";

export default function Loading() {
  // Or a custom loading skeleton component
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

            <div className="flex bg-[#FFF5F9]/25 grow border-[1px] border-card-border border-opacity-[0.2] backdrop-blur-lg rounded-md shadow-md w-[100%] min-h-[500px] justify-between">
              <div className="flex grow flex-col gap-5 p-12 h-[100%]">
                <Skeleton height={35}>
                  <h2 className="text-dark-purple text-3xl font-bold">
                    # Placeholder Placeholder
                  </h2>
                </Skeleton>

                <Skeleton height={35}>
                  <h4 className="flex items-center gap-1 text-card-border text-lg font-medium">
                    Placeholder Placeholder Placeholder Placeholder Placeholder
                    Placeholder Placeholder
                  </h4>
                </Skeleton>

                <Skeleton height={125}>
                  <p className="text-dark-purple mt-6 font-medium">
                    Placeholder
                  </p>
                </Skeleton>

                <div className="flex gap-2 justify-between items-center">
                  <div id="provider-logos"></div>

                  <div className="flex gap-2">
                    <Skeleton height={30} width={25}></Skeleton>
                    <Skeleton height={30} width={25}></Skeleton>
                  </div>
                </div>
              </div>

              <div className="relative p-12 min-w-[50%] flex grow self-center items-center justify-center">
                <Skeleton width={400} height={400}></Skeleton>
              </div>
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
            <QuickExplorePill provider="netflix" providerLogo="" />
            <QuickExplorePill provider="prime" providerLogo=""/>
            <QuickExplorePill provider="disney" providerLogo=""/>
          </div>
        </section>

        <section id="netflix">{/* <Suspense></Suspense> */}</section>

        <section id="prime">{/* <Suspense></Suspense> */}</section>

        <section id="disney">{/* <Suspense></Suspense> */}</section>
      </div>
    </main>
  );
}
