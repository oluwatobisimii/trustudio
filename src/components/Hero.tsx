"use client";
import React, { useState } from "react";
import AnimatedText from "./AnimatedText";

const YOUTUBE_LINK =
  "https://www.youtube.com/embed/6Pq_aJ5Z8BY?autoplay=1&mute=1&loop=1&playlist=6Pq_aJ5Z8BY";

const Hero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <span className="text-white text-2xl animate-pulse">Loading...</span>
        </div>
      )}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          className="w-full h-full"
          src={YOUTUBE_LINK}
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          onLoad={() => setVideoLoaded(true)}
          style={{ opacity: videoLoaded ? 1 : 0, transition: "opacity 0.5s" }}
        />
      </div>
      {videoLoaded && (
        <div className="absolute inset-0 bg-black/50 bg-opacity-60 flex items-end pb-40">
          <div className="flex flex-col space-y-2 container mx-auto">
            <AnimatedText
              text={["Everything starts", "with a story..."]}
              el="h1"
              className="text-white text-6xl md:text-6xl xl:text-8xl font-bold tracking-wide font-playfair text-balance"
              repeatDelay={10000}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
