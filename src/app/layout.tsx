import type { Metadata } from "next";
import "./globals.css";
import { Quicksand, Playfair_Display } from "next/font/google";
import Navbar from "@/components/navbar";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tru Studio",
  description: "Everything starts with a story",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
