// @ts-nocheck
import React from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiReact,
  SiJavascript,
  SiSolidity,
  SiAxios,
  SiEthers,
  SiGreensock,
  SiReactrouter,
  SiDaisyui,
  SiUnsplash,
  SiSanity,
  SiOpenai,
  SiCss3,
  SiNetlify,
  SiVercel,
  SiDocker,
  SiExpress,
  SiVite,
  SiPostman,
  SiSass,
  SiMongodb,
  SiCloudinary,
} from "react-icons/si";

const ToolIcon: React.FC<{ tool: string }> = ({ tool }) => {
  const iconSize = 20;
  const baseClassName = "rounded-full h-8 w-8 p-1";

  switch (tool.toLowerCase()) {
    case "nextjs":
      return (
        <SiNextdotjs
          size={iconSize}
          className={`${baseClassName} text-white bg-black`}
          title="Next.js"
          aria-label="Next.js"
        />
      );
    case "typescript":
      return (
        <SiTypescript
          size={iconSize}
          className={`${baseClassName} text-white bg-blue-600`}
          title="TypeScript"
          aria-label="TypeScript"
        />
      );
    case "tailwindcss":
      return (
        <SiTailwindcss
          size={iconSize}
          className={`${baseClassName} text-white bg-cyan-500`}
          title="Tailwind CSS"
          aria-label="Tailwind CSS"
        />
      );
    case "framer motion":
      return (
        <SiFramer
          size={iconSize}
          className={`${baseClassName} text-white bg-purple-600`}
          title="Framer Motion"
          aria-label="Framer Motion"
        />
      );
    case "cloudinary":
      return (
        <SiCloudinary
          size={iconSize}
          className={`${baseClassName} text-white bg-blue-500`}
          title="Cloudinary"
          aria-label="Cloudinary"
        />
      );
    case "react":
      return (
        <SiReact
          size={iconSize}
          className={`${baseClassName} text-white bg-cyan-400`}
          title="React"
          aria-label="React"
        />
      );
    case "javascript":
      return (
        <SiJavascript
          size={iconSize}
          className={`${baseClassName} text-white bg-yellow-400`}
          title="JavaScript"
          aria-label="JavaScript"
        />
      );
    case "solidity":
      return (
        <SiSolidity
          size={iconSize}
          className={`${baseClassName} text-white bg-gray-800`}
          title="Solidity"
          aria-label="Solidity"
        />
      );
    case "axios":
      return (
        <SiAxios
          size={iconSize}
          className={`${baseClassName} text-white bg-purple-500`}
          title="Axios"
          aria-label="Axios"
        />
      );
    case "ethers.js":
      return (
        <SiEthers
          size={iconSize}
          className={`${baseClassName} text-white bg-blue-700`}
          title="Ethers.js"
          aria-label="Ethers.js"
        />
      );
    case "gsap":
      return (
        <SiGreensock
          size={iconSize}
          className={`${baseClassName} text-white bg-green-500`}
          title="GSAP"
          aria-label="GSAP"
        />
      );
    case "react-router":
      return (
        <SiReactrouter
          size={iconSize}
          className={`${baseClassName} text-white bg-red-500`}
          title="React Router"
          aria-label="React Router"
        />
      );
    case "daisyui":
      return (
        <SiDaisyui
          size={iconSize}
          className={`${baseClassName} text-white bg-green-400`}
          title="DaisyUI"
          aria-label="DaisyUI"
        />
      );
    case "unsplash":
      return (
        <SiUnsplash
          size={iconSize}
          className={`${baseClassName} text-white bg-black`}
          title="Unsplash"
          aria-label="Unsplash"
        />
      );
    case "sanity":
      return (
        <SiSanity
          size={iconSize}
          className={`${baseClassName} text-white bg-red-600`}
          title="Sanity"
          aria-label="Sanity"
        />
      );
    case "open ai":
      return (
        <SiOpenai
          size={iconSize}
          className={`${baseClassName} text-white bg-green-600`}
          title="OpenAI"
          aria-label="OpenAI"
        />
      );
    case "css":
      return (
        <SiCss3
          size={iconSize}
          className={`${baseClassName} text-white bg-blue-500`}
          title="CSS3"
          aria-label="CSS3"
        />
      );
    case "netlify":
      return (
        <SiNetlify
          size={iconSize}
          className={`${baseClassName} text-white bg-teal-500`}
          title="Netlify"
          aria-label="Netlify"
        />
      );
    case "vercel":
      return (
        <SiVercel
          size={iconSize}
          className={`${baseClassName} text-white bg-black`}
          title="Vercel"
          aria-label="Vercel"
        />
      );
    case "docker":
      return (
        <SiDocker
          size={iconSize}
          className={`${baseClassName} text-white bg-blue-600`}
          title="Docker"
          aria-label="Docker"
        />
      );
    case "expressjs":
      return (
        <SiExpress
          size={iconSize}
          className={`${baseClassName} text-white bg-gray-700`}
          title="Express.js"
          aria-label="Express.js"
        />
      );
    case "vite":
      return (
        <SiVite
          size={iconSize}
          className={`${baseClassName} text-white bg-purple-500`}
          title="Vite"
          aria-label="Vite"
        />
      );
    case "postman":
      return (
        <SiPostman
          size={iconSize}
          className={`${baseClassName} text-white bg-orange-500`}
          title="Postman"
          aria-label="Postman"
        />
      );
    case "sass":
      return (
        <SiSass
          size={iconSize}
          className={`${baseClassName} text-white bg-pink-500`}
          title="Sass"
          aria-label="Sass"
        />
      );
    case "mongodb":
      return (
        <SiMongodb
          size={iconSize}
          className={`${baseClassName} text-white bg-green-600`}
          title="MongoDB"
          aria-label="MongoDB"
        />
      );
    default:
      // Fallback to text if no icon is found
      return (
        <span className="inline-block px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-md">
          {tool}
        </span>
      );
  }
};

export default ToolIcon;
