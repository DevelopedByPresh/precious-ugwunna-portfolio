"use client";
import { motion, AnimatePresence } from "framer-motion";
import { projectss } from "@/data/mockData";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState, useCallback } from "react";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projectss[currentProjectIndex];

  const handlePrevious = useCallback(() => {
    setCurrentProjectIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentProjectIndex((prevIndex) =>
      Math.min(prevIndex + 1, projectss.length - 1)
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-center min-h-screen 
      w-full px-4 md:px-8 lg:px-16 xl:px-24 py-24 md:py-28 overflow-hidden"
    >
     <h3
  className="absolute top-16 md:top-20 text-2xl md:text-3xl lg:text-4xl 
  xl:text-5xl font-programme text-gray-500 font-semibold uppercase 
  tracking-wider mb-24 sm:mb-28 md:mb-32"
>
  Projects
</h3>

      {/* Navigation Buttons */}
      <div
        className="flex justify-between w-full max-w-7xl absolute top-[60%] lg:top-[45%] 
      transform -translate-y-1/2 z-20 px-4 md:px-8"
      >
        <button
          onClick={handlePrevious}
          disabled={currentProjectIndex === 0}
          className="p-2 md:p-3 rounded-full bg-slate-900/80 text-white 
          hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200 ease-in-out backdrop-blur-sm"
        >
          <AiOutlineArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentProjectIndex === projectss.length - 1}
          className="p-2 md:p-3 rounded-full bg-slate-900/80 text-white 
          hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200 ease-in-out backdrop-blur-sm"
        >
          <AiOutlineArrowRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Project Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full max-w-6xl mx-auto 
          space-y-6 md:space-y-8 mt-8"
        >
          {/* Project Image */}
          <div className="relative w-full aspect-video max-w-2xl lg:max-w-xl">
            <Image
              src={currentProject.projectImage}
              alt={currentProject.projectName}
              fill
              priority
              className="object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Project Details */}
          <div className="space-y-4 text-center max-w-4xl px-4">
            <h4 className="text-xl md:text-2xl font-semibold">
              <span className="underline decoration-slate-500 underline-offset-4">
                Project {currentProjectIndex + 1} of {projectss.length}
              </span>
              <span className="block mt-2">{currentProject.projectName}</span>
            </h4>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {currentProject.projectDescription}
            </p>
          </div>

          {/* Tools Stack */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4">
            {currentProject.tools.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm md:text-base bg-gray-100 
                rounded-full font-medium"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex space-x-4 mb-8">
            <Link
              href={currentProject.demoLink}
              target="_blank"
              className="transition-transform hover:scale-105"
            >
              <button
                className="px-6 py-2 bg-slate-900/90 text-white rounded-lg
              hover:bg-slate-800 transition-colors duration-200 backdrop-blur-sm"
              >
                Live Demo
              </button>
            </Link>
            <Link
              href={currentProject.githubLink}
              target="_blank"
              className="transition-transform hover:scale-105"
            >
              <button
                className="px-6 py-2 bg-slate-900/90 text-white rounded-lg
              hover:bg-slate-800 transition-colors duration-200 backdrop-blur-sm"
              >
                GitHub
              </button>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Background Decoration */}
      <div
        className="absolute top-1/3 w-full h-[500px] bg-slate-400/10 
      -skew-y-12 -z-10 backdrop-blur-sm"
      />
    </motion.div>
  );
};

export default Projects;
