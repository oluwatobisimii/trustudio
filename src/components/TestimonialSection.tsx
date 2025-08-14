"use client";
import React, { useState } from "react";
import { CalendarBlank, UsersThree } from "phosphor-react";

// Example testimonial data
const testimonials = [
  {
    id: 1,
    videoUrl: "/sample-video.mp4",
    poster: "/event.png",
    location: "Nigeria",
    description: "Graduation event testimonial",
  },
  {
    id: 2,
    videoUrl: "/sample-video.mp4",
    poster: "/event.png",
    location: "Nigeria",
    description: "Wedding event testimonial",
  },
  {
    id: 3,
    videoUrl: "/sample-video.mp4",
    poster: "/event.png",
    location: "Nigeria",
    description: "Birthday event testimonial",
  },
  {
    id: 4,
    videoUrl: "/sample-video.mp4",
    poster: "/event.png",
    location: "Nigeria",
    description: "Corporate event testimonial",
  },
];

const TestimonialSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = 4;

  const handlePrev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  };

  const handleNext = () => {
    setCurrent((prev) =>
      prev + visibleCount >= testimonials.length ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full py-16 flex flex-col items-center bg-white">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-full mb-8">
            <span className="text-xs font-bold tracking-widest text-gray-500">
              TESTIMONIAL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
              What Our Clients Say
            </h2>
            <div className="flex gap-8 mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <CalendarBlank size={24} weight="bold" />
                <span className="font-semibold text-lg">200+ Events</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <UsersThree size={24} weight="bold" />
                <span className="font-semibold text-lg">
                  70+ Satisfied Clients
                </span>
              </div>
            </div>
          </div>
          {/* Navigation icons for desktop */}
          <div className="hidden md:flex w-full max-w-5xl justify-end mb-4 gap-4">
            <button
              className="bg-gray-100 rounded-full p-3 hover:bg-gray-200 transition"
              onClick={handlePrev}
              aria-label="Previous"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="#7B5B2B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="bg-[#6B400F] rounded-full p-3 hover:bg-[#4e2c08] transition"
              onClick={handleNext}
              aria-label="Next"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-6 w-full justify-center">
        {testimonials
          .slice(current, current + visibleCount)
          .map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-transparent hover:border-[#6B400F] transition w-[180px] h-[320px] flex flex-col justify-center items-center relative"
            >
              <video
                className="w-full h-full object-cover aspect-[9/16]"
                controls
                poster={testimonial.poster}
              >
                <source src={testimonial.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button className="absolute inset-0 flex items-center justify-center">
                <svg width="64" height="64" fill="none" viewBox="0 0 64 64">
                  <circle
                    cx="32"
                    cy="32"
                    r="32"
                    fill="black"
                    fillOpacity="0.4"
                  />
                  <path d="M26 22v20l16-10-16-10Z" fill="#fff" />
                </svg>
              </button>
              <div className="absolute bottom-2 left-2 text-xs text-white bg-black bg-opacity-40 px-2 py-1 rounded">
                {testimonial.location}
              </div>
            </div>
          ))}
      </div>
      {/* Navigation icons for mobile */}
      <div className="flex md:hidden justify-center gap-4 mt-4">
        <button
          className="bg-gray-100 rounded-full p-3 hover:bg-gray-200 transition"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M15 18l-6-6 6-6"
              stroke="#7B5B2B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="bg-[#6B400F] rounded-full p-3 hover:bg-[#4e2c08] transition"
          onClick={handleNext}
          aria-label="Next"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M9 6l6 6-6 6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <button className="mt-10 px-8 py-3 bg-[#6B400F] text-white font-semibold rounded-md shadow hover:bg-[#4e2c08] transition flex items-center gap-2">
        LET&apos;S TALK NOW{" "}
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path
            d="M5 12h14M12 5l7 7-7 7"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
};

export default TestimonialSection;
