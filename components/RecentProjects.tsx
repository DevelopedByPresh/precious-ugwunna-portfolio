import React, { useState } from "react";
import ToolIcon from "./ToolIcon";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/data";
import Link from "next/link";
const RecentProjects = () => {
  const latestProjects = projects.slice(0, 3);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="flex-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h3 className="text-3xl xl:text-3xl md:text-4xl font-outfit text-gray-500 font-semibold uppercase tracking-wider">
          Recent Projects
        </h3>

        <div className="space-y-4">
          {latestProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.8 }}
              className="group cursor-pointer"
              onClick={() => toggleProject(project.id)}
            >
              {/* Minimalist Project Header */}
              <div className="flex items-center justify-between py-4 border-b border-gray-200 group-hover:border-gray-400 transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 font-mono text-sm">
                    0{index + 1}
                  </span>
                  <h4 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                    {project.projectName}
                  </h4>
                </div>
                <div
                  className={`text-gray-400 group-hover:text-gray-600 transition-all duration-300 ${
                    expandedProject === project.id ? "rotate-90" : ""
                  }`}
                >
                  →
                </div>
              </div>

              {/* Smooth Dropdown Content - Shows on click */}
              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 pb-4 space-y-4">
                      {/* Project Image */}
                      <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={
                            typeof project.projectImage === "string"
                              ? project.projectImage
                              : project.projectImage.src
                          }
                          alt={project.projectName}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.projectDescription}
                      </p>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <ToolIcon key={tool} tool={tool} />
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 pt-2">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors duration-300 underline underline-offset-4"
                        >
                          View Demo
                        </a>
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-300 underline underline-offset-4"
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <button>
          <Link href="/projects">View All Projects</Link>
        </button>
      </motion.div>
    </div>
  );
};

export default RecentProjects;
