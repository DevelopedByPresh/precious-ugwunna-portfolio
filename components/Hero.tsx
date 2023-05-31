"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BgCircles from "./BgCircles";
import { motion } from "framer-motion";

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: ["Fullstack web dev.", "Frontend dev.", "Graphic Designer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div className="flex flex-col m-5 xl:ml-[10rem] lg:pb-[18rem] items-start mt-[12rem] md:mt-[15rem]
    lg:mt-[20rem] xl:mt-[8rem] md:max-w-2xl md:p-20 lg:max-w-[1500px] lg:m-0 xl:pt-0 h-screen overflow-hidden">
      
      <h1 className="text-[14px] lg:text-xl  uppercase tracking-[8px] ml-1 mb-3 font-medium">
        Hi, the name is
      </h1>
      <h1 className="font-bold opacity-95 text-3xl md:text-7xl lg:text-6xl pb-1 md:pb-5 tracking-wider">
        Ayodeji Atanda.
      </h1>
      <div className="font-bold mt-1 text-3xl md:text-7xl text-gray-500 md:pb-7 tracking-wider lg:text-6xl ">
        <span>{text}</span>
        <Cursor cursorColor="#0077b5" />
      </div>

      <p className="text-xl text-left mt-5 lg:mt-0 md:max-w-[43rem] lg:mb-10 font-medium md:text-xl tracking-wider ml-1">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
        Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </p>
      <button className="mt-12 lg:mt-5 ">
        <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-semibold">Get In touch</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </button>
    </motion.div>
  );
};

export default Hero;
