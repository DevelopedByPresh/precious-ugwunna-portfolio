/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import ayodejiatanda from "Assets/download (2) (1) Cropped.jpg";
import Image from "next/image";

type Props = {};

const About = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col px-8 md:px-20 pt-20 max-w-7xl xl:mx-10 "
    >
      <h2
        className="text-3xl mb-10 text-center md:text-5xl xl:text-3xl md:mb-[6rem] 
      font-semibold uppercase text-gray-500 font-programme"
      >
        Persona Blurb
      </h2>
      <div className="flex flex-col space-y-10 items-center lg:items-center lg:flex-row lg:space-x-20">
        <Image
          src={
            "https://res.cloudinary.com/dhvwthnzq/image/upload/v1733997009/IMG_0540_1_s_xycclv.jpg"
          }
          alt="Ayodeji Atanda's mirror selfie"
          height={300}
          width={300}
          className="border-dashed border-2 mb-10 object-cover border-gray-400 "
        />
        <div className="text-base lg:text-xl">
          <div className="flex flex-col space-y-2 lg:items-start">
            <p className="mb-4">
              Hey there! I'm <strong className="underline">Ayodeji</strong>, a
              passionate software developer with expertise in both traditional
              front-end development and blockchain technologies. Whether it's
              building visually stunning and user-friendly websites or crafting
              decentralized applications (dApps) and smart contracts, I love
              creating solutions that make a lasting impact.
            </p>
            <p className="mb-4">
              With over 3 years of experience, I specialize in React, Next.js,
              Tailwind CSS, and TypeScript, delivering responsive, intuitive
              interfaces. My journey into blockchain and Web3 has added skills
              like Solidity to my toolkit, allowing me to contribute to the
              decentralized future while continuing to excel in regular
              front-end development projects.
            </p>
            <p className="mb-4">
              Beyond work, I find inspiration in music, which keeps my
              creativity flowing. When I'm not coding, you might catch me
              swimming, my go-to activity for relaxation and recharging.
            </p>
          </div>

          <div className="mt-1">
            <p>Here are a few technologies I work with:</p>
            <ul className="grid grid-cols-2 list-disc px-5 mt-5">
              <li>Solidity</li>
              <li>Ethers.js</li>
              <li>Hardhat</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>NextJS</li>
              <li>GSAP</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>MongoDb</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
