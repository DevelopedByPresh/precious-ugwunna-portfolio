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
    projectImage: string;
    projectDescription: string;
    demoLink: string;
    githubLink: string;
  };
  
  export const projects: Project[] = [
    {
        id: 1,
      projectName: "ChatGPT Clone",
      projectImage: "image1.jpg",
      projectDescription: "Missing Tailwind CSS: Make sure you have properly included the Tailwind CSS library in your project. Check if you have imported it correctly in your main CSS file or added the CDN link in your HTML file. Without Tailwind CSS, the list styles may not be applied.",
      demoLink: "https://www.example.com/project1-demo",
      githubLink: "https://github.com/user/project1",
    },
    {
        id: 2,
        projectName: " Clone",
        projectImage: "image1.jpg",
        projectDescription: "Missing Tailwind CSS: Make sure you have properly included the Tailwind CSS library in your project. Check if you have imported it correctly in your main CSS file or added the CDN link in your HTML file. Without Tailwind CSS, the list styles may not be applied.",
        demoLink: "https://www.example.com/project1-demo",
        githubLink: "https://github.com/user/project1",
      },
    {
        id: 3,
      projectName: "Blog",
      projectImage: "image2.jpg",
      projectDescription: "Missing Tailwind CSS: Make sure you have properly included the Tailwind CSS library in your project. Check if you have imported it correctly in your main CSS file or added the CDN link in your HTML file. Without Tailwind CSS, the list styles may not be applied.",
      demoLink: "https://www.example.com/project2-demo",
      githubLink: "https://github.com/user/project2",
    },
    {
        id: 4,
      projectName: "Aricash",
      projectImage: "image3.jpg",
      projectDescription: "Missing Tailwind CSS: Make sure you have properly included the Tailwind CSS library in your project. Check if you have imported it correctly in your main CSS file or added the CDN link in your HTML file. Without Tailwind CSS, the list styles may not be applied.",
      demoLink: "https://www.example.com/project3-demo",
      githubLink: "https://github.com/user/project3",
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
        dateStart: "2022-01-01",
        dateEnd: "2023-01-01",
        responsibilities: [
            "Developed user interfaces using React.js",
            "Implemented responsive designs with CSS and media queries",
            "Collaborated with the design team to bring concepts to life",
        ],
    },
    {
        occupation: "software Intern",
        companyName: "First Bank",
        dateStart: "2020-06-01",
        dateEnd: "2020-12-31",
        responsibilities: [
            "Created wireframes and prototypes for web applications",
            "Designed visually appealing user interfaces with Adobe XD",
            "Worked closely with developers to ensure design implementation",
        ],
    },
];
