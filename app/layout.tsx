import "./globals.css";
import NavBar from "@/components/NavBar";
import Script from "next/script";
import { Outfit } from "next/font/google";
import dynamic from "next/dynamic";
import SmoothScrolling from "@/components/SmoothScrolling";
import SVGLoader from "@/components/SVGloader";

// Optimize font loading
// const programme = localFont({
//   src: [
//     {
//       path: "../public/fonts/Programme-Regular.woff2",
//       weight: "400",
//     },
//   ],
//   variable: "--font-outfit",
//   preload: true,
// });
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

// const montecatiniPro = localFont({
//   src: [
//     {
//       path: "../public/fonts/MontecatiniPro-StrettoUltra.woff2",
//       weight: "700",
//     },
//   ],
//   variable: "--font-montecatiniPro",
//   preload: true,
// });

const NowPlaying = dynamic(() => import("@/components/NowPlaying"), {
  loading: () => <div className="h-6 bg-slate-900" />,
});

export const metadata = {
  viewport: { width: "device-width", initialScale: 1 },
  title: "Ugwunna Precious Chinedu - Front-end / Mobile App Developer Portfolio",
  verification: {
    google: "ltfOnPx-NMzt2vBROfh-jAQr5R-U7ynE-3t3kmMTJGo",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  description:
    "Ugwunna Precious Chinedu - Front-end / Mobile App Developer Portfolio: Creating professional, scalable, and SEO-friendly websites and Mobile Apps that establish a robust online presence for small businesses through innovative solutions.",
  keywords: [
    "Ugwunna Precious Chinedu",
    "Lagos",
    "Nigeria",
    "JavaScript",
    "React",
    "Redux",
    "Frontend Developer",,
    "Tailwind CSS",
    "Web development",
    "Frontend development",
    "Frontend developer",
    "typescipt",
    "Next.js",
    "Vuejs",
    "Web Development Portfolio",
    "Web Performance Optimization",
    "Portfolio Showcase",
    "Mobile App Developer",
    "React Native Developer",
    "Software developer",
     'Typescript',
    "Freelance",
    "Portfolio website",
    "HTML/CSS",
    "Technical Skills",
    "Web Developer",
  ],
  robots: {
    googleBot: {
      index: true,
    },
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
  twitter: {
    card: "summary_large_image",
    title:"Ugwunna Precious Chinedu - Front-end / Mobile App Developer Portfolio",
    description:
     "Ugwunna Precious Chinedu - Front-end / Mobile App Developer Portfolio: Creating professional, scalable, and SEO-friendly websites and Mobile Apps that establish a robust online presence for small businesses through innovative solutions.",
    creator: "Precious",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={` ${outfit.variable}  font-sans scroll-smooth`}>
      <head>
        {/* <meta name="theme-color" content="#FAF9F6" /> */}
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

      <body className="antialiased overflow-x-hidden bg-[#ebebf3]">
        <SVGLoader/>
        <NowPlaying />
        <NavBar />
        <SmoothScrolling>
          <main className="relative">{children}</main>
        </SmoothScrolling>
      </body>
    </html>
  );
}
