import Loading from "@/components/Loading";
import "./globals.css";
import NavBar from "@/components/NavBar";
import localFont from "@next/font/local";
import Head from "app/head";
import { Suspense } from "react";

const programme = localFont({
  src: [
    {
      path: "../public/fonts/Programme-Regular.woff2",
      weight: "400",
    },
  ],
  variable: "--font-programme",
});
const montecatiniPro = localFont({
  src: [
    {
      path: "../public/fonts/MontecatiniPro-StrettoUltra.woff2",
      weight: "700",
    },
  ],
  variable: "--font-montecatiniPro",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${programme.variable} ${montecatiniPro.variable}  font-sans`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
        <body>
          <NavBar />
          {children}
        </body>

    </html>
  );
}
