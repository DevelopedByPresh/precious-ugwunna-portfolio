import "./globals.css";
import NavBar from "@/components/NavBar";
import localFont from "@next/font/local";
import NowPlaying from "@/components/NowPlaying";
import Script from "next/script";
import { Suspense } from "react";

// Optimize font loading
const programme = localFont({
  src: [
    {
      path: "../public/fonts/Programme-Regular.woff2",
      weight: "400",
    },
  ],
  variable: "--font-programme",
  preload: true,
});

const montecatiniPro = localFont({
  src: [
    {
      path: "../public/fonts/MontecatiniPro-StrettoUltra.woff2",
      weight: "700",
      display: "swap",
    },
  ],
  variable: "--font-montecatiniPro",
  preload: true,
});

// ...existing metadata...

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${programme.variable} ${montecatiniPro.variable} font-sans scroll-smooth`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#FAF9F6" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>

      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-2PKP3NR2VS"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2PKP3NR2VS');
        `}
      </Script>

      <body className="antialiased bg-[#FAF9F6] overflow-x-hidden">
        <Suspense fallback={<div className="h-6 bg-slate-900" />}>
          <NowPlaying />
        </Suspense>
        <NavBar />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
