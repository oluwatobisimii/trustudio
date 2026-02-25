"use client";

import React from "react";
import CheckBackground from "./CheckBackground";
import teamImage from "@/assets/images/NNN 2.png";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

const NewHero: React.FC = () => {
  return (
    <section className="lg:aspect-[1440/950] w-screen relative dark:bg-[#000000] pt-[100px]">
      <div className="w-4/5  absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <CheckBackground />
      </div>
      <div className="container mx-auto  relative z-10 flex flex-col items-center  h-full pt-20">
        <AnimatedText
          text={["Everything starts", "with a story..."]}
          el="h1"
          className="font-trajan text-[min(4rem,10vw)] max-w-[688px] text-balance text-center text-[#000000] dark:text-[#FFFFFF] leading-none tracking-tight"
          repeatDelay={10000}
        />
        {/* <h1 className="font-trajan text-[min(4rem,10vw)] max-w-[688px] text-balance text-center text-[#000000] dark:text-[#FFFFFF] leading-none">
          Everything starts with a story...
        </h1> */}

        <Image
          src={teamImage}
          alt="Team Image"
          className="mt-auto flex-1 object-cover w-auto border relative"
        />
      </div>
    </section>
  );
};

export default NewHero;
