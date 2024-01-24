import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import React from "react";
import Providers from "./lib/utils/Providers";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const lato = Lato({
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "CineQuest",
  description: "Everything you need to know about your favorite movies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.className}>
      <body>
        <Header />
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
