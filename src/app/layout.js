"use client";

import { Inter } from "next/font/google";
import Head from "next/head";
import { BrowserRouter } from "react-router-dom"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* <link type="image/png" sizes="96x96" rel="icon" href="./favicon.png"/> */}
      </Head>
      <body className={inter.className}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </body>
    </html>
  );
}
