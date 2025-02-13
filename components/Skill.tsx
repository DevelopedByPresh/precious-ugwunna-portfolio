import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  Logo: string | StaticImageData;
};

const Skill = ({ Logo }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={Logo}
        width={50}
        height={50}
        alt="skill logo"
        loading="lazy"
      />
    </div>
  );
};

export default Skill;
