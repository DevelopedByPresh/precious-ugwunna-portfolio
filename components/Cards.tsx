"use client";
import { useState, memo } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/data";

const Cards = memo(() => {
  const [selectedCompany, setSelectedCompany] = useState<string>(
    experiences[0].companyName
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col xl:flex-row xl:justify-center xl:items-start 
        gap-6 xl:gap-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Company tabs */}
      <nav
        className="flex xl:flex-col overflow-x-auto scrollbar-hide 
        border-b xl:border-b-0 xl:border-l border-gray-200"
      >
        {experiences.map((experience) => (
          <button
            key={experience.companyName}
            onClick={() => setSelectedCompany(experience.companyName)}
            className={`px-4 py-2 text-sm text-start md:text-base whitespace-nowrap 
              transition-all duration-300 hover:bg-gray-100 
              ${
                selectedCompany === experience.companyName
                  ? "text-slate-900 border-slate-900 bg-gray-100 font-medium xl:border-l-2 border-b-2 xl:border-b-0"
                  : "text-gray-500 border-transparent"
              }`}
          >
            {experience.companyName}
          </button>
        ))}
      </nav>

      {/* Experience details */}
      <motion.div
        key={selectedCompany}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1 space-y-4"
      >
        {experiences
          .filter((exp) => exp.companyName === selectedCompany)
          .map((experience) => (
            <div key={experience.companyName} className="space-y-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
                {experience.occupation}{" "}
                <span className="text-slate-900">
                  @ {experience.companyName}
                </span>
              </h3>

              <p className="text-sm text-gray-500">
                {experience.dateStart} - {experience.dateEnd}
              </p>

              <ul className="space-y-4 text-sm md:text-base text-gray-600">
                {experience.responsibilities.map((responsibility, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-start space-x-2"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 
                      rounded-full bg-slate-500"
                    />
                    <span>{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
      </motion.div>
    </motion.article>
  );
});

Cards.displayName = "Cards";

export default Cards;
