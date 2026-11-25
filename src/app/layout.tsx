import "@fontsource-variable/dm-sans";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nguyễn Đức Anh — Junior Full-Stack Developer",
  description: "Portfolio of Nguyễn Đức Anh, Junior Full-Stack Developer experienced with React.js, Next.js, Node.js, and NestJS.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
