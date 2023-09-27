import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Code Playground",
  description: "Personal repository for prototyping react animations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
