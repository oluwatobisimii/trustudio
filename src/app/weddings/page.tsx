"use client";
import React from "react";
import AnimatedText from "@/components/AnimatedText";

const WeddingsPage = () => {
  const WEDDINGS_LIST = [
    {
      title: "The Doctors",
      description:
        'Where precision meets passion. Dr Derin and Dr Gladys traded stethoscopes for vows in a celebration as meticulously crafted as their life’s work—proving that the most profound healing happens not in operating rooms, but in the quiet certainty of "I do."',
      location: "Ibadan",
      year: "2024",
      videoUrl:
        "https://www.youtube.com/embed/zXLX7zAGHxA?autoplay=1&mute=1&loop=1&playlist=zXLX7zAGHxA",
    },
    {
      title: "ile oko ya",
      description:
        'In Yoruba tradition, marriage is not an ending—but a sacred expansion. As our couples left the familiar shores of their families, they did not abandon their roots; they carried them forward to build a new ìdílé (lineage)—where two histories become one future, and "Ile Oko Ya" transforms from a phrase into a promise: forever begins here.',
      location: "Akure",
      year: "2025",
      videoUrl:
        "https://www.youtube.com/embed/lmf8L3ioXZA?autoplay=1&mute=1&loop=1&playlist=lmf8L3ioXZA",
    },
    {
      title: "Ibukun & Tobi",
      description:
        'In Yoruba tradition, marriage is not an ending—but a sacred expansion. As our couples left the familiar shores of their families, they did not abandon their roots; they carried them forward to build a new ìdílé (lineage)—where two histories become one future, and "Ile Oko Ya" transforms from a phrase into a promise: forever begins here.',
      location: "Porthaccourt",
      year: "2025",
      videoUrl:
        "https://www.youtube.com/embed/-9vwc2XJrug?autoplay=1&mute=1&loop=1&playlist=-9vwc2XJrug",
    },
  ];
  return (
    <>
      <section>
        <div className="aspect-[9/16] md:aspect-[1440/517] overflow-hidden relative grid place-items-center-safe">
          <video
            src={"./VideoMontage.mov"}
            autoPlay
            muted
            loop
            className="w-full h-screen object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 max-w-[1000px] ">
            <AnimatedText
              text={"We make your wedding a movie to look out for"}
              el="h1"
              className="font-trajan text-[min(4rem,10vw)]  text-balance text-center text-[#000000] dark:text-[#FFFFFF] leading-none tracking-tight font-bold mx-auto"
              repeatDelay={10000}
            />
          </div>
        </div>
      </section>
      <section className="p-6 lg:p-20 container mx-auto space-y-20 lg:space-y-16">
        {WEDDINGS_LIST.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div
                className="flex w-full flex-col lg:flex-row gap-6 lg:items-center justify-between lg:h-[70dvh]"
                key={i}
              >
                <div className="w-full lg:w-1/3 space-y-4">
                  <h3 className="font-trajan font-bold text-2xl lg:text-4xl">
                    {item.title}
                  </h3>
                  <p>{item.description}</p>
                  <div className="flex items-center gap-4">
                    <p>
                      {item.location}, {item.year}
                    </p>
                    <div className="h-4 w-[1px] bg-[#5e5e5e]" />
                    <p> by TruStudio</p>
                  </div>
                </div>
                <div className="w-full lg:flex-1 aspect-video md:max-w-[800px]">
                  <iframe
                    className="w-full h-full"
                    src={item.videoUrl}
                    title="YouTube video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </div>
              <hr className="border-gray-300 dark:border-gray-700 last:hidden" />
            </React.Fragment>
          );
        })}
      </section>
    </>
  );
};

export default WeddingsPage;
