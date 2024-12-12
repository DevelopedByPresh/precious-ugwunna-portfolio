import africash from "Assets/Screenshot (392).png";
import chatgpt from "../Assets/Screenshot (409).png";
import blog from "../Assets/Screenshot (407).png";
import multiselect from "../Assets/Screenshot (431).png";
import NextJs from "../Assets/Next.js Logo Vector.png";
import Framer from "../Assets/framer-motion-seeklogo.com.svg";
import react from "../Assets/react-seeklogo.com.svg";
import sanity from "../Assets/exghybvcvdmerns27fff.png";
import html5 from "../Assets/kisspng-computer-icons-html5-scalable-vector-graphics-port-socialpack-chocolate-icon-5c4b3bbd2275a7.4033632815484343651412.png";
import css from "../Assets/pngegg (19).png";
import sass from "../Assets/pngfind.com-sass-logo-png-4521456.png";
import nextAuth from "../Assets/logo-sm.png";
import MongoDb from "../Assets/1_ty8m8Y3dzgD6P5Xc17gbYw.jpg";
import { StaticImageData } from "next/image";

interface ImageData {
  alt: string;
  src: string | StaticImageData;
  progress: string;
}

type JobExperience = {
  occupation: string;
  companyName: string;
  dateStart: string;
  dateEnd: string;
  responsibilities: string[];
};

type Project = {
  id: number;
  projectName: string;
  projectImage: string | StaticImageData;
  projectDescription: string;
  demoLink: string;
  githubLink: string;
  tools: string[];
};

export const projectss: Project[] = [
  {
    "id": 9,
    "projectName": "MetaSecure-web3.0",
    "projectImage": "https://res.cloudinary.com/dhvwthnzq/image/upload/v1733925350/file_2024-12-11_13.55.28_zxavof.png",
    "projectDescription": "MetaSecure-web3.0 is a decentralized application (dApp) built using Solidity and React. This project leverages the power of blockchain technology to enhance web security and provide decentralized solutions.",
    "demoLink": "https://meta-secure-web3-0.vercel.app/",
    "githubLink": "https://github.com/deji-ice/MetaSecure-web3.0",
    "tools": [
      "Axios",
      "Solidity",
      "React",
      "JavaScript",
      "tailwindCSS",
      "Ethers.js",
      "Blockchain",
      "Vercel"
    ]
  } ,
  {

    id: 8,
    projectName: "HarvestGrove",
    projectImage:
      "https://res.cloudinary.com/dhvwthnzq/image/upload/v1706018424/mines/Screenshot_62_xmbyau.png",
    projectDescription:
      "Transforming a Figma design into a vibrant HarvestGrove landing page, I utilized React, Framer Motion, and GSAP for dynamic animations. With Tailwind CSS and Cloudinary, the result is a visually stunning and responsive digital showcase that harmonizes artistry and technology.",
    demoLink: "https://harvestgrove.vercel.app",
    githubLink: "https://github.com/deji-ice/HarvestGrovee",
    tools: [
      "GSAP",
      "Framer Motion",
      "React",
      "Javascript",
      "TailwindCSS",
      "SEO",
      "Cloudinary",
      "Vercel",
    ],
  },
  {
    id: 7,
    projectName: "Photographer Portfolio Showcase",
    projectImage:
      "https://res.cloudinary.com/dhvwthnzq/image/upload/v1691492785/cartizn/Screenshot_2023-08-08_100540_txylyj.png",
    projectDescription:
      "An Artistic Fusion of Technology and Imagery, i crafted a captivating portfolio website for a photographer using React, Framer Motion, and GSAP to bring imagery to life. Leveraged Tailwind CSS for a polished design and integrated Cloudinary for seamless image loading. Collaborated with a designer to harmonize artistry and technology, resulting in a visually stunning digital showcase.",
    demoLink: "https://cartizn.vercel.app/",
    githubLink: "https://github.com/deji-ice/cartizn",
    tools: [
      "GSAP",
      "Framer Motion",
      "React",
      "React-Router",
      "Javascript",
      "TailwindCSS",
      "SEO",
      "EmailJs",
      "Cloudinary",
      "Vercel",
    ],
  },
  {
    id: 6,
    projectName: "AirBnb Clone",
    projectImage:
      "https://res.cloudinary.com/dhvwthnzq/image/upload/v1706101494/Screenshot_63_mkyrpo.png",
    projectDescription:
      "Crafting an Airbnb-inspired frontend clone with TypeScript and static data. Elevate the user experience with seamless property browsing, responsive design, and an intuitive interface. A showcase of design and functionality inspired by Airbnb's renowned simplicity.",
    demoLink: "https://airbnb-500-c.vercel.app/",
    githubLink: "https://github.com/deji-ice/airbnb-500C/",
    tools: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "DaisyUI",
      "Unsplash",
      "Cloudinary",
      "Vercel",
    ],
  },
  {
    id: 5,
    projectName: "Software Developer Portfolio Showcase",
    projectImage:
      "https://res.cloudinary.com/dhvwthnzq/image/upload/v1691494937/cartizn/Screenshot_2023-08-08_124122_hssdkd.png",
    projectDescription:
      "Crafted an SEO-optimized Developer Portfolio using Framer Motion, Next.js, TypeScript, and Tailwind CSS. Seamlessly integrated Spotify API and Cloudinary for enhanced user experience and image optimization. Explore my journey, tech expertise, and standout projects through this interactive showcase designed to leave a lasting digital impression.",
    demoLink: "https://ayodejiatanda.vercel.app/",
    githubLink: "https://github.com/deji-ice/Mainportfoli0",
    tools: [
      "Framer Motion",
      "NextJS",
      "Typescript",
      "TailwindCSS",
      "Spoitfy API",
      "SEO",
      "Cloudinary",
      "Vercel",
    ],
  },

  {
    id: 4,
    projectName: "Blog with Embedded Sanity CMS",
    projectImage: blog,
    projectDescription:
      "A personal blog website using Next.js 13 and TypeScript, with an embedded content management system from Sanity. Leveraged Tailwind CSS for responsive design and utilized Next.js SSG and revalidation for optimal performance. Implemented dynamic routing to generate pages for each blog post and used server-side rendering to enhance SEO. Ensured a seamless user experience with lazy loading and image optimization.",
    demoLink: "https://thecodechronicles.vercel.app/",
    githubLink: "https://github.com/deji-ice/nextjs-blog",
    tools: [
      "Sanity",
      "Typescript",
      "NextJS",
      "TailwindCSS",
      "Heroicons",
      "Vercel",
    ],
  },
  {
    id: 3,
    projectName: "Africash Fintech Landing Page",
    projectImage:
      "https://res.cloudinary.com/dhvwthnzq/image/upload/v1691494434/cartizn/Screenshot_2023-08-08_123244_tklbio.png",
    projectDescription:
      "Africash is a fintech landing page built with React, Tailwind CSS, and Framer Motion. The landing page is designed to promote the Africash financial platform with a modern and responsive user interface. Features include easy navigation, smooth animations, and informative sections highlighting the platform's key benefits.",
    demoLink: "https://africash.netlify.app/",
    githubLink: "https://github.com/deji-ice/Africash",
    tools: ["TailwindCSS", "React", "Framer Motion", "Netlify"],
  },
  {
    id: 2,
    projectName: "ChatGPT Clone",
    projectImage: chatgpt,
    projectDescription:
      "A web application built with TypeScript, Next.js 13, and Tailwind CSS that allows users to chat with an AI language model. Implemented Next.js server-side rendering and utilized Firebase for real-time communication. Implemented NextAuth for user authentication. Developed form validation with Yup. This project showcases my skills in building modern, scalable web applications using the latest technologies.",
    demoLink: "https://chat-gpt-vlone.vercel.app/",
    githubLink: "https://github.com/deji-ice/chat-gpt",
    tools: ["Typescript", "NextJS", "Tailwind CSS", "Next Auth", "Open AI"],
  },
  {
    id: 1,
    projectName: "Custom Multiselect Component",
    projectImage: multiselect,
    projectDescription:
      "A React and TypeScript-based multiselect component created from scratch with CSS modules. Allows users to select multiple options from a dropdown list. Highly customizable, performant, and integrates seamlessly with React applications. Demonstrates expertise in building reusable UI components with a focus on flexibility and maintainability",
    demoLink: "https://multi-select-typescipt.netlify.app/",
    githubLink: "https://github.com/deji-ice/multi-select-typescript",
    tools: ["Typescript", "React", "CSS", "Netlify"],
  },
];

export const images: ImageData[] = [
  {
    alt: "HTML 5",
    src: html5,
    progress: "85%",
  },
  {
    alt: "React",
    src: react,
    progress: "85%",
  },
  {
    alt: "typescript",
    src: "https://abrudz.github.io/logos/TypeScript.svg",
    progress: "85%",
  },
  {
    alt: "nextjs",
    src: NextJs,
    progress: "85%",
  },
  {
    alt: "javascript",
    src: "https://abrudz.github.io/logos/JS.svg",
    progress: "85%",
  },
  {
    alt: "tailwind-css",
    src: "https://asset.brandfetch.io/idKJ12s-EY/idI9erPtdw.jpeg",
    progress: "85%",
  },
  {
    alt: "firebase",
    src: "https://asset.brandfetch.io/ideatLZc2I/idlwOLs00g.jpeg",
    progress: "85%",
  },
  {
    alt: "framer",
    src: Framer,
    progress: "85%",
  },
  {
    alt: "SASS",
    src: sass,
    progress: "85%",
  },

  {
    alt: "sanity",
    src: sanity,
    progress: "85%",
  },

  {
    alt: "gsap",
    src: "https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg",
    progress: "85%",
  },

  {
    alt: "nextAuth",
    src: nextAuth,
    progress: "85%",
  },
];

export const experiences: JobExperience[] = [
  {
    occupation: "Fullstack Javascript Instructor",
    companyName: "GOMYCODE",
    dateStart: "09/2023",
    dateEnd: "Till Date",
    responsibilities: [
      `Mentored and facilitated collaborative learning through group discussions,
            peer code reviews, and team projects, fostering teamwork and enhancing
            problem-solving skills.`,

      `
            Innovatively crafted engaging coding exercises, projects, and real-world
scenarios in React, ES6, Node.js, Redux Toolkit, REST APIs, and database
management to ensure hands-on learning experiences.
            `,

      `
        Organized workshops, coding bootcamps, and guest speaker sessions,
showcasing a strong sense of responsibility and innovation in students'
education journey.
        `,
      `
        Stayed current with industry trends, tools, and best practices, seamlessly
integrating them into the curriculum to equip students with marketable skills.
        `,
    ],
  },
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
      `Collaborated with a team of five developers to create an insurance online
      application using ASP.NET, resulting in a 20% increase in customer
      acquisition and a 15% improvement in overall application efficiency.`,
      `Learned C# and the ASP.NET framework and applied them in two projects,
      contributing to a 30% reduction in development time and a 25% increase in
      code quality.`,
      `Developed a Subscription Video App using ASP.NET as a self skill-building
      project, enhancing my proficiency in C# and the ASP.NET framework while
      gaining hands-on experience in application development and database
      management.`,
    ],
  },
];
