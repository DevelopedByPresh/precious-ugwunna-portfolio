import "./globals.css";
import NavBar from "@/components/NavBar";
import localFont from "@next/font/local";
import Head from "app/head";
import NowPlaying from "@/components/NowPlaying";
import Script from "next/script";

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
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-2PKP3NR2VS"/>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2PKP3NR2VS');
        `}
      </Script>
      <Head />
        <body>
        <NowPlaying/>
          <NavBar />
          {children}
        </body>

    </html>
  );
}
