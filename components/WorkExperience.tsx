/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Cards from "./Cards";
type Props = {};

const WorkExperience = ({}: Props) => {
  return (
    <div
      className="h-screen flex relative overflow-hidden z-0 flex-col md:flex-row text-left px-10 lg:my-[10rem]
   max-w-full items-center pt-20 mx-auto justify-evenly "
    >
      <h3 className="text-gray-500 absolute top-24 lg:top-0 text-3xl mb-5  md:text-5xl md:mb-[6rem] font-semibold uppercase tracking-[10px]">
        Experience
      </h3>
      <div className="w-full flex space-x-5 m-5 overflow-x-scroll p-10 snap-x snap-mandatory ">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default WorkExperience;
