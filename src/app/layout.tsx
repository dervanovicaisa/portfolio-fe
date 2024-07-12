"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./layout/footer/footer";
import Header from "./layout/header/header";
import BlackHole from "./layout/black-hole/black-hole.component";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "Frontend Developer",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showBlackHole, setShowBlackHole] = useState(false);

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content="Frontend Developer"></meta>
        <title>Portfolio</title>
      </head>
      <body className={inter.className}>
        <div className={showBlackHole ? "bg-galaxy-set-pos" : ""}>
          <Header
            showBlackHole={showBlackHole}
            setShowBlackHole={setShowBlackHole}
          />
          {showBlackHole && <BlackHole />}
          <div className={showBlackHole ? "galaxy" : ""}>
            {!showBlackHole && (
              <>
                <div>{children}</div>
                <Footer />
              </>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
