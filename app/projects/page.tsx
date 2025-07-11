import React from "react";
import { projects } from "@/data/data";
import Image from "next/image";

const Projects = () => {
  return (
    <main className=" pt-24 px-10 min-h-screen">
      <header>
        <h1 className="text-slate-800 text-5xl">Projects</h1>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((project) => (
          <div
            key={project.projectName}
            className="flex flex-col  items-center gap-5"
          >
            <div className="relative w-full aspect-video max-w-2xl lg:max-w-xl">
              <Image
                src={project.projectImage}
                alt={project.projectName}
                fill
                priority
                className="object-contain rounded-xl border h-fit shadow-lg"
              />
            </div>
            {/* Tools Stack */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-4 py-1 text-sm bg-gray-100 
                rounded-xl "
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Projects;
