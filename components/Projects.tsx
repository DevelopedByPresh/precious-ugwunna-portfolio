"use client"
import { motion } from "framer-motion";
import logo from "Assets/react-js-icon.png";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
    initial={{opacity: 0, y:-200}}
    transition={{duration:1.2}}
    whileInView={{opacity:1 , y: 0}}
    viewport={{once:true}}

      className="relative flex text-center flex-col md:text-left xl:flex-row max-w-full
  xl:px-2 h-screen justify-evenly overflow-x-scroll overflow-y-hidden z-10  mx-auto items-center space-y-10 xl:space-y-5
  scrollbar-track-black scrollbar-thumb-pink-700 scrollbar-thin" //just added space in y axis
   
   >
      <h3 className=" text-gray-500 absolute top-20 lg:top-16 text-3xl mb-5  md:text-4xl md:mb-[6rem] font-semibold uppercase tracking-[10px]">
        Projects
      </h3>
      <div className="w-full relative flex overflow-x-scroll items-center justify-center overflow-y-hidden snap-x snap-mandatory z-10">
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20
          md:p-44 h-screen"
          >
            <img src={logo.src} alt="img" className=" w-36 lg:h-48 lg:w-48" />
            <div className="space-y-10 px-0 md:px-10 max-w-4xl">
              <h4 className="text-xl font-semibold text-center">
                <span className="underline decoration-black underline-offset-4">
                  Case study {i + 1} of {projects.length}:
                </span>
                {"  "}ChatGPT Clone
              </h4>
              <p className="text-xs lg:text-lg text-center lg:text-left">
                Lorem ipsum is a placeholder text commonly used in the design
                and typesetting industry. It does not have any specific meaning
                or content. The purpose of using Lorem ipsum is to fill space
                temporarily when designing or demonstrating the visual elements
                of a document or website layout.
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
