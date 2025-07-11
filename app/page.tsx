import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic imports for better code splitting
const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"));
const WorkExperience = dynamic(() => import("@/components/WorkExperience"));
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projectss"));
const ContactMe = dynamic(() => import("@/components/ContactMe"));

// Custom loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-4 border-slate-900/20 border-t-slate-900 rounded-full animate-spin" />
  </div>
);

export default function Home() {
  return (
    <div
      className="font-outfit text-slate-900 snap-mandatory snap-y z-0
     overflow-x-hidden bg-[#ebebf3] scroll-smooth"
    >
      {[
        { id: "hero", Component: Hero, snap: "start" }, // Keep start for hero section
        { id: "about", Component: About, snap: "start" }, // Changed from center
        { id: "experience", Component: WorkExperience, snap: "start" }, // Changed from center
        // { id: "skills", Component: Skills, snap: "start" }, // Already start
        { id: "projects", Component: Projects, snap: "start" }, // Already start
        { id: "contact", Component: ContactMe, snap: "start" }, // Already start
      ].map(({ id, Component, snap }) => (
        <Suspense key={id} fallback={<LoadingFallback />}>
          <section id={id} className={`snap-${snap} min-h-screen relative`}>
            <Component />
          </section>
        </Suspense>
      ))}
    </div>
  );
}
