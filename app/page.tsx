import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" Clash Display text-blue-800 font-bold text-4xl">
      <Header />
      <section id="hero">
        <Hero />
      </section>
    </div>
  );
}
