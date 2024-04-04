import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesEffect from "./particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wisdomia",
  description: "In Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ParticlesEffect />
        {children}</body>
    </html>
  );
}
