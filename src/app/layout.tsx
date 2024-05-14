import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const nunito = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UI Playground",
  description: "A personal repository for user  face prototypes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
