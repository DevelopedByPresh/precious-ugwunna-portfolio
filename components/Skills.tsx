"use client";
import { motion } from "framer-motion";

type Props = {};

const Skills = (props: Props) => {
  return <motion.div className="relative flex text-center flex-col md:text-left xl:flex-row max-w-[2000px]
  xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
          <h3 className="absolute top-24 lg:top-0 text-3xl mb-5  md:text-5xl md:mb-[6rem] font-semibold uppercase tracking-[10px]">
        Skills
      </h3>
      <h3 className="absolute top-36 text-sm uppercase tracking-[10px]">Hover over skill to view profiency</h3>
      <div></div>
  </motion.div>;
};

export default Skills;
