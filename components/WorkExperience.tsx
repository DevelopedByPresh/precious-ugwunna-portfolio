/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Cards from "./Cards";
import { experiences } from "@/data/mockData";
type Props = {};

const WorkExperience = ({}: Props) => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(
    experiences.length > 0 ? experiences[0].companyName : null
  );

  // const handleCompanyClick = (companyName: string) => {
  //   setSelectedCompany(companyName);
  // };

  return (
    <div
      className="h-screen flex relative overflow-hidden z-0 flex-col md:flex-row text-left px-10 lg:my-[10rem]
   max-w-full items-center pt-20 mx-auto justify-evenly no-scrollbar "
    >
      <h3 className="text-gray-500 absolute xl:text-3xl  xl:top-16 top-24 lg:top-0 text-3xl mb-5  md:text-5xl md:mb-[6rem] font-semibold uppercase font-programme">
        Experience
      </h3>

      <Cards />
    </div>
  );
};

export default WorkExperience;
