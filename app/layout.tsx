import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anime Rangers X Wiki - Official Community Hub",
  description: "The comprehensive wiki for Anime Rangers X. Explore characters, episodes, lore, and join the community.",
  keywords: "anime, rangers, wiki, characters, episodes, community",
  openGraph: {
    title: "Anime Rangers X Wiki",
    description: "Your comprehensive guide to the Anime Rangers X universe",
    url: "https://animerangersx.wiki",
    siteName: "Anime Rangers X Wiki",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
