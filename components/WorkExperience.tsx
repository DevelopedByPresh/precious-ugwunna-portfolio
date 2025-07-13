"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";

const WorkExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center  justify-center 
 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
       overflow-hidden gap-16"
    >
      <h3
        className=" text-3xl  xl:text-3xl md:text-4xl font-outfit text-gray-500 font-semibold 
        uppercase tracking-wider text-center w-full"
      >
       Working Experience
      </h3>

      <div className="w-full mt-1">
        <Cards />
      </div>
    </motion.div>
  );
};

WorkExperience.displayName = "WorkExperience";

export default WorkExperience;
