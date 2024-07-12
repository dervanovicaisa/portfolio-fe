import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./layout/footer/footer";
import Header from "./layout/header/header";
import BlackHole from "./layout/black-hole/black-hole.component";
import Main from "./main/main.component";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Hire me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body className={inter.className}>
        <Main children={children} />
      </body>
    </html>
  );
}
