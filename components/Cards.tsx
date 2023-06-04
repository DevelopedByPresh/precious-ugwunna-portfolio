"use client"
import logo from "Assets/Untitled-2-Recovered.png";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const Cards = ({}: Props) => {
  return (
    <article id="card" className="flex flex-col rounded-lg items-center space-y-7  flex-shrink-0 w-[500px] md:w-[600px] 
    xl:w-[650px] snap-center no-scrollbar  p-5 opacity-60 focus:opacity-100 hover:opacity-100 cursor-pointer transition-opacity
    duration-200 overflow-hidden overflow-y-scroll">
      {/* <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-14 h-14 xl:w-[70px] xl:h-[70px] object-cover object-center rounded-full"
        alt="logo"
        src={logo.src}
      /> 
      */}
      <div className="px-0 md:px-10">
        <h4 className="text-xl lg:text-3xl font-light">Frontend Developer</h4>
        <p className="font-bold mt-1 text-xl">Sabiroad</p>
        <div className="flex space-x-2 my-2">
            <img className="h-7 w-7 rounded-full" alt="img" src={logo.src}/>
            <img className="h-7 w-7 rounded-full" alt="img" src={logo.src}/>
            <img className="h-7 w-7 rounded-full" alt="img" src={logo.src}/>
            <img className="h-7 w-7 rounded-full" alt="img" src={logo.src}/>

        </div>
        <p className="py-5 text-sm font-semibold xl:text-xs">04/2022 - 04/2023</p>
        <ul className="space-y-4 w-52 md:w-full ml-5 list-disc text-sm">
            <li>Lorem ipsum dolor sit amet, consectetur
             adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
        </ul>
      </div>
    </article>
  );
};

export default Cards;
