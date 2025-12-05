// import { DockerLogo, ExpressLogo, JavascriptLogo, MongoDbLogo, NextJsLogo, PostmanLogo, ReactLogo, SassLogo, TailwindLogo, VercelLogo, ViteLogo } from "@/Assets";
import { JobExperience, Project } from "@/types/types";


export const projects: Project[] = [



    {
    id: crypto.randomUUID(),
    projectName: "Worsship Admin Dashboard",
    projectImage: "/worsh.png",
    projectDescription: `Worsship is Church Mobile App where users are allowed to worship, join a live stream, donate and follow a preferred church and its activities...this is the admin dashboard`,
    demoLink: "http://worsship-frontend.s3-website-us-east-1.amazonaws.com/",
    githubLink: "https://github.com/DevelopedByPresh/worsship/tree/latest",
    tools: [
      "React",
      "Material UI",
      "React",
      "Javascript",
      "Redux",
      'Axios',
      'Postman'
    ]
  },



      {
    id: crypto.randomUUID(),
    projectName: "Worsship Landing Page for Church and Users",
    projectImage: "/landing-page.png",
    projectDescription: `Worsship is Church Mobile App where users are allowed to worship, join a live stream, donate and follow a preferred church and its activities...this is the Landing Page`,
    demoLink: "http://worsship.s3-website-us-east-1.amazonaws.com/",
    githubLink: "https://github.com/DevelopedByPresh/worsship-landing-page",
    tools: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Javascript",
      'Axios',
      'Postman'
    ]
  },



  

    {
    id: crypto.randomUUID(),
    projectName: "Adrolly",
    projectImage: "/ad.png",
    projectDescription: " Adrolly is a wholly owned Nigerian company committed to delivering innovative financial solutions including cash loans",
    demoLink: "https://adrollyfinance.com/",
   // githubLink: "https://github.com/deji-ice/furnisphere",
    tools: [
      "Reactjs",
      "TypeScript",
      "Redux",
      "Material UI",
    ]
  },


  {
    id: crypto.randomUUID(),
    projectName: "Breics",
    projectImage: "/breics.jpg",
    projectDescription: `Breics is a real estate wealth management company providing everyone access to the security and stability. `,
    demoLink: "https://www.breics.com",
  //  githubLink: "https://github.com/deji-ice/streaming-app-next",
    tools: [
      "Vuejs",
      "Nuxtjs",
      "TailwindCSS",
        'VueX',
    ]
  },

  {
    id: crypto.randomUUID(),
    projectName: "Lonefa",
    projectImage: "/lone.png",
    projectDescription: "Lonefa is a farm Application built with HTML, CSS and Javascript to showcase the product, beauty and content of a farm",
    demoLink: "https://lonefafarms.netlify.app/",
    githubLink: "https://github.com/DevelopedByPresh/farm-website",
    tools: [
      "HTML",
      "CSS",
      "Javascript",
    ]
  },
  {
    id: crypto.randomUUID(),
    projectName: "BloomX",
    projectImage: "/bloom.png",
    projectDescription: "BloomX is an Application built with React to ease stress and facilitate Easy payment method for items of small quantities without having to queue for too long",
    demoLink: "https://bloomx.netlify.app/",
  //  githubLink: "https://github.com/deji-ice/MetaSecure-web3.0",
    tools: [
      "React",
      "JavaScript",
      "Axios",
      "tailwindCSS",
      "Redux",
    ]
  },




     {
    id: crypto.randomUUID(),
    projectName: "Road Watch",
    projectImage: "/road.png",
    projectDescription: `a mobile app that helps users see what’s happening on the road — in real time!
 🔹 Features:
1. Detects the user’s current location automatically
2. Displays live traffic status (blocked, moderate, or free)
3. Integrates TomTom Traffic API for real incident updates (accidents, road closures, events)
4. Uses OpenRouteService for speed-based traffic estimation
5. Sleek dark map interface built with React Native + Expo`,
    demoLink: "/",
    githubLink: "https://github.com/DevelopedByPresh/road-watch",
    tools: [
      "React Native",
      "Javascript",
      "Redux",
      'Expo'
    ]
  },




   {
    id: crypto.randomUUID(),
    projectName: "Mobile Mechanic",
    projectImage: "/mm.png",
    projectDescription: `Mobile Mechanic is an App that provides services for car owner and Mechanics...it also bridges the gap between car owners and mechanics`,
    demoLink: "/",
    githubLink: "https://github.com/DevelopedByPresh/mobile-mechanic",
    tools: [
      "React Native",
      "Javascript",
      "Redux",
      'Axios',
      'Postman'
    ]
  },
  
  {
    id: crypto.randomUUID(),
    projectName: "Worsship",
    projectImage: "/photos.png",
    projectDescription: `Worsship is Church Mobile App where users are allowed to worship, join a live stream, donate and follow a preferred church and its activities`,
    demoLink: "/",
      githubLink: "https://github.com/DevelopedByPresh/worship-app",
     tools: [
      "React Native",
      "Javascript",
      "Redux",
      'Axios',
      'Postman'
    ]
  },


];

// export const logos: LogoData[] = [
//   {
//     alt: "Solidity",
//     src: `https://res.cloudinary.com/dhvwthnzq/image/upload/v1733995420/Solidity_Programming_Language_os73lb.svg`,
//   },
//   {
//     alt: "React",
//     src: ReactLogo,
//   },
//   {
//     alt: "typescript",
//     src: "https://abrudz.github.io/logos/TypeScript.svg",
//   },
//   {
//     alt: "nextjs",
//     src: NextJsLogo,
//   },
//   {
//     alt: "javascript",
//     src: JavascriptLogo,
//   },
//   {
//     alt: "tailwindcss",
//     src: TailwindLogo,
//   },
//   {
//     alt: "mongodb",
//     src: MongoDbLogo,
//   },
//   {
//     alt: "SASS",
//     src: SassLogo,
//   },
//   {
//     alt: "gsap",
//     src: "https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg",
//   },
//   {
//     alt: "Docker",
//     src: DockerLogo,
//   },
//   {
//     alt: "ExpressJS",
//     src: ExpressLogo,
//   },
//   {
//     alt: "Vercel",
//     src: VercelLogo,
//   },
//   {
//     alt: "Vite",
//     src: ViteLogo,
//   },
//   {
//     alt: "Postman",
//     src: PostmanLogo,
//   }
// ];

export const experiences: JobExperience[] = [
  {
    occupation: "Frontend/Mobile Developer",
    companyName: "Worsship",
    dateStart: "03/2025",
    dateEnd: "Till Date",
    responsibilities: [
      `Utilized React Native for cross-platform mobile application development, enabling a single codebase for both iOS and Android platforms.`,
      `Implemented Redux for state management, ensuring consistent data flow and easier debugging within the application, and also employed Git for version control, facilitating collaborative development, tracking changes, and managing different versions of the application's codebase.`,
      `collaboration with backend developers was essential to ensure seamless integration between the user interface and the server-side logic.`,
      `Collaborated with designers to transform concepts into fully realized projects`,
      `Developed a responsive admin dashboard using React and Vite for high performance and fast builds.`,
      `Utilized Material UI to design a clean, consistent, and modern user interface.`
    ],
  },
  {
     occupation: "Frontend/Mobile Developer",
    companyName: "Mobile Mechanic",
    dateStart: "02/2024",
    dateEnd: "11/2024",
    responsibilities: [
      `Utilized React Native for cross-platform mobile application development, enabling a single codebase for both iOS and Android platforms.`,
      `Implemented Redux for state management, ensuring consistent data flow and easier debugging within the application, and also employed Git for version control, facilitating collaborative development, tracking changes, and managing different versions of the application's codebase.`,
      `collaboration with backend developers was essential to ensure seamless integration between the user interface and the server-side logic.`,
      `Partnered with designers to translate creative concepts into high-quality, real-world deliverables`,
      `Built an interactive analytics dashboard using React and Vite for optimized performance and rapid development`,
      `Delivered a fast, intuitive, and maintainable admin interface adaptable to multiple data sources`,
    ],
  },
  {
    occupation: "Frontend Developer",
    companyName: "Breics",
    dateStart: "06/2023",
    dateEnd: "06/2023",
    responsibilities: [
      "Collaborated with backend developers to resolve 100% of critical bugs within 2 weeks, enhancing application stability and user satisfaction.",
      "Enhanced application functionality by integrating Vue.js, resulting in a 25% increase in user satisfaction through improved feature accessibility within 3 months.",
      "Revamped the user interface of existing software, enhancing performance by 30% through optimized code and modern design principles within 3 months.",
      "Worked closely with designers to bridge the gap between design vision and project execution",
      "Collaborated with backend developers to resolve 100% of critical bugs within 2 weeks, enhancing application stability and user satisfaction.",
    ],
  },
  {
    occupation: "Frontend Developer",
    companyName: "Agritally",
    dateStart: "04/2022",
    dateEnd: "10/2022",
    responsibilities: [
      `Implemented Redux for state management, ensuring consistent data flow and easier debugging within the application, and also employed Git for version control, facilitating collaborative development, tracking changes, and managing different versions of the application's codebase.`,
      `Utilized Reactjs and Redux for Agritally Web application development, ensuring consistent data flow and easier debugging within the application`,
      `Facilitated collaboration with designers to ensure seamless translation of design concepts into practical, real-world outcomes.`,
      `Developed and maintained connections between staff-facing and admin user interfaces to streamline workflows.`,
      "Collaborated with backend developers to resolve 100% of critical bugs within 2 weeks, enhancing application stability and user satisfaction.",
    ],
  },


   {
    occupation: "Junior Frontend Developer",
    companyName: "Adrolly",
    dateStart: "04/2021",
    dateEnd: "10/2021",
    responsibilities: [
      `Developed a modern user interface with React, enhancing user experience and engagement through intuitive design and responsive features.`,
      `Integrated APIs into React components, enhancing performance through optimized data fetching strategies.`,
      `Utilized React and Redux + Git to develop different frontend modules`,
      "Collaborated with backend developers to enhancing application stability and user satisfaction.",
    ],
  },
];
