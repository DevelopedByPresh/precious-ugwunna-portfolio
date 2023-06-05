"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { images } from "@/data/mockData";
import Image from "next/image";

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
      <h3 className="absolute top-36 xl:top-16 xl:text-xs text-sm uppercase tracking-[5px]">Hover over skill to view profiency</h3>
      <div className="grid  grid-cols-3 gap-5 justify-center absolute top-[35%] xl:top-[25%]">
        {/* <Skill/> */}
        {images.map((image, index) => (
        <>
        <Image
          key={index}
          // initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 1.5 }}
          // viewport={{once:true}}
          className="object-cover filter h-16 w-16 xl:w-fit xl:h-24  md:h-28 md:w-28  
      hover:grayscale transition duration-300 ease-in-out p-0 rounded-full"
          src={image.src}
          alt={image.alt}
          width={100}
          height={100}
        />

        {/* <div
          className="absolute  opacity-0 hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white 
         h-16 w-16 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-20"
        >
          <div className="flex items-center justify-center h-full">
            <p className="font-bold text-black opacity-100 text-xl">{image.progress}</p>
          </div>
        </div> */}
        </>
      ))}
      </div>
  </motion.div>;
};

export default Skills;
