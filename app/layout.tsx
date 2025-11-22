import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Loader from "./components/Loader";
import CursorGlow from "./components/CursorGlow";   // ⬅ ADD THIS


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Som Kumar Pawar | Full Stack Developer",
  description:
    "Full-Stack Developer skilled in MERN, Java, AI, and building interactive modern web experiences. Explore my projects, achievements, and AI-powered chatbot.",
  openGraph: {
    title: "Som Kumar Pawar | Portfolio",
    description:
      "Explore my full-stack and AI-powered projects, skills, resume, and achievements.",
    url: "https://your-vercel-url.vercel.app",
    siteName: "SKP Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Loader />
        <CursorGlow />        {/* ⬅ ADD THIS */}
        {children}
      </body>
    </html>
  );
}
