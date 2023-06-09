"use client";
import { motion } from "framer-motion";
import logo from "Assets/Screenshot (392).png";
import { projectss } from "@/data/mockData";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative flex text-center flex-col md:text-left xl:flex-row max-w-full
  xl:px-2 h-screen justify-evenly overflow-x-scroll overflow-y-hidden z-10  mx-auto items-center
   space-y-10 xl:space-y-1  " //just added space in y axis
    >
      <h3
        className=" font-programme text-gray-500 absolute top-20 lg:top-16 text-3xl  md:text-4xl
       xl:text-3xl md:mb-[6rem] xl:mb-0 font-semibold uppercase "
      >
        Projects
      </h3>


      <div className="w-full h-full relative flex xl:top-16 md:top-[5rem] top-28 overflow-x-scroll items-center  overflow-y-hidden snap-x snap-mandatory z-10">
        {projectss.map((project, i) => (
          <div
            key={project.projectName}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-8 md:space-y-8 xl:space-y-1 items-center 
          md:p-20 xl:p-0 h-screen mt-[5em]"
          >
            <div className="flex flex-col items-center justify-center mx-2 snap-center snap-mandatory space-y-0  ">
              <Image
                width={400}
                height={200}
                src={project.projectImage}
                alt="img"
                className=" p-4 drop-shadow-xl w-[20rem] md:w-[35rem] lg:w-[40rem] md:p-10 xl:p-3 xl:w-[400px]"
              />
              <div className="px-4">
                <ul className="text-xs md:text-sm lg:text-xl flex flex-wrap xl:text-sm font-semibold space-x-2 justify-center ">
                  {project.tools.map((tool, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-center flex-shrink-0"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-lg lg:text-2xl xl:text-sm xl:pt-4 space-x-3 flex  items-center">
              <Link href={project.demoLink} target="_blank">
                <button className="inline-flex items-center justify-center px-5 py-2  font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none">
                  Demo
                </button>
              </Link>
              <Link href={project.githubLink} target="_blank">
                <button className="inline-flex items-center justify-center px-5 py-2  font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none">
                  Github
                </button>
              </Link>
            </div>
            <div className="space-y-4 md:px-10 max-w-8xl p-7 xl:px-0 ">
              <h4 className="text-xl md:text-2xl xl:text-xl font-semibold text-center">
                <span className="underline decoration-black underline-offset-4">
                  Case study {i + 1} of {projectss.length}:
                </span>
                {"  "}
                {project.projectName}
              </h4>
              <p className="text-sm md:text-xl lg:text-lg xl:text-sm text-left lg:text-left lg:max-w-3xl hyphens-auto">
                {project.projectDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-slate-400/20 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
