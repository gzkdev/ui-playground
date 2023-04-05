import "./globals.css";
import { Figtree } from "@next/font/google";
const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "React Playground",
  description:
    "A space for testing and implementing intricate UI animations using the React UI library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
