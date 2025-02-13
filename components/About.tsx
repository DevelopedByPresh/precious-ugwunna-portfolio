/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";

const technologies = [
  "Solidity",
  "Ethers.js",
  "Hardhat",
  "Javascript",
  "Typescript",
  "React",
  "Tailwind CSS",
  "NextJS",
  "GSAP",
  "Express.js",
  "Node.js",
  "MongoDb",
];

const About = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-20 pt-16 sm:pt-20 
      max-w-7xl mx-auto w-full"
    >
      <h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center 
        mb-8 sm:mb-12 md:mb-16 font-semibold uppercase text-gray-500 
        font-programme tracking-wider"
      >
        Persona Blurb
      </h2>

      <div
        className="flex flex-col lg:flex-row items-center lg:items-start 
        gap-8 lg:gap-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <Image
            src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1733997009/IMG_0540_1_s_xycclv.jpg"
            alt="Ayodeji Atanda's mirror selfie"
            height={300}
            width={300}
            priority
            className="border-dashed border-2 border-gray-400 object-cover 
            rounded-lg shadow-lg transition-transform duration-300 
            hover:scale-105"
          />
        </motion.div>

        <div className="space-y-6 text-base sm:text-lg lg:text-xl">
          <div className="space-y-4">
            <p className="leading-relaxed">
              Hey there! I'm{" "}
              <strong className="underline decoration-2">Ayodeji</strong>, a
              passionate software developer with expertise in both traditional
              front-end development and blockchain technologies. Whether it's
              building visually stunning and user-friendly websites or crafting
              decentralized applications (dApps) and smart contracts, I love
              creating solutions that make a lasting impact.
            </p>
            <p className="leading-relaxed">
              With over 3 years of experience, I specialize in React, Next.js,
              Tailwind CSS, and TypeScript, delivering responsive, intuitive
              interfaces. My journey into blockchain and Web3 has added skills
              like Solidity to my toolkit, allowing me to contribute to the
              decentralized future while continuing to excel in regular
              front-end development projects.
            </p>
            <p className="leading-relaxed">
              Beyond work, I find inspiration in music, which keeps my
              creativity flowing. When I'm not coding, you might catch me
              swimming, my go-to activity for relaxation and recharging.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Technologies I work with:
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {technologies.map((tech) => (
                <motion.li
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <span className="h-1.5 w-1.5 bg-gray-500 rounded-full" />
                  <span>{tech}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

About.displayName = "About";

export default About;
