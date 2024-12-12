/* eslint-disable react/no-unescaped-entities */
"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BgCircles from "./BgCircles";
import { motion } from "framer-motion";
import Button from "./Button";

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Fullstack Web Developer.",
      "Frontend Developer.",
      "Smart Contract Developer.",
      "Graphic Designer.",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      className="flex flex-col m-5 xl:ml-[10rem] lg:pb-[18rem] items-start mt-[8rem] md:mt-[15rem]
    lg:mt-[20rem] xl:mt-[8rem] md:max-w-2xl md:p-20 lg:max-w-[1500px] lg:m-0 xl:pt-0 h-screen overflow-hidden"
    >
      <h4 className="text-[14px] lg:text-xl ml-1 mb-3 font-medium">
        Hi, the name is
      </h4>
      <h1 className="font-programme font-bold opacity-95 text-4xl md:text-7xl lg:text-6xl pb-1 md:pb-5">
        Ayodeji Atanda.
      </h1>
      <div className="font-bold mt-1 text-4xl md:text-7xl text-gray-500 md:pb-7 lg:text-6xl">
        <h2>
          {text}
          <Cursor cursorColor="#0077b5" />
        </h2>
      </div>

      <p className="text-lg text-left mt-5 lg:mt-0 md:max-w-[43rem] lg:mb-10 xl:mb-5 font-medium md:text-xl lg:text-2xl xl:text-xl ml-1">
        I am a versatile developer skilled in both Web2 and Web3 technologies,
        focusing on creating innovative and accessible digital experiences. My
        expertise spans developing intuitive full-stack applications, smart
        contracts, and decentralized applications (dApps). I thrive on bringing
        seamless, high-quality solutions to life, combining creativity with
        technical precision, and am deeply passionate about transforming designs
        into reality.
      </p>
      <Button title="Get In Touch" />
    </motion.div>
  );
};

export default Hero;
