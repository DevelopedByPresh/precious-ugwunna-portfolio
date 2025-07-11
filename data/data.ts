import { StaticImageData } from "next/image";
import { DockerLogo, ExpressLogo, JavascriptLogo, MongoDbLogo, NextJsLogo, PostmanLogo, ReactLogo, SassLogo, TailwindLogo, VercelLogo, ViteLogo } from "@/Assets";
import { JobExperience, LogoData, Project } from "@/types/types";


export const projects: Project[] = [
  {
    id: crypto.randomUUID(),
    projectName: "Furnisphere",
    projectImage: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1752245211/furnisphere_hlgcjb.png",
    projectDescription: "Furnisphere is a modern furniture e-commerce platform that showcases a wide range of furniture products. Built with Next.js, TypeScript, and Tailwind CSS, it features a responsive design, smooth animations using Framer Motion, and a user-friendly interface for browsing and purchasing furniture online.",
    demoLink: "https://furnisphere-alpha.vercel.app/",
    githubLink: "https://github.com/deji-ice/furnisphere",
    tools: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ]
  },
  {
    id: crypto.randomUUID(),
    projectName: "Transparent Governance Foundation",
    projectImage: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1739445608/mines/38ffadab-3a96-4aa2-890c-5a0f0b8ac4e3.png",
    projectDescription: "Transparent Governance Foundation is a web application built to promote transparency and accountability in governance. Utilizing modern web technologies to create an interactive and informative platform for civic engagement and governmental oversight.",
    demoLink: "https://www.transparencegovfoundation.org/",
    githubLink: "https://github.com/deji-ice/TransparentGovernanceFoundation",
    tools: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Cloudinary",
      "Paystack"
    ]
  },
  {
    id: crypto.randomUUID(),
    projectName: "MetaSecure-web3.0",
    projectImage: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1733925350/file_2024-12-11_13.55.28_zxavof.png",
    projectDescription: "MetaSecure-web3.0 is a decentralized application (dApp) built using Solidity and React. This project leverages the power of blockchain technology to enhance web security and provide decentralized solutions.",
    demoLink: "https://meta-secure-web3-0.vercel.app/",
    githubLink: "https://github.com/deji-ice/MetaSecure-web3.0",
    tools: [
      "React",
      "JavaScript",
      "Solidity",
      "Axios",
      "tailwindCSS",
      "Ethers.js",
    ]
  },
  {
    id: crypto.randomUUID(),
    projectName: "HarvestGrove",
    projectImage: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1706018424/mines/Screenshot_62_xmbyau.png",
    projectDescription: "Transforming a Figma design into a vibrant HarvestGrove landing page, I utilized React, Framer Motion, and GSAP for dynamic animations. With Tailwind CSS and Cloudinary, the result is a visually stunning and responsive digital showcase that harmonizes artistry and technology.",
    demoLink: "https://harvestgrove.vercel.app",
    githubLink: "https://github.com/deji-ice/HarvestGrovee",
    tools: [

      "React",
      "Javascript",
      "TailwindCSS",
      "GSAP",
      "Framer Motion",
      "Cloudinary",
    ],
  },
  {
    id: crypto.randomUUID(),
    projectName: "Photographer Portfolio Showcase",
    projectImage: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1691492785/cartizn/Screenshot_2023-08-08_100540_txylyj.png",
    projectDescription: "An Artistic Fusion of Technology and Imagery, i crafted a captivating portfolio website for a photographer using React, Framer Motion, and GSAP to bring imagery to life. Leveraged Tailwind CSS for a polished design and integrated Cloudinary for seamless image loading. Collaborated with a designer to harmonize artistry and technology, resulting in a visually stunning digital showcase.",
    demoLink: "https://cartizn.vercel.app/",
    githubLink: "https://github.com/deji-ice/cartizn",
    tools: [
      "React",
      "React-Router",
      "GSAP",
      "Framer Motion",
      "Javascript",
      "TailwindCSS",
      "SEO",
      "Cloudinary",
    ],
  },
  {
    id: crypto.randomUUID(),
    projectName: "AirBnb Clone",
    projectImage: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1706101494/Screenshot_63_mkyrpo.png",
    projectDescription: "Crafting an Airbnb-inspired frontend clone with TypeScript and static data. Elevate the user experience with seamless property browsing, responsive design, and an intuitive interface. A showcase of design and functionality inspired by Airbnb's renowned simplicity.",
    demoLink: "https://airbnb-500-c.vercel.app/",
    githubLink: "https://github.com/deji-ice/airbnb-500C/",
    tools: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "DaisyUI",
      "Unsplash",
      "Cloudinary",
    ],
  },
  {
    id: crypto.randomUUID(),
    projectName: "Blog with Embedded Sanity CMS",
    projectImage: `https://res.cloudinary.com/dhvwthnzq/image/upload/v1700045704/mines/Screenshot_407_tmrvrf.png`,
    projectDescription: "A personal blog website using Next.js 13 and TypeScript, with an embedded content management system from Sanity. Leveraged Tailwind CSS for responsive design and utilized Next.js SSG and revalidation for optimal performance. Implemented dynamic routing to generate pages for each blog post and used server-side rendering to enhance SEO. Ensured a seamless user experience with lazy loading and image optimization.",
    demoLink: "https://thecodechronicles.vercel.app/",
    githubLink: "https://github.com/deji-ice/nextjs-blog",
    tools: [
      "Typescript",
      "NextJS",
      "Sanity",
      "TailwindCSS",
    ],
  },
  {
    id: crypto.randomUUID(),
    projectName: "Africash Fintech Landing Page",
    projectImage: `https://res.cloudinary.com/dhvwthnzq/image/upload/v1700045703/mines/Screenshot_392_w80o0x.png`,
    projectDescription: "Africash is a fintech landing page built with React, Tailwind CSS, and Framer Motion. The landing page is designed to promote the Africash financial platform with a modern and responsive user interface. Features include easy navigation, smooth animations, and informative sections highlighting the platform's key benefits.",
    demoLink: "https://africash.netlify.app/",
    githubLink: "https://github.com/deji-ice/Africash",
    tools: ["React", "TailwindCSS", "Framer Motion",]
  },
];

export const logos: LogoData[] = [
  {
    alt: "Solidity",
    src: `https://res.cloudinary.com/dhvwthnzq/image/upload/v1733995420/Solidity_Programming_Language_os73lb.svg`,
  },
  {
    alt: "React",
    src: ReactLogo,
  },
  {
    alt: "typescript",
    src: "https://abrudz.github.io/logos/TypeScript.svg",
  },
  {
    alt: "nextjs",
    src: NextJsLogo,
  },
  {
    alt: "javascript",
    src: JavascriptLogo,
  },
  {
    alt: "tailwindcss",
    src: TailwindLogo,
  },
  {
    alt: "mongodb",
    src: MongoDbLogo,
  },
  {
    alt: "SASS",
    src: SassLogo,
  },
  {
    alt: "gsap",
    src: "https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg",
  },
  {
    alt: "Docker",
    src: DockerLogo,
  },
  {
    alt: "ExpressJS",
    src: ExpressLogo,
  },
  {
    alt: "Vercel",
    src: VercelLogo,
  },
  {
    alt: "Vite",
    src: ViteLogo,
  },
  {
    alt: "Postman",
    src: PostmanLogo,
  }
];

export const experiences: JobExperience[] = [
  {
    occupation: "Frontend Engineer",
    companyName: "Afren.ai",
    dateStart: "04/2025",
    dateEnd: "Till Date",
    responsibilities: [
      `Integrated AI-driven matchmaking features into the frontend platform, improving recommendation accuracy and enhancing customer satisfaction.`,
      `Implemented secure authentication systems and protected route logic to ensure user privacy and platform security.`,
      `Developed and maintained responsive, high-performance user interfaces for Afren.ai's web assets, including the landing page, blog, and core frontend platform, driving user engagement and brand consistency.`,
      `Collaborated closely with backend engineers and UI/UX designers to ensure seamless integration and consistency across the product experience.`,
    ],
  },
  {
    occupation: "Fullstack Javascript Instructor",
    companyName: "GOMYCODE",
    dateStart: "09/2023",
    dateEnd: "07/2025",
    responsibilities: [
      `Mentored and facilitated collaborative learning through group discussions, peer code reviews, and team projects, resulting in a 30% improvement in students' problem-solving abilities and teamwork skills.`,
      `Designed and delivered hands-on coding exercises, real-world projects, and scenarios in React, ES6, Node.js, Redux Toolkit, REST APIs, and database management, boosting engagement and practical understanding by 40%.`,
      `Organized impactful workshops, coding bootcamps, and guest speaker sessions, increasing participation rates by 25% and enhancing the overall learning experience.`,
      `Kept the curriculum dynamic by integrating the latest industry trends, tools, and best practices, which improved students' market-ready skills by 35%, reflected in their successful project completions and job readiness.`,
    ],
  },
  {
    occupation: "Frontend Developer",
    companyName: "Sabiroad",
    dateStart: "04/2022",
    dateEnd: "04/2023",
    responsibilities: [
      "Collaborated with a team of three to build an internal admin portal for the operations team, enabling payment fixes, user role management, and system configuration — which improved operational efficiency by 20%.",
      "Built a simplified frontend interface for testing and triggering backend actions, allowing non-technical team members to interact with endpoints without needing Postman.",
      "Worked closely with backend engineers to integrate APIs and services, reducing data retrieval time by 30% and ensuring smooth frontend-backend communication.",
      "Partnered with UI/UX designers to enhance usability and visual consistency, leading to a 25% drop in bounce rate and a 15% improvement in user satisfaction among internal users.",
    ],
  },
  {
    occupation: "Software Intern",
    companyName: "First Bank PLC",
    dateStart: "01/2020",
    dateEnd: "06/2020",
    responsibilities: [
      `Collaborated with a team of five developers to create an insurance online application using ASP.NET, resulting in a 20% increase in customer acquisition and a 15% improvement in overall application efficiency.`,
      `Learned C# and the ASP.NET framework and applied them in two projects, contributing to a 30% reduction in development time and a 25% increase in code quality.`,
      `Developed a Subscription Video App using ASP.NET as a self skill-building project, enhancing my proficiency in C# and the ASP.NET framework while gaining hands-on experience in application development and database management.`,
    ],
  },
];
