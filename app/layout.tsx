import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({weight: "400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Open Club Software",
  description: "https://github.com/SStealthyDevelops/OpenClubSoftware",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + roboto.className}>{children}</body>
    </html>
  );
}
