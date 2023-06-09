import africash from "Assets/Screenshot (392).png";
import chatgpt from "../Assets/Screenshot (409).png";
import blog from "../Assets/Screenshot (407).png";
import { StaticImageData } from "next/image";



interface ImageData {
    alt: string;
    src: string;
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
      projectName: "ChatGPT Clone",
      projectImage: chatgpt,
      projectDescription: "Missing Tailwind CSS: Make sure you have properly included the Tailwind CSS library in your project. Check if you have imported it correctly in your main CSS file or added the CDN link in your HTML file. Without Tailwind CSS, the list styles may not be applied.",
      demoLink: "https://chat-gpt-vlone.vercel.app/",
      githubLink: "https://github.com/deji-ice/chat-gpt",
      tools:["Javascript", "Typescript", "NextJS","Tailwind CSS","React" ,"Tailwind CSS","React"]
    },
    {
        id: 2,
        projectName: " Clone",
        projectImage: chatgpt,
        projectDescription: "Missing Tailwind CSS: Make sure you have properly included the Tailwind CSS library in your project. Check if you have imported it correctly in your main CSS file or added the CDN link in your HTML file. Without Tailwind CSS, the list styles may not be applied.",
        demoLink: "https://www.example.com/project1-demo",
        githubLink: "https://github.com/user/project1",
        tools:["Javascript", "Typescript", "NextJS",]
      },
    {
        id: 3,
      projectName: "Blog with Embedded Sanity CMS",
      projectImage: blog,
      projectDescription: "Missing Tailwind CSS: Make sure you have properly included the Tailwind CSS library in your project. Check if you have imported it correctly in your main CSS file or added the CDN link in your HTML file. Without Tailwind CSS, the list styles may not be applied.",
      demoLink: "https://curiositychronicles.vercel.app/",
      githubLink: "https://github.com/deji-ice/nextjs-blog",
      tools:["JavaScript", "Typescript", "NextJS","TailwindCSS","React"]
    },
    {
        id: 4,
      projectName: "Aricash",
      projectImage: africash,
      projectDescription: "Missing Tailwind CSS: Make sure you have properly included the Tailwind CSS library in your project. Check if you have imported it correctly in your main CSS file or added the CDN link in your HTML file. Without Tailwind CSS, the list styles may not be applied.",
      demoLink: "https://africash.netlify.app/",
      githubLink: "https://github.com/deji-ice/Africash",
      tools:["JavaScript", "Typescript", "NextJS","TailwindCSS","React"]
    },
  ];
  

export const images: ImageData[] = [
    {
        alt: "React",
        src: "https://asset.brandfetch.io/idbkMiejO4/idee5k_Xjl.svg",
        progress: "85%"
    },
    {
        alt: "typescript",
        src: "https://asset.brandfetch.io/idKX_Hb7va/id1t_VNpUn.svg",
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
        src: "https://asset.brandfetch.io/idCeIE9B96/id672ybz9X.svg",
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
