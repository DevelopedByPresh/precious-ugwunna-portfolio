"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return <motion.div 
  initial={{opacity:0}}
  whileInView={{opacity:1}}
  transition={{duration:1.5}}
  className="relative flex text-center flex-col md:text-left xl:flex-row max-w-[2000px]
  xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
          <h3 className="absolute top-24 lg:top-0 text-3xl mb-5  md:text-5xl md:mb-[6rem] font-semibold uppercase tracking-[10px]">
        Skills
      </h3>
      <h3 className="absolute top-36 text-sm uppercase tracking-[10px]">Hover over skill to view profiency</h3>
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
