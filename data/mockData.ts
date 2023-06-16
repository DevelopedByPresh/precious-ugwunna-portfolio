import africash from "Assets/Screenshot (392).png";
import chatgpt from "../Assets/Screenshot (409).png";
import blog from "../Assets/Screenshot (407).png";
import multiselect from "../Assets/Screenshot (431).png"
import NextJs from "../Assets/Next.js Logo Vector.png"
import Framer from '../Assets/framer-motion-seeklogo.com.svg'
import react from '../Assets/react-seeklogo.com.svg'
import sanity from '../Assets/exghybvcvdmerns27fff.png'
import nextAuth from '../Assets/logo-sm.png'
import MongoDb from '../Assets/1_ty8m8Y3dzgD6P5Xc17gbYw.jpg'
import { StaticImageData } from "next/image";



interface ImageData {
    alt: string;
    src: string | StaticImageData;
    progress: string
}

type JobExperience = {
    occupation: string;
    companyName: string;
    dateStart: string;
    dateEnd: string;
    responsibilities: string[];
};

type Project = {
    id: number
    projectName: string;
    projectImage: StaticImageData;
    projectDescription: string;
    demoLink: string;
    githubLink: string;
    tools: string[]
    
  };
  
  export const projectss: Project[] = [
    {
        id: 1,
      projectName: "Blog with Embedded Sanity CMS",
      projectImage: blog,
      projectDescription: "A personal blog website using Next.js 13 and TypeScript, with an embedded content management system from Sanity. Leveraged Tailwind CSS for responsive design and utilized Next.js SSG and revalidation for optimal performance. Implemented dynamic routing to generate pages for each blog post and used server-side rendering to enhance SEO. Ensured a seamless user experience with lazy loading and image optimization.",
      demoLink: "https://curiositychronicles.vercel.app/",
      githubLink: "https://github.com/deji-ice/nextjs-blog",
      tools:["Sanity", "Typescript", "NextJS","TailwindCSS",]
    },
    {
        id: 2,
      projectName: "Africash Fintech Landing Page",
      projectImage: africash,
      projectDescription: "Africash is a fintech landing page built with React, Tailwind CSS, and Framer Motion. The landing page is designed to promote the Africash financial platform with a modern and responsive user interface. Features include easy navigation, smooth animations, and informative sections highlighting the platform's key benefits.",
      demoLink: "https://africash.netlify.app/",
      githubLink: "https://github.com/deji-ice/Africash",
      tools:["TailwindCSS","React", "Framer Motion"]
    },
    {
        id: 3,
      projectName: "ChatGPT Clone",
      projectImage: chatgpt,
      projectDescription: "A web application built with TypeScript, Next.js 13, and Tailwind CSS that allows users to chat with an AI language model. Implemented Next.js server-side rendering and utilized Firebase for real-time communication. Implemented NextAuth for user authentication. Developed form validation with Yup. This project showcases my skills in building modern, scalable web applications using the latest technologies.",
      demoLink: "https://chat-gpt-vlone.vercel.app/",
      githubLink: "https://github.com/deji-ice/chat-gpt",
      tools:["Typescript", "NextJS","Tailwind CSS","Next Auth", "Open AI"]
    },


    {
        id: 4,
        projectName: "Custom Multiselect Component",
        projectImage: multiselect,
        projectDescription:"A React and TypeScript-based multiselect component created from scratch with CSS modules. Allows users to select multiple options from a dropdown list. Highly customizable, performant, and integrates seamlessly with React applications. Demonstrates expertise in building reusable UI components with a focus on flexibility and maintainability",
        demoLink: "https://multi-select-typescipt.netlify.app/",
        githubLink: "https://github.com/deji-ice/multi-select-typescript",
        tools:[ "Typescript", "React", "CSS Modules",]
      },
  ];
  

export const images: ImageData[] = [
    {
        alt: "React",
        src: react,
        progress: "85%"
    },
    {
        alt: "typescript",
        src: "https://asset.brandfetch.io/idKX_Hb7va/id1t_VNpUn.svg",
        progress: "85%"
    },
    {
        alt: "nextjs",
        src: NextJs,
        progress: "85%"
    },
    {
        alt: "javascript",
        src: "https://asset.brandfetch.io/idq5ck33b2/id8Fb4RR16.png",
        progress: "85%"
    },
    {
        alt: "tailwind-css",
        src: "https://asset.brandfetch.io/idKJ12s-EY/idI9erPtdw.jpeg",
        progress: "85%"
    },
    {
        alt: "firebase",
        src: "https://asset.brandfetch.io/ideatLZc2I/idlwOLs00g.jpeg",
        progress: "85%"
    },
    {
        alt: "framer",
        src: Framer,
        progress: "85%"
    },

    {
        alt: "sanity",
        src: sanity,
        progress: "85%"
    },
    
    {
        alt: "mongodb",
        src: MongoDb,
        progress: "85%"
    },
    
    {
        alt: "nextAuth",
        src: nextAuth,
        progress: "85%"
    },

];


export const experiences: JobExperience[] = [
    {
        occupation: "Frontend Developer",
        companyName: "Sabrioad",
        dateStart: "04/2022",
        dateEnd: "04/2023",
        responsibilities: [
            "I collaborated with a team of three to successfully build an admin dashboard for the operations team with role-based protected routes, resulting in a 20% increase in operational efficiency.",

            "I collaborated closely with UI/UX designers to enhance the visual appeal and user-friendliness of the website, resulting in a notable 15% improvement in user satisfaction and an impressive 25% reduction in bounce rate.",
            
            "I collaborated closely with the backend team to seamlessly integrate APIs and services, ensuring smooth data flow and efficient communication between the frontend and backend, resulting in a 30% reduction in data retrieval time.",
        ],
    },
    {
        occupation: "Software Intern",
        companyName: "First Bank PLC",
        dateStart: "01/2020",
        dateEnd: "06/2020",
        responsibilities: [
            "Created wireframes and prototypes for web applications",
            "Designed visually appealing user interfaces with Adobe XD",
            "Worked closely with developers to ensure design implementation",
        ],
    },
];
