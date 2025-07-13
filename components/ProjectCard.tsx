import Image from "next/image";
import React from "react";
import Link from "next/link";
import ToolIcon from "./ToolIcon";
import { Project } from "@/types/types";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      key={project.projectName}
      className="flex flex-col bg-slate-100 rounded-2xl border overflow-hidden transition-all duration-300"
    >
      <div className="relative w-full h-full  group">
        <Image
          src={project.projectImage}
          alt={project.projectName}
          height={300}
          width={600}
          loading={"lazy"}
          className="object-contain rounded-t-2xl border-b  transition-all duration-300 group-hover:brightness-50"
        />

        {/* Overlay Links - Hidden by default, animate in on hover */}
        <div className="absolute inset-x-0  bottom-10 flex items-center text-sm justify-center gap-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <Link
            href={project.demoLink}
            target="_blank"
            aria-label="Live Demo"
            rel="noopener noreferrer"
            className="border-white border-2 hover:bg-white text-white hover:text-slate-800 px-3 py-1 rounded-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out shadow-lg"
          >
            Live Demo
          </Link>
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              aria-label="GitHub Repository"
              rel="noopener noreferrer"
              className="border-white border-2 hover:bg-white text-white hover:text-slate-800 px-3 py-1 rounded-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out shadow-lg"
            >
              GitHub Repo
            </Link>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">
          {project.projectName}
        </h3>
        <p className="text-slate-600 text-base mb-4 line-clamp-3">
          {project.projectDescription}
        </p>

        {/* Tools Stack */}
        <div className="mt-4">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap items-center gap-3">
            {project.tools.map((tool: string, i: number) => (
              <div key={i} title={tool} className="flex items-center">
                <ToolIcon tool={tool} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
