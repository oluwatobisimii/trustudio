"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "The Doctors",
    thumbnail: "/public/event.png",
  },
  {
    id: "3JZ_D3ELwOQ",
    title: "Ilé",
    thumbnail: "/public/event.png",
  },
  {
    id: "L_jWHffIx5E",
    title: "Ibu & Tobi",
    thumbnail: "/public/event.png",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "The Doctors",
    thumbnail: "/public/event.png",
  },
  {
    id: "3JZ_D3ELwOQ",
    title: "Ilé",
    thumbnail: "/public/event.png",
  },
  {
    id: "L_jWHffIx5E",
    title: "Ibu & Tobi",
    thumbnail: "/public/event.png",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "The Doctors",
    thumbnail: "/public/event.png",
  },
  {
    id: "3JZ_D3ELwOQ",
    title: "Ilé",
    thumbnail: "/public/event.png",
  },
  {
    id: "L_jWHffIx5E",
    title: "Ibu & Tobi",
    thumbnail: "/public/event.png",
  },
  // Add more video objects as needed
];

export default function PortfolioSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="container mx-auto py-16 text-white min-h-screen">
      <div>
        <div className="text-center mb-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-2 max-w-4xl mx-auto text-balance">
            Browse Our Portfolio To Witness The Artistry And Quality
          </h2>
          <div className="flex justify-center gap-4 mt-4">
            <button className="px-4 py-2 bg-[#6c584c] text-white rounded">
              WEDDING
            </button>
            <button className="px-4 py-2 bg-transparent text-white rounded border border-white">
              BRANDS
            </button>
            <button className="px-4 py-2 bg-transparent text-white rounded border border-white">
              FILMS
            </button>
            <button className="px-4 py-2 bg-transparent text-white rounded border border-white">
              DOCUMENTARIES
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-0">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group border-2 border-transparent hover:border-[#6c584c]"
              onClick={() => {
                setSelectedVideo(video.id);
                setIsPlaying(true);
              }}
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={400}
                height={192}
                className="w-full h-48 object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                <button className="bg-white bg-opacity-80 rounded-full p-4 group-hover:scale-110 transition-transform">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6c584c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>
                <span className="mt-2 text-lg font-semibold drop-shadow-lg">
                  {video.title}
                </span>
              </div>
            </div>
          ))}
        </div>
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative bg-[#18141c] rounded-lg shadow-2xl p-6 w-full max-w-2xl mx-4">
              <ReactPlayer
                src={`https://www.youtube.com/watch?v=${selectedVideo}`}
                playing={isPlaying}
                controls={false}
                width="100%"
                height="360px"
              />
              {/* Custom Controls */}
              <div className="flex justify-between items-center mt-4">
                <button
                  className="px-4 py-2 bg-[#6c584c] text-white rounded"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded"
                  onClick={() => setSelectedVideo(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
