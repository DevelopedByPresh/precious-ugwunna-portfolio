import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="font-clash antialiased text-black snap-mandatory snap-y z-0 m-3 text-4xl">
      
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About/>
      </section>
      <section id="experience" className="center">
        <WorkExperience/>
      </section>
      <section id="skills" className="snap-start">
        <Skills/>
      </section>
    </div>
  );
}
