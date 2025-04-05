"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { logos } from "@/data/mockData";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col text-center md:text-left xl:flex-row 
      max-w-[2000px] min-h-screen justify-center xl:space-y-0 mx-auto items-center 
      px-4 md:px-10"
    >
      <h3
        className="absolute font-outfit text-gray-500 top-24 md:top-16 
      xl:top-16 text-2xl md:text-3xl xl:text-4xl font-semibold uppercase tracking-[8px]"
      >
        Tech Stack
      </h3>

      <div
        className="grid grid-cols-3 md:grid-cols-4  
      gap-4 md:gap-5 w-full max-w-6xl mx-auto mt-32 md:mt-40"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Skill Logo={logo.src} alt={logo.alt} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
