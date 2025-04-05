"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";

const WorkExperience = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center justify-center 
        min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
        py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      <h3
        className="absolute top-20 sm:top-16 md:top-14 text-2xl sm:text-3xl 
        md:text-4xl lg:text-5xl font-outfit text-gray-500 font-semibold 
        uppercase tracking-wider text-center w-full"
      >
        Experience
      </h3>

      <div className="w-full mt-16 sm:mt-20 md:mt-24">
        <Cards />
      </div>

      {/* Background decoration */}
      <div
        className="absolute -z-10 top-[30%] -left-[20%] w-[300px] h-[300px] 
        sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full 
        bg-[#FAF9F6]/10 mix-blend-multiply filter blur-3xl animate-blob 
        animation-delay-2000"
      />
      <div
        className="absolute -z-10 top-[30%] -right-[20%] w-[300px] h-[300px] 
        sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full 
        bg-[#FAF9F6]/10 mix-blend-multiply filter blur-3xl animate-blob 
        animation-delay-4000"
      />
    </motion.div>
  );
});

WorkExperience.displayName = "WorkExperience";

export default WorkExperience;
