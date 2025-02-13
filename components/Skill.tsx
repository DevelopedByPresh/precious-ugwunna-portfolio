import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  Logo: string | StaticImageData;
  alt: string;
};

const Skill = ({ Logo, alt }: Props) => {
  return (
    <div className="group relative flex justify-center items-center">
      <Image
        src={Logo}
        width={50}
        height={50}
        alt={alt}
        loading="lazy"
        className="transition-all duration-300 hover:scale-110"
      />
      {/* This is the tooltip that appears when you hover over the skill logos */}
      <span className="pointer-events-none absolute -top-10 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-gray-800 text-white text-sm px-3 py-1 rounded-md">
        {alt}
      </span>
    </div>
  );
};

export default Skill;