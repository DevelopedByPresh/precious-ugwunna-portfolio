import React from "react";
import { projects } from "@/data/data";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <main className="py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <header className="text-center">
        <h1 className="text-slate-800 text-4xl md:text-5xl font-bold">
          Projects
        </h1>
        <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
          Here are some of the projects I'm proud to have worked on.
        </p>
      </header>
      <div className="max-w-6xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <Projects key={project.id} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default ProjectsPage;
