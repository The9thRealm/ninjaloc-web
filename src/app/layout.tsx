import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
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
  title: "NinjaLOC | Underground Artist Collective",
  description: "The premier underground music collective and record label.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-void text-bone`}
      >
        <div className="grain-overlay" />
        <div className="vignette" />
        <Navbar />
        <main className="relative z-10 pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}