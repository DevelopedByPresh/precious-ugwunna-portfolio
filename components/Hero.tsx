"use client";
import {Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: ["Fullstack web dev.", "Frontend dev."],
    loop:true,
    delaySpeed:2000
  });
  return <div className="flex flex-col m-5 lg:pl-[5rem] lg:m-20">
    <p className="text-sm pl-2 md:pb-5 font-semibold">Hi, the name is</p>
    <h1 className="font-bold text-3xl lg:text-7xl pb-1 md:pb-5">
      Ayodeji Atanda.
      </h1>
    <div className="font-bold text-3xl lg:text-7xl text-[#1DA1F2] pb-3 md:pb-7">
    <span>{text}</span>
    <Cursor cursorColor="#0077b5"/>
    </div>

    <p className="text-sm text-left md:max-w-[40rem] font-semibold md:text-xl pl-2">I’m a software engineer specializing in building (and occasionally designing) 
      exceptional digital experiences. 
      Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>


  </div>;
};

export default Hero;
