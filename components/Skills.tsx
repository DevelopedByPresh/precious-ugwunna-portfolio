"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { logos } from "@/data/mockData";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] min-h-screen justify-center xl:space-y-10 mx-auto items-center"
    >
      <h3 className="absolute font-programme text-gray-500 top-24 lg:top-0 xl:top-16 text-3xl mb-5 xl:text-3xl md:text-5xl md:mb-[6rem] xl:mb-0 font-semibold uppercase">
        Tech Stack
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 justify-center place-content-center place-items-center w-full max-w-5xl px-4 absolute top-[35%] xl:top-[25%] mx-auto">
        {logos.map((logo, index) => (
          <Skill key={index} Logo={logo.src} alt={logo.alt} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
