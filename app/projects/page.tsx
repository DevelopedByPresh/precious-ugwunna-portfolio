import React from "react";
import { projects } from "@/data/data";
import ProjectCard from "@/components/ProjectCard";

const ProjectsPage = () => {
  return (
    <main className="py-24 px-4 sm:px-6 lg:px-8 min-h-screen max-w-[1200px] mx-auto">
      <header className="text-center mb-16 mt-5">
        <p className="text-sm uppercase tracking-widest text-slate-500 mb-4">
          Selected Works
        </p>
        <h1 className="text-slate-800 text-4xl md:text-5xl font-bold tracking-tight">
          Projects
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Here are some of the projects I'm proud to have worked on.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
};

export default ProjectsPage;
