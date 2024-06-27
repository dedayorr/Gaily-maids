// "use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaily Maids",
  description:
    "Gaily Maids is your trusted partner in maintaining a clean and healthy environment.",

    icons: {
      icon: "/favicon.ico",
    },

    openGraph: {
      title: "Gaily Maids",
      description: "Gaily Maids is your trusted partner in maintaining a clean and healthy environment.",
      images: [
        {
          url: "./metaImage/image/metaImage",
          width: 1200,
          height: 630,
          alt: "Gaily Maids"
        },
      ],
    },

    // twitter: {
    //   card: "summary_large_image",
    //   title: "Gaily Maids",
    //   description: "Gaily Maids is your trusted partner in maintaining a clean and healthy environment.",
    //   images: [
    //     {
    //       url: "/path/to/your/twitter-image.jpg",
    //       alt: "Gaily Maids"
    //     },
    //   ],
    // },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags if needed */}
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gailymaids.com/" />
        {/* <meta name="twitter:site" content="@your_twitter_handle" /> */}
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
