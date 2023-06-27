import "./globals.css";
import NavBar from "@/components/NavBar";
import localFont from "@next/font/local";
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

export const metadata = {
  viewport: { width: "device-width", initialScale: 1 },
  title: "Ayodeji Atanda - Web Developer Portfolio",
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  description:
    "Ayodeji Atanda - Web Developer Portfolio for small businesses. Professional, scalable, and SEO-friendly websites that establish an online presence.",
  keywords: [
    "Ayodeji Atanda",
    "Deji ice",
    "Lagos",
    "Nigeria",
    "JavaScript",
    "React",
    "Web development",
    "Frontend development",
    "Frontend developer",
    "Fullstack developer",
    "Graphic designer",
    "typescipt",
    "Next.js",
    "Web Development Portfolio",
    "Web Performance Optimization",
    "Portfolio Showcase",
    "SEO-Friendly Websites",
    "Software developer",
    "Freelance",
    "Portfolio website",
    "HTML/CSS",
    "Technical Skills",
    "SEO Optimization",
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
    title: "Ayodeji Atanda - Web Developer Portfolio",
    description:
      "Discover my portfolio of web development projects for small businesses, focusing on creating professional, scalable, and user-friendly websites that help businesses establish an online presence.",
    creator: "@DEJIxICE",
  },
};
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
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-2PKP3NR2VS"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2PKP3NR2VS');
        `}
      </Script>
      <body>
        <NowPlaying />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
