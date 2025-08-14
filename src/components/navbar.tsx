"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const linksLeft = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Contact", to: "contact" },
];

const linksRight = [
  { name: "Weddings", to: "weddings" },
  { name: "Brands", to: "brands" },
  { name: "Film/Documentary", to: "film" },
];

const sections = [...linksLeft, ...linksRight];

const Navbar: React.FC = () => {
  const [active, setActive] = useState("home");

  // Scroll to section
  const handleClick = (to: string) => {
    const el = document.getElementById(to);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Highlight active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section.to);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = section.to;
            break;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full text-white z-[100]  flex items-center justify-between px-4 pt-6">
      <div className="flex items-center justify-between w-full container mx-auto">
        {/* Left links */}
        <div className="flex gap-6">
          {linksLeft.map((link) => (
            <button
              key={link.to}
              onClick={() => handleClick(link.to)}
              className={`bg-none border-none cursor-pointer text-base px-0.5 py-2 font-quicksand transition-colors duration-200 ${
                active === link.to
                  ? "font-bold text-red-100"
                  : "font-normal text-white"
              }`}
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              {link.name}
            </button>
          ))}
        </div>
        {/* Logo */}
        <div
          className="flex-none font-bold text-2xl tracking-widest font-playfair"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          <Image
            src="/logo_white.png"
            alt="Trustudio Logo"
            width={170}
            height={100}
          />
        </div>
        {/* Right links */}
        <div className="flex gap-6">
          {linksRight.map((link) => (
            <button
              key={link.to}
              onClick={() => handleClick(link.to)}
              className={`bg-none border-none cursor-pointer text-base px-0.5 py-2 font-quicksand transition-colors duration-200 ${
                active === link.to
                  ? "font-bold text-blue-500"
                  : "font-normal text-white"
              }`}
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              {link.name}
            </button>
          ))}
        </div>
        {/* Responsive: Add your own hamburger menu for mobile if needed */}
      </div>
    </nav>
  );
};

export default Navbar;
