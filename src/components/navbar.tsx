"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const linksLeft = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const linksRight = [
  { name: "Weddings", to: "/weddings" },
  { name: "Livestreams", to: "/livestreams" },
  { name: "Film/Documentary", to: "/film" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  // Detect system color preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Handle scroll for background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (to: string) => {
    if (to === "/") return pathname === "/";
    return pathname === to || pathname.startsWith(`${to}/`);
  };

  const handleNavClick = (to: string) => {
    setIsMobileMenuOpen(false);
    router.push(to);
  };

  // Dynamic background class based on scroll + color scheme
  const getBackgroundClass = () => {
    if (!isScrolled) return "bg-transparent";
    return isDarkMode
      ? "bg-neutral-900/90 backdrop-blur-md shadow-lg shadow-black/20"
      : "bg-white/90 backdrop-blur-md shadow-lg shadow-black/10";
  };

  // Dynamic text color for non-scrolled state
  const getTextColorClass = () => {
    if (isScrolled) return isDarkMode ? "text-white" : "text-neutral-900";
    return "text-white";
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${getBackgroundClass()} ${getTextColorClass()}`}
    >
      <div className="flex items-center justify-between w-full container mx-auto px-4 py-6 md:py-6 ">
        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div
            className="w-6 h-0.5 bg-current mb-1.5 transition-transform duration-200"
            style={{
              transform: isMobileMenuOpen
                ? "rotate(45deg) translateY(8px)"
                : "none",
            }}
          />
          <div
            className="w-6 h-0.5 bg-current mb-1.5 transition-opacity duration-200"
            style={{ opacity: isMobileMenuOpen ? 0 : 1 }}
          />
          <div
            className="w-6 h-0.5 bg-current transition-transform duration-200"
            style={{
              transform: isMobileMenuOpen
                ? "rotate(-45deg) translateY(-8px)"
                : "none",
            }}
          />
        </button>

        {/* Desktop Left Links */}
        <div className="hidden md:flex gap-6">
          {linksLeft.map((link) => (
            <button
              key={link.to}
              onClick={() => handleNavClick(link.to)}
              className={`text-base px-0.5 py-2 font-quicksand transition-all duration-200 relative ${
                isActive(link.to)
                  ? isDarkMode
                    ? "font-bold text-red-300"
                    : "font-bold text-red-600"
                  : "font-normal hover:opacity-80"
              }`}
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              {link.name}
              {isActive(link.to) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Logo - Centered */}
        <div className="flex-none font-bold text-2xl tracking-widest font-playfair flex-shrink-0 mx-4 md:mx-0 h-10 md:h-14">
          <Image
            src="/logo_white.png"
            alt="Trustudio Logo"
            width={224}
            height={56}
            className="transition-opacity duration-300 w-full h-full object-cover"
          />
        </div>

        {/* Desktop Right Links */}
        <div className="hidden md:flex gap-6">
          {linksRight.map((link) => (
            <button
              key={link.to}
              onClick={() => handleNavClick(link.to)}
              className={`text-base px-0.5 py-2 font-quicksand transition-all duration-200 relative ${
                isActive(link.to)
                  ? isDarkMode
                    ? "font-bold text-blue-300"
                    : "font-bold text-blue-600"
                  : "font-normal hover:opacity-80"
              }`}
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              {link.name}
              {isActive(link.to) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="md:hidden" />
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full py-4 px-4 space-y-2 border-t transition-all duration-300"
          style={{
            background: isDarkMode
              ? "linear-gradient(to bottom, rgba(23,23,23,0.95), rgba(23,23,23,0.98))"
              : "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.98))",
            backdropFilter: "blur(12px)",
            boxShadow: isDarkMode
              ? "0 4px 20px rgba(0,0,0,0.3)"
              : "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          {[...linksLeft, ...linksRight].map((link) => (
            <button
              key={link.to}
              onClick={() => handleNavClick(link.to)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-quicksand transition-colors duration-200 ${
                isActive(link.to)
                  ? isDarkMode
                    ? "bg-red-900/30 text-red-300 font-bold"
                    : "bg-red-50 text-red-700 font-bold"
                  : isDarkMode
                    ? "hover:bg-neutral-800 text-white"
                    : "hover:bg-neutral-100 text-neutral-900"
              }`}
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
