"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BgCircles from "./BgCircles";
import { motion } from "framer-motion";
import Button from "./Button";

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: ["Fullstack web dev.", "Frontend dev.", "Graphic Designer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      className="flex flex-col m-5 xl:ml-[10rem] lg:pb-[18rem] items-start mt-[12rem] md:mt-[15rem]
    lg:mt-[20rem] xl:mt-[8rem] md:max-w-2xl md:p-20 lg:max-w-[1500px] lg:m-0 xl:pt-0 h-screen overflow-hidden"
    >
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
        building accessible, human-centered products at Upstatement. Currently,
        I’m focused on building accessible, human-centered products at
        Upstatement.
      </p>
      <Button title="Get In Touch" />
    </motion.div>
  );
};

export default Hero;
