/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState } from "react";
import { experiences } from "@/data/mockData";


type Props = {};

const Cards = ({}: Props) => {

  const [selectedCompany, setSelectedCompany] = useState<string | null>(
    experiences.length > 0 ? experiences[0].companyName : null
  );

  const handleCompanyClick = (companyName: string) => {
    setSelectedCompany(companyName);
  };
  return (
    <article className="flex flex-col xl:flex-row xl:justify-center xl:items-baseline xl:space-x-5 md:m-5 md:p-10 md:items-center snap-x snap-mandatory absolute top-[12rem] md:top-[9rem] lg:top-[5rem] xl:top-[6rem] w-full border-slate-600 ">
    <ul className="flex  whitespace-nowrap  xl:flex-col xl:justify-start overflow-x-auto mx-2 mb-5 max-w-xs">
      {experiences.map((experience) => (
        <li
        className={`inline-block px-4 py-2 text-sm xl:text-sm border-b-2 xl:border-b-0 xl:border-l-2 text-slate-800   md:text-xl text-center items-center justify-center hover:bg-gray-200 transition duration-500 ease-in-out ${
          selectedCompany === experience.companyName ? "border-b-2 xl:border-l-2 xl:border-b-0 border-[black] text-white bg-slate-600 xl:bg-transparent xl:text-slate-800 xl:font-semibold"  : ""
        }`}
          key={experience.companyName}
          onClick={() => handleCompanyClick(experience.companyName)}
        >
          {experience.companyName}
        </li>
      ))}
    </ul>
    <div className="xl:max-w-xl">
      {selectedCompany && (
        <>
          <h3 className="text-xl md:text-2xl m-2 ">
            {
              experiences.find((exp) => exp.companyName === selectedCompany)
                ?.occupation
            }{"  "}
            <span className="font-semibold text-slate-900" >@{"  "}{selectedCompany}</span>
          </h3>

          <p className="text-xs m-2">
            {
              experiences.find((exp) => exp.companyName === selectedCompany)
                ?.dateStart
            }{" "}
            -{" "}
            {
              experiences.find((exp) => exp.companyName === selectedCompany)
                ?.dateEnd
            }
          </p>

          <ul className="text-sm md:text-xl m-2 list-disc space-y-2 pl-5 lg:max-w-3xl xl:text-lg">
            {experiences
              .find((exp) => exp.companyName === selectedCompany)
              ?.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            {/* <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat risus id massa pulvinar
 condimentum. Donec eu tincidunt mauris. Mauris efficitur ex vel ex sollicitudin, nec euismod lorem 
 imperdiet.</li>
 <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat risus id massa pulvinar
 condimentum. Donec eu tincidunt mauris. Mauris efficitur ex vel ex sollicitudin, nec euismod lorem 
 imperdiet.</li>
 <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat risus id massa pulvinar
 condimentum. Donec eu tincidunt mauris. Mauris efficitur ex vel ex sollicitudin, nec euismod lorem 
 imperdiet.</li> */}
          </ul>
        </>
      )}
    </div>
  </article>
  );
};

export default Cards;
