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
  keywords:
    "wedding videography, event videography, storytelling, video production",
  authors: [{ name: "Tru Studio" }],
  robots: "index, follow",
  openGraph: {
    title: "Tru Studio",
    description: "Everything starts with a story",
    url: "https://www.thetrustudio.com",
    siteName: "Tru Studio",
    images: [
      {
        url: "https://www.thetrustudio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tru Studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tru Studio",
    description: "Everything starts with a story",
    images: ["https://www.thetrustudio.com/twitter-image.png"],
  },
  icons: {
    icon: "https://www.thetrustudio.com/favicon.png",
  },
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
