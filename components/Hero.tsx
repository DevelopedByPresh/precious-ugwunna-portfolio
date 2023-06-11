/* eslint-disable react/no-unescaped-entities */
"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BgCircles from "./BgCircles";
import { motion } from "framer-motion";
import Button from "./Button";

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: ["Fullstack Web Developer.", "Frontend Developer.", "Graphic Designer."],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      className="flex flex-col m-5 xl:ml-[10rem] lg:pb-[18rem] items-start mt-[8rem] md:mt-[15rem]
    lg:mt-[20rem] xl:mt-[7rem] md:max-w-2xl md:p-20 lg:max-w-[1500px] lg:m-0 xl:pt-0 h-screen overflow-hidden"
    >
      <h1 className="text-[14px]  lg:text-xl   ml-1 mb-3 font-medium">
        Hi, the name is
      </h1>
      <h1 className="font-programme font-bold opacity-95 text-4xl md:text-7xl lg:text-6xl pb-1 md:pb-5 ">
        Ayodeji Atanda.
      </h1>
      <div className="font-bold mt-1 text-5xl md:text-4xl text-gray-500 md:pb-7 lg:text-6xl ">
        <span>{text}</span>
        <Cursor cursorColor="#0077b5" />
      </div>

      <p className="text-lg text-left mt-5 lg:mt-0 md:max-w-[43rem] lg:mb-10  xl:mb-5 font-medium md:text-xl  lg:text-2xl xl:text-xl ml-1">
      I'm a freelance software engineer with a passion for crafting exceptional digital experiences. 
      My expertise lies in building accessible and human-centered products. As a freelancer, I have the flexibility
       to work on various projects and I'm currently available for new opportunities. 
      Let's collaborate to create outstanding solutions tailored to your needs.
      </p>
      <Button title="Get In Touch" />
    </motion.div>
  );
};

export default Hero;
