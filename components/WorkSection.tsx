"use client";
import RecentProjects from "./RecentProjects";
import WorkExperience from "./WorkExperience";

const WorkSection = () => {
  // Get top 3 latest projects

  return (
    <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-2  mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Work Experience Section */}
      <div className="flex-1">
        <WorkExperience />
      </div>

      {/* Recent Projects Section */}
      <div className="flex-1">
        <RecentProjects />
      </div>
    </div>
  );
};

export default WorkSection;
