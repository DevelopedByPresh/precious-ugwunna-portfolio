"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return <motion.div 
  initial={{opacity:0}}
  whileInView={{opacity:1}}
  transition={{duration:1.5}}
  className="relative flex text-center flex-col md:text-left xl:flex-row  max-w-[2000px]
  min-h-screen justify-center xl:space-y-10 mx-auto items-center">
          <h3 className="absolute text-gray-500 top-24 lg:top-0 xl:top-16 text-3xl mb-5 xl:text-3xl md:text-5xl md:mb-[6rem] xl:mb-0 font-semibold uppercase tracking-[10px]">
          Tech Stack
      </h3>
      <h3 className="absolute top-36 xl:top-16 xl:text-xs text-sm uppercase tracking-[10px]">Hover over skill to view profiency</h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
      </div>
  </motion.div>;
};

export default Skills;
